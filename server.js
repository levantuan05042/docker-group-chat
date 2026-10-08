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
const onlineUsers = new Map(); // socket.id -> { username, color, id, status: 'idle'|'playing' }

// Danh sách phòng cờ:
const caroRooms = new Map();     // roomId -> { id, p1, p2, board, turn, p1Symbol, p2Symbol, status }
const xiangqiRooms = new Map();  // roomId -> { id, p1, p2, board, turn, p1Color: 'red', p2Color: 'black', status }

// Hàng chờ tìm trận tự động (Matchmaking Queue)
const matchQueues = {
  caro: [],     // [socketId, ...]
  xiangqi: []  // [socketId, ...]
};

// Danh sách lời mời công khai trong chat: challengeId -> { fromId, fromName, gameType, status: 'open'|'accepted' }
const publicChallenges = new Map();

const colors = [
  '#3b82f6', '#10b981', '#f59e0b', '#ef4444', 
  '#8b5cf6', '#ec4899', '#06b6d4', '#14b8a6', '#f97316'
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Kiểm tra thắng Cờ Caro (5 ô liên tiếp)
function checkCaroWin(board, r, c, symbol) {
  const SIZE = 15;
  const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
  for (const [dr, dc] of directions) {
    let count = 1;
    let nr = r + dr, nc = c + dc;
    while (nr >= 0 && nr < SIZE && nc >= 0 && nc < SIZE && board[nr][nc] === symbol) {
      count++; nr += dr; nc += dc;
    }
    nr = r - dr; nc = c - dc;
    while (nr >= 0 && nr < SIZE && nc >= 0 && nc < SIZE && board[nr][nc] === symbol) {
      count++; nr -= dr; nc -= dc;
    }
    if (count >= 5) return true;
  }
  return false;
}

function createEmptyCaroBoard(size = 15) {
  return Array(size).fill(null).map(() => Array(size).fill(''));
}

// Bàn cờ tướng ban đầu 10 hàng x 9 cột (r: 0..9, c: 0..8)
// red (Đỏ) ở dưới (r: 6..9), black (Đen) ở trên (r: 0..3)
function createInitialXiangqiBoard() {
  const board = Array(10).fill(null).map(() => Array(9).fill(null));
  
  // Đen (r: 0..3)
  const blackBack = ['r_xe', 'r_ma', 'r_tuong', 'r_si', 'r_soai', 'r_si', 'r_tuong', 'r_ma', 'r_xe'];
  for (let c = 0; c < 9; c++) {
    board[0][c] = { side: 'black', type: blackBack[c].replace('r_', '') };
  }
  board[2][1] = { side: 'black', type: 'phao' };
  board[2][7] = { side: 'black', type: 'phao' };
  for (let c = 0; c < 9; c += 2) {
    board[3][c] = { side: 'black', type: 'tot' };
  }

  // Đỏ (r: 6..9)
  const redBack = ['xe', 'ma', 'tuong', 'si', 'soai', 'si', 'tuong', 'ma', 'xe'];
  for (let c = 0; c < 9; c++) {
    board[9][c] = { side: 'red', type: redBack[c] };
  }
  board[7][1] = { side: 'red', type: 'phao' };
  board[7][7] = { side: 'red', type: 'phao' };
  for (let c = 0; c < 9; c += 2) {
    board[6][c] = { side: 'red', type: 'tot' };
  }

  return board;
}

io.on('connection', (socket) => {
  // 1. Khi người dùng tham gia
  socket.on('join', (username) => {
    const cleanName = (username || '').trim().substring(0, 20) || 'Game thủ #' + socket.id.substring(0, 4);
    const userColor = getRandomColor();
    onlineUsers.set(socket.id, { 
      username: cleanName, 
      color: userColor, 
      id: socket.id,
      status: 'idle'
    });

    socket.emit('init', {
      history: messagesHistory,
      users: Array.from(onlineUsers.values()),
      currentUser: { username: cleanName, color: userColor, id: socket.id }
    });

    const joinMsg = {
      type: 'system',
      text: `${cleanName} vừa tham gia! Sẵn sàng chiến game!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    messagesHistory.push(joinMsg);
    if (messagesHistory.length > MAX_HISTORY) messagesHistory.shift();

    socket.broadcast.emit('user_joined', {
      message: joinMsg,
      users: Array.from(onlineUsers.values())
    });
  });

  // 2. Chat thông thường
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

  // 3. Khoe điểm / Kills vào Chat
  socket.on('share_score', ({ gameName, score }) => {
    const user = onlineUsers.get(socket.id);
    if (!user) return;

    const msg = {
      type: 'badge',
      badge: '🏆 THÀNH TÍCH ĐỈNH CAO',
      sender: user.username,
      color: user.color,
      text: `🎮 Tôi vừa đạt kỷ lục [${score}] trong trò [${gameName}]! Có ai phá được không?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    messagesHistory.push(msg);
    if (messagesHistory.length > MAX_HISTORY) messagesHistory.shift();
    io.emit('new_message', msg);
  });

  // 4. THÁCH ĐẤU CÔNG KHAI TRỰC TIẾP LÊN KHUNG CHAT (1 Chạm Vào Đấu Ngay!)
  socket.on('send_public_challenge', ({ gameType }) => {
    const user = onlineUsers.get(socket.id);
    if (!user) return;

    const challengeId = `pub_${Date.now()}_${socket.id}`;
    const gameLabel = gameType === 'xiangqi' ? 'Cờ Tướng' : 'Cờ Caro';
    
    publicChallenges.set(challengeId, {
      id: challengeId,
      fromId: socket.id,
      fromName: user.username,
      gameType,
      status: 'open'
    });

    const msg = {
      type: 'challenge_card',
      challengeId,
      gameType,
      gameLabel,
      sender: user.username,
      senderId: socket.id,
      color: user.color,
      text: `🔥 Ai dám solo [${gameLabel}] với tôi không? Bấm nút bên dưới để vào bàn ngay!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    messagesHistory.push(msg);
    if (messagesHistory.length > MAX_HISTORY) messagesHistory.shift();
    io.emit('new_message', msg);
  });

  // Chấp nhận thách đấu công khai từ chat
  socket.on('accept_public_challenge', ({ challengeId }) => {
    const challenge = publicChallenges.get(challengeId);
    if (!challenge || challenge.status !== 'open') {
      socket.emit('match_error', { message: 'Kèo đấu này đã được người khác nhận hoặc đã hết hạn!' });
      return;
    }

    if (challenge.fromId === socket.id) {
      socket.emit('match_error', { message: 'Bạn không thể tự nhận thách đấu của chính mình!' });
      return;
    }

    const challenger = onlineUsers.get(challenge.fromId);
    const accepter = onlineUsers.get(socket.id);
    if (!challenger || !accepter) {
      socket.emit('match_error', { message: 'Đối thủ đã rời khỏi phòng chat!' });
      return;
    }

    challenge.status = 'accepted';

    // Bắt đầu trận đấu
    if (challenge.gameType === 'xiangqi') {
      startXQGame(challenge.fromId, socket.id, challenger.username, accepter.username);
    } else {
      startCaroGame(challenge.fromId, socket.id, challenger.username, accepter.username);
    }
  });

  // 5. TÌM TRẬN NHANH (QUICK MATCHMAKING)
  socket.on('queue_join', ({ gameType }) => {
    const queue = matchQueues[gameType];
    if (!queue) return;

    // Tránh vào hàng chờ nhiều lần
    if (queue.includes(socket.id)) return;

    // Nếu đã có người chờ -> Ghép đôi ngay!
    while (queue.length > 0) {
      const opponentId = queue.shift();
      if (opponentId !== socket.id && onlineUsers.has(opponentId)) {
        const u1 = onlineUsers.get(opponentId);
        const u2 = onlineUsers.get(socket.id);

        if (gameType === 'xiangqi') {
          startXQGame(opponentId, socket.id, u1.username, u2.username);
        } else {
          startCaroGame(opponentId, socket.id, u1.username, u2.username);
        }
        return;
      }
    }

    // Nếu chưa có ai -> Thêm vào hàng chờ
    queue.push(socket.id);
    socket.emit('queue_waiting', { gameType });
  });

  socket.on('queue_leave', ({ gameType }) => {
    const queue = matchQueues[gameType];
    if (queue) {
      const idx = queue.indexOf(socket.id);
      if (idx !== -1) queue.splice(idx, 1);
    }
  });

  // 6. THÁCH ĐẤU ĐÍCH DANH (Mời người cụ thể từ danh sách)
  socket.on('send_direct_challenge', ({ targetSocketId, gameType }) => {
    const challenger = onlineUsers.get(socket.id);
    const target = onlineUsers.get(targetSocketId);
    if (!challenger || !target || socket.id === targetSocketId) return;

    io.to(targetSocketId).emit('received_direct_challenge', {
      challengerId: socket.id,
      challengerName: challenger.username,
      gameType,
      gameLabel: gameType === 'xiangqi' ? 'Cờ Tướng' : 'Cờ Caro'
    });
  });

  socket.on('respond_direct_challenge', ({ challengerId, gameType, accept }) => {
    const target = onlineUsers.get(socket.id);
    const challenger = onlineUsers.get(challengerId);
    if (!target || !challenger) return;

    if (!accept) {
      io.to(challengerId).emit('challenge_declined', { name: target.username });
      return;
    }

    if (gameType === 'xiangqi') {
      startXQGame(challengerId, socket.id, challenger.username, target.username);
    } else {
      startCaroGame(challengerId, socket.id, challenger.username, target.username);
    }
  });

  // ================= CỜ CARO LOGIC =================
  function startCaroGame(p1Id, p2Id, p1Name, p2Name) {
    const roomId = `caro_${p1Id}_${p2Id}_${Date.now()}`;
    const room = {
      id: roomId,
      p1: p1Id, p1Name,
      p2: p2Id, p2Name,
      board: createEmptyCaroBoard(15),
      turn: 'X',
      status: 'playing'
    };
    caroRooms.set(roomId, room);

    socketJoinRoom(p1Id, p2Id, roomId);

    io.to(roomId).emit('caro_game_start', {
      roomId,
      p1: { id: p1Id, name: p1Name, symbol: 'X' },
      p2: { id: p2Id, name: p2Name, symbol: 'O' },
      currentTurn: 'X'
    });

    const msg = {
      type: 'system',
      text: `⚔️ Trận Cờ Caro giữa [${p1Name}] (X) và [${p2Name}] (O) đã bắt đầu!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    messagesHistory.push(msg);
    io.emit('new_message', msg);
  }

  socket.on('caro_play_move', ({ roomId, row, col }) => {
    const room = caroRooms.get(roomId);
    if (!room || room.status !== 'playing') return;

    const isP1 = socket.id === room.p1;
    const isP2 = socket.id === room.p2;
    if (!isP1 && !isP2) return;

    const mySymbol = isP1 ? 'X' : 'O';
    if (room.turn !== mySymbol) return;
    if (room.board[row][col] !== '') return;

    room.board[row][col] = mySymbol;

    if (checkCaroWin(room.board, row, col, mySymbol)) {
      room.status = 'ended';
      const winnerName = isP1 ? room.p1Name : room.p2Name;
      io.to(roomId).emit('caro_game_over', { winner: mySymbol, winnerName, row, col });

      const winMsg = {
        type: 'badge',
        badge: '👑 THẮNG CỜ CARO',
        sender: 'Trọng tài Caro',
        color: '#10b981',
        text: `🎉 Chúc mừng ${winnerName} (${mySymbol}) đã chiến thắng ván Cờ Caro!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      messagesHistory.push(winMsg);
      io.emit('new_message', winMsg);
      return;
    }

    room.turn = room.turn === 'X' ? 'O' : 'X';
    io.to(roomId).emit('caro_move_made', { row, col, symbol: mySymbol, nextTurn: room.turn });
  });

  socket.on('caro_surrender', ({ roomId }) => {
    const room = caroRooms.get(roomId);
    if (!room || room.status !== 'playing') return;
    const isP1 = socket.id === room.p1;
    room.status = 'ended';
    io.to(roomId).emit('caro_game_over', {
      winner: isP1 ? 'O' : 'X',
      winnerName: isP1 ? room.p2Name : room.p1Name,
      reason: `${isP1 ? room.p1Name : room.p2Name} đã xin hàng!`
    });
  });

  // ================= CỜ TƯỚNG (XIANGQI) LOGIC =================
  function startXQGame(p1Id, p2Id, p1Name, p2Name) {
    const roomId = `xq_${p1Id}_${p2Id}_${Date.now()}`;
    const room = {
      id: roomId,
      p1: p1Id, p1Name, // Đỏ đi trước
      p2: p2Id, p2Name, // Đen đi sau
      board: createInitialXiangqiBoard(),
      turn: 'red',
      status: 'playing'
    };
    xiangqiRooms.set(roomId, room);

    socketJoinRoom(p1Id, p2Id, roomId);

    io.to(roomId).emit('xiangqi_game_start', {
      roomId,
      p1: { id: p1Id, name: p1Name, color: 'red' },
      p2: { id: p2Id, name: p2Name, color: 'black' },
      board: room.board,
      currentTurn: 'red'
    });

    const msg = {
      type: 'system',
      text: `🎎 Đại chiến Cờ Tướng giữa [${p1Name}] (Quân Đỏ) và [${p2Name}] (Quân Đen) đã khai cuộc!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    messagesHistory.push(msg);
    io.emit('new_message', msg);
  }

  socket.on('xiangqi_play_move', ({ roomId, from, to }) => {
    const room = xiangqiRooms.get(roomId);
    if (!room || room.status !== 'playing') return;

    const isP1 = socket.id === room.p1;
    const isP2 = socket.id === room.p2;
    if (!isP1 && !isP2) return;

    const myColor = isP1 ? 'red' : 'black';
    if (room.turn !== myColor) return;

    const piece = room.board[from.r][from.c];
    if (!piece || piece.side !== myColor) return;

    const targetPiece = room.board[to.r][to.c];
    room.board[to.r][to.c] = piece;
    room.board[from.r][from.c] = null;

    // Kiểm tra ăn Tướng (Soái)
    if (targetPiece && targetPiece.type === 'soai') {
      room.status = 'ended';
      const winnerName = isP1 ? room.p1Name : room.p2Name;
      io.to(roomId).emit('xiangqi_game_over', {
        winner: myColor,
        winnerName,
        from, to
      });

      const winMsg = {
        type: 'badge',
        badge: '👑 CHIẾU BÍ CỜ TƯỚNG',
        sender: 'Trọng tài Cờ Tướng',
        color: '#f59e0b',
        text: `🎎 Quân ${myColor === 'red' ? 'ĐỎ' : 'ĐEN'} của [${winnerName}] đã trảm Tướng, giành chiến thắng oanh liệt!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      messagesHistory.push(winMsg);
      io.emit('new_message', winMsg);
      return;
    }

    // Đổi lượt
    room.turn = room.turn === 'red' ? 'black' : 'red';
    io.to(roomId).emit('xiangqi_move_made', {
      from,
      to,
      nextTurn: room.turn
    });
  });

  socket.on('xiangqi_surrender', ({ roomId }) => {
    const room = xiangqiRooms.get(roomId);
    if (!room || room.status !== 'playing') return;
    const isP1 = socket.id === room.p1;
    room.status = 'ended';
    io.to(roomId).emit('xiangqi_game_over', {
      winner: isP1 ? 'black' : 'red',
      winnerName: isP1 ? room.p2Name : room.p1Name,
      reason: `${isP1 ? room.p1Name : room.p2Name} đã nhận thua!`
    });
  });

  function socketJoinRoom(id1, id2, roomId) {
    const s1 = io.sockets.sockets.get(id1);
    const s2 = io.sockets.sockets.get(id2);
    if (s1) s1.join(roomId);
    if (s2) s2.join(roomId);
  }

  // Khi ngắt kết nối
  socket.on('disconnect', () => {
    const user = onlineUsers.get(socket.id);
    if (user) {
      onlineUsers.delete(socket.id);

      // Xóa khỏi hàng chờ nếu có
      for (const q of Object.values(matchQueues)) {
        const idx = q.indexOf(socket.id);
        if (idx !== -1) q.splice(idx, 1);
      }

      // Xử lý phòng Cờ Caro
      for (const [roomId, room] of caroRooms.entries()) {
        if ((room.p1 === socket.id || room.p2 === socket.id) && room.status === 'playing') {
          room.status = 'ended';
          io.to(roomId).emit('caro_opponent_disconnected', { text: `Đối thủ ${user.username} đã thoát ván!` });
          caroRooms.delete(roomId);
        }
      }

      // Xử lý phòng Cờ Tướng
      for (const [roomId, room] of xiangqiRooms.entries()) {
        if ((room.p1 === socket.id || room.p2 === socket.id) && room.status === 'playing') {
          room.status = 'ended';
          io.to(roomId).emit('xiangqi_opponent_disconnected', { text: `Đối thủ ${user.username} đã thoát ván!` });
          xiangqiRooms.delete(roomId);
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
