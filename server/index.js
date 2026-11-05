import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Port from Render environment or default to 5000
const PORT = process.env.PORT || 5000;

// Locate client dist folder flexibly
const possibleDistPaths = [
  path.join(__dirname, '../client/dist'),
  path.join(__dirname, 'client/dist'),
  path.join(process.cwd(), '../client/dist'),
  path.join(process.cwd(), 'client/dist'),
  path.join(process.cwd(), 'dist')
];

let clientDistPath = possibleDistPaths[0];
for (const p of possibleDistPaths) {
  if (fs.existsSync(p)) {
    clientDistPath = p;
    break;
  }
}

console.log(`Serving static client files from: ${clientDistPath}`);
app.use(express.static(clientDistPath));

// Fallback to index.html for SPA
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/socket.io')) return next();
  const indexPath = path.join(clientDistPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.send('Chùa Online 3D Backend is running. Building frontend assets...');
  }
});

// State
const rooms = new Map();

function getOrCreateRoom(roomId = 'dai-hung-bao-dien') {
  if (!rooms.has(roomId)) {
    rooms.set(roomId, {
      id: roomId,
      name: roomId === 'dai-hung-bao-dien' ? 'Đại Hùng Bảo Điện' : `Phòng Thiền ${roomId}`,
      players: new Map(),
      totalMerit: 0,
      activeIncense: 0,
      bellStrikes: 0,
      chatHistory: []
    });
  }
  return rooms.get(roomId);
}

// 32 Quẻ xăm Phật Pháp & Lời Phật Dạy An Lạc
const FORTUNES = [
  { id: 1, title: 'Thượng Thượng: Tâm Bình Thế Giới Bình', poem: 'Tâm an vạn sự tự an bài\nTrí sáng lòng trong vượt chông gai\nHoa sen nở rộ đài thanh tịnh\nPhước đức đong đầy đón tương lai.', advice: 'Hôm nay tâm trí sáng suốt, mọi sự hanh thông, hãy mỉm cười và hoan hỷ đón nhận.' },
  { id: 2, title: 'Đại Cát: Bát Nhã Tâm Kinh', poem: 'Gieo hạt từ bi gặt phước lành\nĐường đời thênh thang bước bộ hành\nThị phi gác lại bên thềm vắng\nMột đóa sen hồng ngát cành xanh.', advice: 'Tâm từ bi xua tan muộn phiền, công việc và học tập có quý nhân phù trợ.' },
  { id: 3, title: 'Thượng Cát: Vạn Sự Tùy Duyên', poem: 'Đến đi như gió thoảng mây trôi\nVướng bận làm chi chuyện lỡ rồi\nNở một nụ cười buông chấp niệm\nBình yên ngay tại chốn này thôi.', advice: 'Đừng quá cưỡng cầu, thuận theo tự nhiên sẽ đạt được kết quả êm đẹp ngoài mong đợi.' },
  { id: 4, title: 'Trung Cát: Nhẫn Nhục Ba La Mật', poem: 'Nhẫn một chút gió yên sóng lặng\nLùi một bước biển rộng trời cao\nLời thô tiếng ác đừng lưu giữ\nTâm định như trăng sáng dạt dào.', advice: 'Hôm nay nên nói lời ái ngữ, giữ hòa khí, tránh tranh cãi với người khác.' },
  { id: 5, title: 'Thượng Thượng: Hoa Khai Kiến Phật', poem: 'Mỗi bước chân đi chạm đất lành\nChuông chiều ngân vọng chốn thiền thanh\nTài lộc duyên may cùng hội tụ\nCông đức vun bồi phúc tự sinh.', advice: 'Rất may mắn về tình bạn bè, thi cử và công việc. Nhớ chia sẻ niềm vui với người thân.' },
  { id: 6, title: 'Cát: Tự Tại Tiêu Dao', poem: 'Sáng ngắm mây bay chiều gió đưa\nLòng không vướng bận chuyện hơn thua\nCơm chay thanh đạm vui ngày tháng\nPhước báo lưu truyền tựa bóng xưa.', advice: 'Tâm hồn thảnh thơi, hãy dành thời gian chăm sóc sức khỏe và ngủ một giấc thật ngon.' },
  { id: 7, title: 'Đại Cát: Lục Độ Vạn Hạnh', poem: 'Bố thí cho đi phước lại về\nĐoạn trừ chấp trước khỏi u mê\nÁnh sáng Như Lai soi muôn lối\nCùng nhau vượt khỏi chốn bến mê.', advice: 'Làm việc thiện nhỏ hôm nay sẽ mang lại may mắn lớn vào ngày mai.' },
  { id: 8, title: 'Thượng Cát: Tĩnh Lặng Quán Chiếu', poem: 'Ngồi lại bên nhau tĩnh lặng thiền\nBao nhiêu phiền não hóa mây yên\nMõ khua tỉnh giấc người mê ngủ\nÁnh mắt trao nhau vẹn chữ duyên.', advice: 'Hãy chậm lại một nhịp trước khi ra quyết định quan trọng.' }
];

io.on('connection', (socket) => {
  let currentRoomId = 'dai-hung-bao-dien';
  let playerInfo = null;

  socket.on('join', ({ name, roomId = 'dai-hung-bao-dien', robeColor = '#E69500', hat = 'none', beads = true }) => {
    currentRoomId = roomId || 'dai-hung-bao-dien';
    const room = getOrCreateRoom(currentRoomId);
    socket.join(currentRoomId);

    // Xuất phát từ Cửa Chùa (Temple Entrance Door)
    const spawnX = (Math.random() - 0.5) * 2.2;
    const spawnZ = 18.2;

    playerInfo = {
      id: socket.id,
      name: name || `Đồng tu #${socket.id.slice(0, 4)}`,
      robeColor: robeColor || '#E69500',
      hat: hat || 'none',
      beads: beads !== false,
      x: spawnX,
      y: 0,
      z: spawnZ,
      rotY: Math.PI, // Facing Buddha into the hall
      action: 'stand',
      merit: 0,
      currentBubble: null,
      bubbleTimer: null
    };

    room.players.set(socket.id, playerInfo);

    socket.emit('initRoom', {
      yourId: socket.id,
      roomId: currentRoomId,
      roomName: room.name,
      totalMerit: room.totalMerit,
      activeIncense: room.activeIncense,
      bellStrikes: room.bellStrikes,
      players: Array.from(room.players.values()).map(p => ({
        id: p.id,
        name: p.name,
        robeColor: p.robeColor,
        hat: p.hat,
        beads: p.beads,
        x: p.x,
        y: p.y,
        z: p.z,
        rotY: p.rotY,
        action: p.action,
        merit: p.merit,
        currentBubble: p.currentBubble
      })),
      chatHistory: room.chatHistory.slice(-20)
    });

    socket.to(currentRoomId).emit('playerJoined', {
      id: playerInfo.id,
      name: playerInfo.name,
      robeColor: playerInfo.robeColor,
      hat: playerInfo.hat,
      beads: playerInfo.beads,
      x: playerInfo.x,
      y: playerInfo.y,
      z: playerInfo.z,
      rotY: playerInfo.rotY,
      action: playerInfo.action,
      merit: playerInfo.merit
    });

    const systemMsg = {
      id: 'sys_' + Date.now(),
      senderId: 'system',
      senderName: 'Chính Điện',
      text: `Đồng tu [${playerInfo.name}] vừa bước qua cửa Chùa. Nam Mô A Di Đà Phật!`,
      timestamp: Date.now()
    };
    room.chatHistory.push(systemMsg);
    io.to(currentRoomId).emit('newChatMessage', systemMsg);
  });

  socket.on('move', (coords) => {
    const room = rooms.get(currentRoomId);
    if (!room || !playerInfo) return;

    playerInfo.x = coords.x;
    playerInfo.y = coords.y || 0;
    playerInfo.z = coords.z;
    if (typeof coords.rotY === 'number') {
      playerInfo.rotY = coords.rotY;
    }

    socket.to(currentRoomId).emit('playerMoved', {
      id: socket.id,
      x: playerInfo.x,
      y: playerInfo.y,
      z: playerInfo.z,
      rotY: playerInfo.rotY
    });
  });

  socket.on('action', ({ action }) => {
    const room = rooms.get(currentRoomId);
    if (!room || !playerInfo) return;

    playerInfo.action = action;
    io.to(currentRoomId).emit('playerActionChanged', {
      id: socket.id,
      action
    });
  });

  // Chat message (appears above head in 3D & in chatbox)
  socket.on('chat', ({ text }) => {
    const room = rooms.get(currentRoomId);
    if (!room || !playerInfo) return;

    const trimmed = (text || '').trim().slice(0, 150);
    if (!trimmed) return;

    const msgObj = {
      id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      senderId: socket.id,
      senderName: playerInfo.name,
      text: trimmed,
      timestamp: Date.now()
    };

    room.chatHistory.push(msgObj);
    if (room.chatHistory.length > 50) room.chatHistory.shift();

    playerInfo.currentBubble = {
      text: trimmed,
      expireAt: Date.now() + 6000
    };

    io.to(currentRoomId).emit('newChatMessage', msgObj);
    io.to(currentRoomId).emit('showBubble', {
      playerId: socket.id,
      text: trimmed,
      duration: 6000
    });
  });

  socket.on('strikeWoodfish', () => {
    const room = rooms.get(currentRoomId);
    if (!room || !playerInfo) return;

    playerInfo.merit += 1;
    room.totalMerit += 1;

    io.to(currentRoomId).emit('woodfishStruck', {
      playerId: socket.id,
      playerName: playerInfo.name,
      playerMerit: playerInfo.merit,
      totalMerit: room.totalMerit
    });
  });

  socket.on('strikeBell', () => {
    const room = rooms.get(currentRoomId);
    if (!room || !playerInfo) return;

    room.bellStrikes += 1;
    playerInfo.merit += 5;
    room.totalMerit += 5;

    io.to(currentRoomId).emit('bellStruck', {
      playerId: socket.id,
      playerName: playerInfo.name,
      playerMerit: playerInfo.merit,
      totalMerit: room.totalMerit
    });
  });

  socket.on('lightIncense', () => {
    const room = rooms.get(currentRoomId);
    if (!room || !playerInfo) return;

    room.activeIncense += 3;
    playerInfo.merit += 3;
    room.totalMerit += 3;

    io.to(currentRoomId).emit('incenseLit', {
      playerId: socket.id,
      playerName: playerInfo.name,
      activeIncense: room.activeIncense,
      totalMerit: room.totalMerit
    });
  });

  socket.on('drawFortune', () => {
    const room = rooms.get(currentRoomId);
    if (!room || !playerInfo) return;

    const randomFortune = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
    playerInfo.merit += 2;
    room.totalMerit += 2;

    socket.emit('fortuneResult', randomFortune);

    const announce = {
      id: 'fortune_' + Date.now(),
      senderId: 'system',
      senderName: 'Xin Xăm Quán Âm',
      text: `Đồng tu [${playerInfo.name}] vừa gieo được quẻ: "${randomFortune.title}"! Chúc vạn sự cát tường!`,
      timestamp: Date.now()
    };
    room.chatHistory.push(announce);
    io.to(currentRoomId).emit('newChatMessage', announce);
  });

  socket.on('disconnect', () => {
    const room = rooms.get(currentRoomId);
    if (room && playerInfo) {
      room.players.delete(socket.id);
      socket.to(currentRoomId).emit('playerLeft', { id: socket.id, name: playerInfo.name });
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`===============================================`);
  console.log(`🌸 CHÙA ONLINE 3D METAVERSE ĐANG HOẠT ĐỘNG 🌸`);
  console.log(`👉 Cổng máy chủ: http://0.0.0.0:${PORT}`);
  console.log(`===============================================`);
});
