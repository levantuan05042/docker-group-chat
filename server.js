const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Lịch sử chat & người dùng online
const messagesHistory = [];
const MAX_HISTORY = 60;
const onlineUsers = new Map(); // socket.id -> { username, color }

// Danh sách phòng cờ caro đang diễn ra: roomId -> { p1, p2, board, turn, p1Symbol: 'X', p2Symbol: 'O', status }
const caroRooms = new Map();

const colors = [
  '#3b82f6', '#10b981', '#f59e0b', '#ef4444', 
  '#8b5cf6', '#ec4899', '#06b6d4', '#14b8a6', '#f97316'
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function checkCaroWin(board, r, c, symbol) {
  const SIZE = 15;
  const directions = [
    [0, 1],  // ngang
    [1, 0],  // dọc
    [1, 1],  // chéo chính \
    [1, -1]  // chéo phụ /
  ];

  for (const [dr, dc] of directions) {
    let count = 1;
    // Đi xuôi
    let nr = r + dr, nc = c + dc;
    while (nr >= 0 && nr < SIZE && nc >= 0 && nc < SIZE && board[nr][nc] === symbol) {
      count++;
      nr += dr;
      nc += dc;
    }
    // Đi ngược
    nr = r - dr; nc = c - dc;
    while (nr >= 0 && nr < SIZE && nc >= 0 && nc < SIZE && board[nr][nc] === symbol) {
      count++;
      nr -= dr;
      nc -= dc;
    }

    if (count >= 5) {
      return true;
    }
  }
  return false;
}

function createEmptyBoard(size = 15) {
  return Array(size).fill(null).map(() => Array(size).fill(''));
}

io.on('connection', (socket) => {
  // Khi người dùng tham gia
  socket.on('join', (username) => {
    const cleanName = (username || '').trim().substring(0, 20) || 'Game thủ #' + socket.id.substring(0, 4);
    const userColor = getRandomColor();
    onlineUsers.set(socket.id, { username: cleanName, color: userColor, id: socket.id });

    // Trả về dữ liệu khởi tạo
    socket.emit('init', {
      history: messagesHistory,
      users: Array.from(onlineUsers.values()),
      currentUser: { username: cleanName, color: userColor, id: socket.id }
    });

    const joinMsg = {
      type: 'system',
      text: `${cleanName} vừa tham gia phòng chat & game!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    messagesHistory.push(joinMsg);
    if (messagesHistory.length > MAX_HISTORY) messagesHistory.shift();

    socket.broadcast.emit('user_joined', {
      message: joinMsg,
      users: Array.from(onlineUsers.values())
    });
  });

  // Chat thông thường
  socket.on('send_message', (text) => {
    const user = onlineUsers.get(socket.id);
    if (!user) return;
    const cleanText = (text || '').trim();
    if (!cleanText) return;

    const msg = {
      type: 'chat',
      sender: user.username,
      color: user.color,
      text: cleanText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    messagesHistory.push(msg);
    if (messagesHistory.length > MAX_HISTORY) messagesHistory.shift();

    io.emit('new_message', msg);
  });

  // Chia sẻ điểm số / thành tích game vào chat
  socket.on('share_score', ({ gameName, score }) => {
    const user = onlineUsers.get(socket.id);
    if (!user) return;

    const text = `🎮 Tôi vừa đạt ${score} điểm trong game "${gameName}"! Có ai phá được kỷ lục này không?`;
    const msg = {
      type: 'badge',
      badge: '🏆 KỶ LỤC MỚI',
      sender: user.username,
      color: user.color,
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    messagesHistory.push(msg);
    if (messagesHistory.length > MAX_HISTORY) messagesHistory.shift();
    io.emit('new_message', msg);
  });

  // ========== CỜ CARO ONLINE (MULTIPLAYER) ==========
  // 1. Gửi lời mời thách đấu
  socket.on('caro_send_challenge', ({ targetSocketId }) => {
    const challenger = onlineUsers.get(socket.id);
    const target = onlineUsers.get(targetSocketId);
    if (!challenger || !target || socket.id === targetSocketId) return;

    io.to(targetSocketId).emit('caro_received_challenge', {
      challengerId: socket.id,
      challengerName: challenger.username
    });
  });

  // 2. Phản hồi thách đấu (chấp nhận / từ chối)
  socket.on('caro_respond_challenge', ({ challengerId, accept }) => {
    const target = onlineUsers.get(socket.id);
    const challenger = onlineUsers.get(challengerId);
    if (!target || !challenger) return;

    if (!accept) {
      io.to(challengerId).emit('caro_challenge_declined', {
        name: target.username
      });
      return;
    }

    // Tạo phòng đấu
    const roomId = `room_${socket.id}_${challengerId}_${Date.now()}`;
    const room = {
      id: roomId,
      p1: challengerId, // Quân X, đi trước
      p1Name: challenger.username,
      p2: socket.id,     // Quân O, đi sau
      p2Name: target.username,
      board: createEmptyBoard(15),
      turn: 'X',
      status: 'playing'
    };

    caroRooms.set(roomId, room);

    socket.join(roomId);
    const challengerSocket = io.sockets.sockets.get(challengerId);
    if (challengerSocket) challengerSocket.join(roomId);

    // Thông báo cho 2 người chơi
    io.to(roomId).emit('caro_game_start', {
      roomId,
      p1: { id: challengerId, name: challenger.username, symbol: 'X' },
      p2: { id: socket.id, name: target.username, symbol: 'O' },
      currentTurn: 'X'
    });

    // Thông báo vào chat chung
    const alertMsg = {
      type: 'system',
      text: `⚔️ Trận quyết đấu Cờ Caro giữa [${challenger.username}] (X) và [${target.username}] (O) đã bắt đầu!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    messagesHistory.push(alertMsg);
    io.emit('new_message', alertMsg);
  });

  // 3. Đánh một nước cờ
  socket.on('caro_play_move', ({ roomId, row, col }) => {
    const room = caroRooms.get(roomId);
    if (!room || room.status !== 'playing') return;

    const isP1 = socket.id === room.p1;
    const isP2 = socket.id === room.p2;
    if (!isP1 && !isP2) return;

    const mySymbol = isP1 ? 'X' : 'O';
    if (room.turn !== mySymbol) return; // Không phải lượt
    if (row < 0 || row >= 15 || col < 0 || col >= 15) return;
    if (room.board[row][col] !== '') return; // Ô đã có quân

    room.board[row][col] = mySymbol;

    const isWin = checkCaroWin(room.board, row, col, mySymbol);
    if (isWin) {
      room.status = 'ended';
      const winnerName = isP1 ? room.p1Name : room.p2Name;
      io.to(roomId).emit('caro_game_over', {
        winner: mySymbol,
        winnerName,
        row,
        col
      });

      // Thông báo vinh danh lên chat
      const winMsg = {
        type: 'badge',
        badge: '👑 THẮNG CỜ CARO',
        sender: 'Trọng tài Caro',
        color: '#10b981',
        text: `🎉 Chúc mừng ${winnerName} (${mySymbol}) đã xuất sắc đánh bại đối thủ trong ván Cờ Caro!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      messagesHistory.push(winMsg);
      io.emit('new_message', winMsg);
      return;
    }

    // Đổi lượt
    room.turn = room.turn === 'X' ? 'O' : 'X';
    io.to(roomId).emit('caro_move_made', {
      row,
      col,
      symbol: mySymbol,
      nextTurn: room.turn
    });
  });

  // 4. Bỏ cuộc / Xin hòa / Làm lại ván cờ
  socket.on('caro_surrender', ({ roomId }) => {
    const room = caroRooms.get(roomId);
    if (!room || room.status !== 'playing') return;

    const isP1 = socket.id === room.p1;
    const winnerSymbol = isP1 ? 'O' : 'X';
    const winnerName = isP1 ? room.p2Name : room.p1Name;
    const loserName = isP1 ? room.p1Name : room.p2Name;

    room.status = 'ended';
    io.to(roomId).emit('caro_game_over', {
      winner: winnerSymbol,
      winnerName,
      reason: `${loserName} đã xin thua/rời phòng.`
    });
  });

  socket.on('caro_restart_request', ({ roomId }) => {
    const room = caroRooms.get(roomId);
    if (!room) return;
    room.board = createEmptyBoard(15);
    room.turn = 'X';
    room.status = 'playing';

    io.to(roomId).emit('caro_game_restarted', {
      currentTurn: 'X'
    });
  });

  // Khi người dùng thoát / đóng tab
  socket.on('disconnect', () => {
    const user = onlineUsers.get(socket.id);
    if (user) {
      onlineUsers.delete(socket.id);

      // Xử lý các phòng cờ dang dở
      for (const [roomId, room] of caroRooms.entries()) {
        if ((room.p1 === socket.id || room.p2 === socket.id) && room.status === 'playing') {
          room.status = 'ended';
          io.to(roomId).emit('caro_opponent_disconnected', {
            text: `Đối thủ ${user.username} đã ngắt kết nối.`
          });
          caroRooms.delete(roomId);
        }
      }

      const leaveMsg = {
        type: 'system',
        text: `${user.username} đã rời đi.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      messagesHistory.push(leaveMsg);
      if (messagesHistory.length > MAX_HISTORY) messagesHistory.shift();

      io.emit('user_left', {
        message: leaveMsg,
        users: Array.from(onlineUsers.values())
      });
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Game & Chat Server đang chạy tại cổng http://localhost:${PORT}`);
});
