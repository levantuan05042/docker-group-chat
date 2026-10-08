const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Lưu trữ lịch sử tin nhắn gần nhất & danh sách user online
const messagesHistory = [];
const MAX_HISTORY = 50;
const onlineUsers = new Map(); // socket.id -> { username, color }

// Bảng màu avatar ngẫu nhiên
const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#14b8a6'];
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

io.on('connection', (socket) => {
  // Khi user join vào phòng chat với tên
  socket.on('join', (username) => {
    const cleanName = (username || '').trim().substring(0, 25) || 'Người lạ';
    const userColor = getRandomColor();
    onlineUsers.set(socket.id, { username: cleanName, color: userColor });

    // Gửi lịch sử chat cho người mới vào
    socket.emit('init', {
      history: messagesHistory,
      users: Array.from(onlineUsers.values()),
      currentUser: { username: cleanName, color: userColor }
    });

    // Báo cho tất cả mọi người có thành viên mới vào
    const joinMsg = {
      type: 'system',
      text: `${cleanName} vừa tham gia nhóm!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    messagesHistory.push(joinMsg);
    if (messagesHistory.length > MAX_HISTORY) messagesHistory.shift();

    socket.broadcast.emit('user_joined', {
      message: joinMsg,
      users: Array.from(onlineUsers.values())
    });
  });

  // Khi có người gửi tin nhắn
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

    // Phát tin nhắn tới tất cả mọi người (kể cả người gửi)
    io.emit('new_message', msg);
  });

  // Khi có người ngắt kết nối (thoát web)
  socket.on('disconnect', () => {
    const user = onlineUsers.get(socket.id);
    if (user) {
      onlineUsers.delete(socket.id);
      const leaveMsg = {
        type: 'system',
        text: `${user.username} đã rời khỏi nhóm.`,
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
  console.log(`🚀 Chat server đang chạy trên cổng ${PORT}`);
});
