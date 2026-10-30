import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { defaultQuiz } from "./questions.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let activeQuiz = defaultQuiz;
const customQuizPath = path.join(__dirname, "custom_quiz.json");
if (fs.existsSync(customQuizPath)) {
  try {
    activeQuiz = JSON.parse(fs.readFileSync(customQuizPath, "utf-8"));
  } catch (e) {
    console.error("Error reading custom_quiz.json", e);
  }
}

const app = express();
app.use(cors());
app.use(express.json());

// Fixed Host / Admin account
const ADMIN_USER = process.env.ADMIN_USER || "agribank";
const ADMIN_PASS = process.env.ADMIN_PASS || "agribank@2026";

// Admin Login endpoint
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body || {};
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    return res.json({
      success: true,
      token: "agribank_verified_host_token",
      user: { username: ADMIN_USER, name: "Quản Trị Viên Agribank" }
    });
  }
  return res.status(401).json({
    success: false,
    message: "Tên đăng nhập hoặc mật khẩu Quản trò không chính xác!"
  });
});

// Serve client dist in production
const clientDist = path.join(__dirname, "../client/dist");
app.use(express.static(clientDist));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  pingTimeout: 30000,
  pingInterval: 10000
});

// Rooms storage
const rooms = new Map();

function generateRoomCode() {
  let code;
  do {
    code = Math.floor(100000 + Math.random() * 900000).toString();
  } while (rooms.has(code));
  return code;
}

// Helper to flatten 2 parts into an indexed list of 20 questions
function prepareQuestions(quiz) {
  const flatQuestions = [];
  quiz.parts.forEach((part) => {
    part.questions.forEach((q, idx) => {
      flatQuestions.push({
        ...q,
        partNumber: part.partNumber,
        partTitle: part.partTitle,
        partQuestionIndex: idx + 1,
        totalPartQuestions: part.questions.length
      });
    });
  });
  return flatQuestions;
}

// Calculate leaderboard for a room
function getLeaderboard(room) {
  const players = Array.from(room.players.values()).map(p => ({
    id: p.id,
    name: p.name,
    avatar: p.avatar,
    score: p.score,
    streak: p.streak,
    lastPointsAwarded: p.lastPointsAwarded || 0,
    rank: 0,
    answersCount: p.answersCount || 0,
    correctCount: p.correctCount || 0,
    totalTimeTaken: p.totalTimeTaken || 0
  }));

  // Sort descending by score, tie-break by fastest total answer time
  players.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.totalTimeTaken - b.totalTimeTaken;
  });

  players.forEach((p, idx) => {
    p.rank = idx + 1;
  });

  return players;
}

io.on("connection", (socket) => {
  // HOST: Create Room
  socket.on("host:create_room", (customQuiz, callback) => {
    const code = generateRoomCode();
    const quiz = customQuiz || activeQuiz;
    const questions = prepareQuestions(quiz);

    const room = {
      code,
      hostSocketId: socket.id,
      quizMeta: {
        title: quiz.title,
        description: quiz.description,
        totalQuestions: questions.length,
        parts: quiz.parts.map(p => ({
          partNumber: p.partNumber,
          partTitle: p.partTitle,
          questionsCount: p.questions.length
        }))
      },
      questions,
      currentQuestionIndex: -1, // -1 means Lobby
      currentPart: 1,
      status: "LOBBY", // LOBBY, PART_INTRO, QUESTION, QUESTION_RESULT, LEADERBOARD, PART_SUMMARY, GAME_OVER
      timer: 0,
      timerInterval: null,
      players: new Map(), // socketId -> player
      answersReceived: new Map() // socketId -> { optionIndex, timeRemaining, isCorrect, points }
    };

    rooms.set(code, room);
    socket.join(code);
    socket.join(`host:${code}`);

    console.log(`[Room ${code}] Created by host ${socket.id}`);
    callback({ success: true, roomCode: code, quizMeta: room.quizMeta });
  });

  // PLAYER: Join Room
  socket.on("player:join", ({ roomCode, name, avatar }, callback) => {
    const room = rooms.get(roomCode);
    if (!room) {
      return callback({ success: false, message: "Mã phòng không tồn tại hoặc đã kết thúc!" });
    }

    if (room.status !== "LOBBY" && room.status !== "PART_INTRO") {
      return callback({ success: false, message: "Cuộc thi đã bắt đầu, không thể tham gia lúc này!" });
    }

    if (room.players.size >= 300) {
      return callback({ success: false, message: "Phòng đã đạt giới hạn tối đa người chơi!" });
    }

    const player = {
      id: socket.id,
      name: (name || "Người chơi").trim().slice(0, 24),
      avatar: avatar || "🚀",
      score: 0,
      streak: 0,
      answersCount: 0,
      correctCount: 0,
      isBot: false,
      connected: true
    };

    room.players.set(socket.id, player);
    socket.join(roomCode);

    // Notify host & room
    io.to(`host:${roomCode}`).emit("room:players_updated", {
      playersCount: room.players.size,
      players: Array.from(room.players.values()).map(p => ({ id: p.id, name: p.name, avatar: p.avatar, score: p.score }))
    });

    callback({
      success: true,
      roomCode,
      player,
      quizMeta: room.quizMeta,
      currentStatus: room.status
    });

    console.log(`[Room ${roomCode}] Player ${player.name} (${socket.id}) joined. Total: ${room.players.size}`);
  });

  // HOST: Add Simulation Bots (for load testing 200 players)
  socket.on("host:add_bots", ({ roomCode, count }, callback) => {
    const room = rooms.get(roomCode);
    if (!room) return callback?.({ success: false });

    const avatars = ["🦊", "🐯", "🦁", "🐼", "🐨", "🦄", "🐙", "🐬", "🦅", "🐝", "⚡", "🚀", "🔥", "🎯", "⭐"];
    const surnames = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Phan", "Vũ", "Võ", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương"];
    const midnames = ["Văn", "Thị", "Hải", "Minh", "Đức", "Anh", "Bảo", "Gia", "Thanh", "Tuấn"];
    const firstnames = ["An", "Bình", "Châu", "Dũng", "Em", "Hà", "Hải", "Khoa", "Linh", "Long", "Mai", "Nam", "Nhi", "Phúc", "Quân", "Sơn", "Tâm", "Thảo", "Trí", "Việt"];

    const currentCount = room.players.size;
    const addCount = Math.min(count || 50, 250 - currentCount);

    for (let i = 0; i < addCount; i++) {
      const botId = `bot_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
      const randomName = `${surnames[Math.floor(Math.random() * surnames.length)]} ${midnames[Math.floor(Math.random() * midnames.length)]} ${firstnames[Math.floor(Math.random() * firstnames.length)]}`;
      const bot = {
        id: botId,
        name: randomName,
        avatar: avatars[Math.floor(Math.random() * avatars.length)],
        score: 0,
        streak: 0,
        answersCount: 0,
        correctCount: 0,
        isBot: true,
        connected: true
      };
      room.players.set(botId, bot);
    }

    io.to(`host:${roomCode}`).emit("room:players_updated", {
      playersCount: room.players.size,
      players: Array.from(room.players.values()).map(p => ({ id: p.id, name: p.name, avatar: p.avatar, score: p.score }))
    });

    callback?.({ success: true, count: room.players.size });
  });

  // HOST: Start Quiz
  socket.on("host:start_quiz", ({ roomCode, overrideTimeLimit }) => {
    const room = rooms.get(roomCode);
    if (!room || room.hostSocketId !== socket.id) return;

    if (overrideTimeLimit && Number(overrideTimeLimit) > 0) {
      room.overrideTimeLimit = Number(overrideTimeLimit);
    }

    room.currentQuestionIndex = 0;
    sendQuestion(room);
  });

  // HOST: Next Question
  socket.on("host:next_question", ({ roomCode }) => {
    const room = rooms.get(roomCode);
    if (!room || room.hostSocketId !== socket.id) return;

    if (room.timerInterval) clearInterval(room.timerInterval);

    room.currentQuestionIndex++;
    if (room.currentQuestionIndex < room.questions.length) {
      // Check if we just entered Part 2 (Question index 10)
      if (room.currentQuestionIndex === 10 && room.status !== "PART_SUMMARY") {
        room.status = "PART_SUMMARY";
        io.to(roomCode).emit("room:state", {
          status: "PART_SUMMARY",
          completedPart: 1,
          nextPart: 2,
          leaderboard: getLeaderboard(room).slice(0, 10)
        });
        return;
      }

      sendQuestion(room);
    } else {
      // Game Over
      endGame(room);
    }
  });

  // HOST: Show Leaderboard
  socket.on("host:show_leaderboard", ({ roomCode }) => {
    const room = rooms.get(roomCode);
    if (!room || room.hostSocketId !== socket.id) return;

    room.status = "LEADERBOARD";
    const leaderboard = getLeaderboard(room);
    io.to(roomCode).emit("room:state", {
      status: "LEADERBOARD",
      questionIndex: room.currentQuestionIndex,
      totalQuestions: room.questions.length,
      leaderboard: leaderboard.slice(0, 10),
      totalPlayers: leaderboard.length
    });
  });

  // PLAYER: Submit Answer
  socket.on("player:submit_answer", ({ roomCode, questionId, optionIndex, timeRemaining }, callback) => {
    const room = rooms.get(roomCode);
    if (!room || room.status !== "QUESTION") {
      return callback?.({ success: false, message: "Hết giờ hoặc câu hỏi không hợp lệ!" });
    }

    const currentQ = room.questions[room.currentQuestionIndex];
    if (currentQ.id !== questionId) {
      return callback?.({ success: false, message: "Câu hỏi đã thay đổi!" });
    }

    if (room.answersReceived.has(socket.id)) {
      return callback?.({ success: false, message: "Bạn đã trả lời câu này rồi!" });
    }

    const player = room.players.get(socket.id);
    if (!player) return callback?.({ success: false });

    const timeSpent = Math.max(0, currentQ.timeLimit - timeRemaining);

    // Chỉ ghi nhận câu trả lời, ĐIỂM SẼ ĐƯỢC TÍNH VÀ CỘNG KHI HẾT THỜI GIAN
    room.answersReceived.set(socket.id, {
      optionIndex,
      timeRemaining,
      timeSpent
    });

    // Notify Host about progress
    io.to(`host:${roomCode}`).emit("host:answer_stat", {
      answeredCount: room.answersReceived.size,
      totalPlayers: room.players.size
    });

    callback?.({
      success: true,
      recorded: true
    });

    // If all real players answered, can early end question
    const realPlayers = Array.from(room.players.values()).filter(p => !p.isBot);
    const realAnswers = Array.from(room.answersReceived.keys()).filter(id => !id.startsWith("bot_"));
    if (realAnswers.length >= realPlayers.length && realPlayers.length > 0) {
      // Early countdown trigger or let timer run
    }
  });

  socket.on("disconnect", () => {
    // If host disconnected
    rooms.forEach((room, code) => {
      if (room.hostSocketId === socket.id) {
        console.log(`[Room ${code}] Host disconnected.`);
      } else if (room.players.has(socket.id)) {
        const player = room.players.get(socket.id);
        player.connected = false;
        io.to(`host:${code}`).emit("room:players_updated", {
          playersCount: room.players.size,
          players: Array.from(room.players.values()).map(p => ({ id: p.id, name: p.name, avatar: p.avatar, score: p.score }))
        });
      }
    });
  });
});

// Function to send a question & run timer
function sendQuestion(room) {
  if (room.timerInterval) clearInterval(room.timerInterval);
  room.answersReceived.clear();

  const q = room.questions[room.currentQuestionIndex];
  const effectiveTimeLimit = room.overrideTimeLimit || q.timeLimit || 15;

  room.status = "QUESTION";
  room.timer = effectiveTimeLimit;

  // Broadcast to players (without the correctIndex for security!)
  const playerQuestion = {
    id: q.id,
    question: q.question,
    options: q.options,
    timeLimit: effectiveTimeLimit,
    points: q.points,
    partNumber: q.partNumber,
    partTitle: q.partTitle,
    partQuestionIndex: q.partQuestionIndex,
    totalPartQuestions: q.totalPartQuestions,
    overallIndex: room.currentQuestionIndex + 1,
    totalQuestions: room.questions.length
  };

  io.to(room.code).emit("room:state", {
    status: "QUESTION",
    question: playerQuestion
  });

  // Host also receives correct index for presentation
  io.to(`host:${room.code}`).emit("host:question_view", {
    ...playerQuestion,
    correctIndex: q.correctIndex,
    explanation: q.explanation
  });

  // Simulate bot answers staggered over question time
  simulateBots(room, { ...q, timeLimit: effectiveTimeLimit });

  // Start Server-side Timer
  room.timerInterval = setInterval(() => {
    room.timer--;
    io.to(room.code).emit("room:timer_tick", { timeLeft: room.timer });

    if (room.timer <= 0) {
      clearInterval(room.timerInterval);
      finishQuestion(room);
    }
  }, 1000);
}

// Bot simulation for load testing 200 players
function simulateBots(room, question) {
  const bots = Array.from(room.players.values()).filter(p => p.isBot);
  bots.forEach(bot => {
    // Random answer delay between 2s and timeLimit - 1s
    const delay = Math.floor(Math.random() * (question.timeLimit - 3) + 2) * 1000;
    setTimeout(() => {
      if (room.status !== "QUESTION") return;
      // 70% chance bot answers correctly
      const willBeCorrect = Math.random() < 0.75;
      const optionIndex = willBeCorrect
        ? question.correctIndex
        : (question.correctIndex + 1 + Math.floor(Math.random() * 3)) % 4;

      const delaySec = Math.round(delay / 1000);
      const timeRemaining = Math.max(1, question.timeLimit - delaySec);
      const timeSpent = Math.max(0, question.timeLimit - timeRemaining);

      room.answersReceived.set(bot.id, {
        optionIndex,
        timeRemaining,
        timeSpent
      });

      io.to(`host:${room.code}`).emit("host:answer_stat", {
        answeredCount: room.answersReceived.size,
        totalPlayers: room.players.size
      });
    }, delay);
  });
}

// Finish question, award points to all players, and reveal stats
function finishQuestion(room) {
  room.status = "QUESTION_RESULT";
  const q = room.questions[room.currentQuestionIndex];

  // Calculate option pick distributions & compute individual points
  const distribution = [0, 0, 0, 0];
  const playerResults = {};

  room.players.forEach((player, playerId) => {
    const ans = room.answersReceived.get(playerId);
    if (ans) {
      if (ans.optionIndex >= 0 && ans.optionIndex < 4) {
        distribution[ans.optionIndex]++;
      }

      const isCorrect = (ans.optionIndex === q.correctIndex);
      let pointsAwarded = 0;
      let tierPercent = 0;

      if (isCorrect) {
        // Phân rã mốc thời gian 5s:
        // 0s - 5s: 100% (100đ)
        // 5s - 10s: 50% (50đ)
        // 10s - 15s: 25% (25đ)
        // 15s - 20s: 12.5% (~13đ)
        // 20s - 25s: 6.25% (~6đ)
        let interval = 0;
        if (ans.timeSpent > 5) {
          interval = Math.floor((ans.timeSpent - 0.001) / 5);
        }
        const multiplier = Math.pow(0.5, interval);
        tierPercent = Math.round(multiplier * 1000) / 10;
        const maxPoints = q.points || 100;
        pointsAwarded = Math.max(1, Math.round(maxPoints * multiplier));

        player.streak = (player.streak || 0) + 1;
        player.score += pointsAwarded;
        player.correctCount = (player.correctCount || 0) + 1;
      } else {
        player.streak = 0;
      }

      player.totalTimeTaken = (player.totalTimeTaken || 0) + ans.timeSpent;
      player.answersCount = (player.answersCount || 0) + 1;
      player.lastPointsAwarded = pointsAwarded;

      playerResults[playerId] = {
        isCorrect,
        pointsAwarded,
        tierPercent,
        timeSpent: Math.round(ans.timeSpent * 10) / 10,
        currentScore: player.score,
        streak: player.streak
      };
    } else {
      // Hết giờ mà không nộp câu trả lời
      player.streak = 0;
      player.lastPointsAwarded = 0;
      playerResults[playerId] = {
        isCorrect: false,
        notAnswered: true,
        pointsAwarded: 0,
        currentScore: player.score,
        streak: 0
      };
    }
  });

  io.to(room.code).emit("room:state", {
    status: "QUESTION_RESULT",
    questionId: q.id,
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    distribution,
    playerResults,
    totalAnswered: room.answersReceived.size,
    totalPlayers: room.players.size
  });
}

function endGame(room) {
  if (room.timerInterval) clearInterval(room.timerInterval);
  room.status = "GAME_OVER";
  const fullLeaderboard = getLeaderboard(room);

  io.to(room.code).emit("room:state", {
    status: "GAME_OVER",
    leaderboard: fullLeaderboard,
    podium: fullLeaderboard.slice(0, 3),
    totalPlayers: fullLeaderboard.length
  });
}

// Export Results CSV
app.get("/api/room/:code/export", (req, res) => {
  const room = rooms.get(req.params.code);
  if (!room) return res.status(404).json({ error: "Phòng không tồn tại" });

  const leaderboard = getLeaderboard(room);
  let csv = "Hang,Ten thi sinh,Diem tong,So cau dung,Tong so cau,Ty le chinh xac (%)\n";
  leaderboard.forEach(p => {
    const accuracy = p.answersCount > 0 ? Math.round((p.correctCount / room.questions.length) * 100) : 0;
    csv += `${p.rank},"${p.name.replace(/"/g, '""')}",${p.score},${p.correctCount},${room.questions.length},${accuracy}%\n`;
  });

  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", `attachment; filename="Ket_Qua_Wayground_${room.code}.csv"`);
  res.send("\uFEFF" + csv); // Include BOM for Excel UTF-8 support
});

// Quiz CRUD API
app.get("/api/quiz", (req, res) => {
  res.json(activeQuiz);
});

app.post("/api/quiz", (req, res) => {
  if (req.body && req.body.parts) {
    activeQuiz = req.body;
    try {
      fs.writeFileSync(customQuizPath, JSON.stringify(activeQuiz, null, 2), "utf-8");
    } catch (e) {
      console.error("Error saving custom quiz", e);
    }
    return res.json({ success: true, quiz: activeQuiz });
  }
  res.status(400).json({ error: "Dữ liệu không hợp lệ" });
});

app.post("/api/quiz/reset", (req, res) => {
  activeQuiz = defaultQuiz;
  if (fs.existsSync(customQuizPath)) {
    fs.unlinkSync(customQuizPath);
  }
  res.json({ success: true, quiz: defaultQuiz });
});

// Single Page App fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(clientDist, "index.html"), (err) => {
    if (err) {
      res.status(200).send("Wayground Quiz Server is running. Client is building or dev mode.");
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`[Wayground Quiz] Server running on port ${PORT}`);
});
