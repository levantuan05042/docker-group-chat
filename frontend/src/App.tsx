import React, { useState, useEffect } from 'react';
import type { User, GameType, ToastNotification, GameRoom } from './types';
import {
  loginUser,
  registerUser,
  reportGameWin,
  fetchLeaderboard,
  createGameRoom,
  joinGameRoom,
  fetchGameRoom,
  syncGameRoom,
  fetchWaitingRooms,
  sendChatMessage
} from './api';
import { playSound, triggerConfetti } from './utils/effects';
import { CaroGame } from './components/CaroGame';
import { ChessGame } from './components/ChessGame';
import { XiangqiGame } from './components/XiangqiGame';
import { LudoGame } from './components/LudoGame';
import { Game2048 } from './components/Game2048';
import { ChatBox } from './components/ChatBox';
import './App.css';

const AVATARS = ['🎮', '👑', '🐉', '🦊', '🦁', '🐼', '⚡', '🚀', '🎯', '🔥'];

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('gamechat_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Auth Form State
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [authUsername, setAuthUsername] = useState('tuanle');
  const [authPassword, setAuthPassword] = useState('123456');
  const [authFullName, setAuthFullName] = useState('Lê Tuấn');
  const [authEmail, setAuthEmail] = useState('tuanle@example.com');
  const [authAvatar, setAuthAvatar] = useState('🎮');
  const [authLoading, setAuthLoading] = useState(false);

  // App Layout & Game State
  const [activeGame, setActiveGame] = useState<GameType>('caro');
  const [viewMode, setViewMode] = useState<'split' | 'game' | 'chat'>('split');
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);
  const [leaderboard, setLeaderboard] = useState<User[]>([]);

  // Room Management State
  const [currentRoom, setCurrentRoom] = useState<GameRoom | null>(null);
  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [waitingRooms, setWaitingRooms] = useState<GameRoom[]>([]);
  const [inputRoomCode, setInputRoomCode] = useState('');

  // Show dynamic Toast notification
  const showToast = (type: 'success' | 'error' | 'info' | 'warning', message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Poll room updates if inside a room
  useEffect(() => {
    if (!currentRoom) return;

    const interval = setInterval(async () => {
      try {
        const latest = await fetchGameRoom(currentRoom.roomCode);
        setCurrentRoom(latest);
      } catch (e) {
        // Room might have been closed
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentRoom?.roomCode]);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);

    try {
      let user: User;
      if (authMode === 'login') {
        user = await loginUser(authUsername, authPassword);
        showToast('success', `Chào mừng ${user.fullName || user.username} trở lại đấu trường GameChat! 🎉`);
      } else {
        user = await registerUser(authUsername, authPassword, authFullName, authEmail);
        showToast('success', 'Đăng ký thành công! Mật khẩu được mã hóa BCrypt an toàn. 🛡️');
      }
      playSound('win');
      triggerConfetti();
      setCurrentUser(user);
      localStorage.setItem('gamechat_user', JSON.stringify(user));
    } catch (err: any) {
      playSound('error');
      showToast('error', err.message || 'Lỗi xác thực!');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('gamechat_user');
    setCurrentUser(null);
    setCurrentRoom(null);
    playSound('click');
    showToast('info', 'Bạn đã đăng xuất khỏi hệ thống.');
  };

  // Create Room
  const handleCreateRoom = async (gameType: GameType) => {
    if (!currentUser) return;
    try {
      const room = await createGameRoom(
        gameType,
        currentUser.id,
        currentUser.username,
        currentUser.fullName || currentUser.username
      );
      setCurrentRoom(room);
      setActiveGame(gameType);
      setRoomModalOpen(false);
      playSound('win');
      showToast('success', `Tạo phòng thành công! Mã phòng của bạn: [${room.roomCode}]. Đã phát lời mời vào chat! 📢`);
    } catch (err: any) {
      showToast('error', err.message || 'Không thể tạo phòng!');
    }
  };

  // Join Room
  const handleJoinRoom = async (code: string) => {
    if (!currentUser) return;
    const cleanCode = code.trim().toUpperCase();
    try {
      const room = await joinGameRoom(
        cleanCode,
        currentUser.id,
        currentUser.username,
        currentUser.fullName || currentUser.username
      );
      setCurrentRoom(room);
      setActiveGame(room.gameType);
      setJoinModalOpen(false);
      setInputRoomCode('');
      playSound('move');
      showToast('success', `Đã tham gia phòng [${room.roomCode}] đối đầu với ${room.hostFullName}! ⚔️`);
    } catch (err: any) {
      showToast('error', err.message || 'Không thể tham gia phòng!');
    }
  };

  // Open Join Modal with Waiting Rooms List
  const openJoinModal = async () => {
    try {
      const rooms = await fetchWaitingRooms();
      setWaitingRooms(rooms);
      setJoinModalOpen(true);
      playSound('click');
    } catch (e) {
      showToast('error', 'Không thể tải danh sách phòng chờ!');
    }
  };

  // Invite to Chat
  const handleInviteToChat = async () => {
    if (!currentUser || !currentRoom) return;
    try {
      const msg = `⚔️ [THÁCH ĐẤU]: ${currentUser.fullName || currentUser.username} đang chờ đối thủ tại phòng [${currentRoom.roomCode}] - trò ${currentRoom.gameType.toUpperCase()}! Bấm vào để chiến ngay!`;
      await sendChatMessage(
        currentUser.id,
        currentUser.username,
        currentUser.fullName || currentUser.username,
        currentUser.avatar || '🎮',
        msg,
        'Thách Đấu'
      );
      showToast('success', 'Đã phát lời mời thách đấu vào phòng Chat! 📢');
    } catch (e) {
      showToast('error', 'Lỗi khi gửi lời mời!');
    }
  };

  // Record Game Win to MySQL and update match score
  const handleGameWin = async (gameName: string, bonus: number) => {
    if (!currentUser) return;

    // Cập nhật điểm cá nhân
    try {
      const res = await reportGameWin(currentUser.id, gameName, bonus);
      setCurrentUser(prev => prev ? { ...prev, score: res.score, wins: res.wins } : null);
      showToast('success', `Cộng +${bonus} điểm thưởng vào MySQL! Tổng điểm: ${res.score} ⭐`);
    } catch (e) {
      console.error(e);
    }

    // Cập nhật Tỷ số trận đấu nếu đang trong phòng
    if (currentRoom) {
      const isHost = currentRoom.hostUserId === currentUser.id;
      const newHostScore = isHost ? currentRoom.hostScore + 1 : currentRoom.hostScore;
      const newGuestScore = !isHost ? currentRoom.guestScore + 1 : currentRoom.guestScore;

      try {
        const synced = await syncGameRoom(currentRoom.roomCode, newHostScore, newGuestScore);
        setCurrentRoom(synced);
        showToast('info', `Tỷ số cập nhật: ${synced.hostFullName} (${synced.hostScore}) - (${synced.guestScore}) ${synced.guestFullName || 'Khách'}`);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const openLeaderboard = async () => {
    try {
      const data = await fetchLeaderboard();
      setLeaderboard(data);
      setLeaderboardOpen(true);
      playSound('click');
    } catch (err: any) {
      showToast('error', 'Không thể tải Bảng Xếp Hạng!');
    }
  };

  // If not logged in -> Auth Screen
  if (!currentUser) {
    return (
      <div className="app-wrapper">
        <div className="toast-container">
          {toasts.map(t => (
            <div key={t.id} className={`toast-item toast-${t.type}`}>
              <span>{t.type === 'success' ? '✅' : t.type === 'error' ? '❌' : 'ℹ️'}</span>
              <span>{t.message}</span>
            </div>
          ))}
        </div>

        <div className="auth-wrapper">
          <div className="auth-card glass-panel">
            <div className="auth-header">
              <span style={{ fontSize: '42px', display: 'block', marginBottom: '8px' }}>🕹️</span>
              <h2>GAMECHAT HUB</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                Đấu Trường Cờ Đối Kháng &amp; Chat Trực Tuyến
              </p>
              <div style={{ marginTop: '8px', display: 'inline-block', background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', color: '#a5b4fc' }}>
                🔒 Mật khẩu được mã hóa an toàn bằng thuật toán BCrypt
              </div>
            </div>

            <div className="auth-tabs">
              <button
                className={`tab-btn ${authMode === 'login' ? 'active' : ''}`}
                onClick={() => setAuthMode('login')}
              >
                Đăng Nhập
              </button>
              <button
                className={`tab-btn ${authMode === 'register' ? 'active' : ''}`}
                onClick={() => setAuthMode('register')}
              >
                Đăng Ký
              </button>
            </div>

            <form onSubmit={handleAuthSubmit}>
              <div className="form-group">
                <label>Tên đăng nhập (Username)</label>
                <input
                  type="text"
                  className="form-control"
                  value={authUsername}
                  onChange={e => setAuthUsername(e.target.value)}
                  required
                  placeholder="Ví dụ: tuanle"
                />
              </div>

              {authMode === 'register' && (
                <>
                  <div className="form-group">
                    <label>Họ và tên hiển thị</label>
                    <input
                      type="text"
                      className="form-control"
                      value={authFullName}
                      onChange={e => setAuthFullName(e.target.value)}
                      placeholder="Lê Văn Tuấn"
                    />
                  </div>

                  <div className="form-group">
                    <label>Chọn biểu tượng Avatar</label>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '4px' }}>
                      {AVATARS.map(av => (
                        <button
                          key={av}
                          type="button"
                          className="btn btn-secondary btn-sm"
                          style={{ fontSize: '18px', padding: '4px 8px', border: authAvatar === av ? '2px solid #6366f1' : '1px solid var(--border-subtle)' }}
                          onClick={() => setAuthAvatar(av)}
                        >
                          {av}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email liên hệ</label>
                    <input
                      type="email"
                      className="form-control"
                      value={authEmail}
                      onChange={e => setAuthEmail(e.target.value)}
                      placeholder="email@example.com"
                    />
                  </div>
                </>
              )}

              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  value={authPassword}
                  onChange={e => setAuthPassword(e.target.value)}
                  required
                  placeholder="••••••"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={authLoading}>
                {authLoading ? 'Đang xử lý...' : (authMode === 'login' ? 'Vào Phòng Game & Chat' : 'Đăng Ký Tài Khoản Mới')}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const getGameTitle = (g: GameType): string => {
    switch (g) {
      case 'caro': return 'Cờ Ca-ro (Gomoku)';
      case 'chess': return 'Cờ Vua (Chess)';
      case 'xiangqi': return 'Cờ Tướng (Xiangqi)';
      case 'ludo': return 'Cờ Cá Ngựa (Ludo)';
      case '2048': return '2048 Arcade';
    }
  };

  return (
    <div className="app-wrapper">
      {/* Toast Notification Container */}
      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className={`toast-item toast-${t.type}`}>
            <span>{t.type === 'success' ? '✅' : t.type === 'error' ? '❌' : 'ℹ️'}</span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>

      {/* TOP NAVBAR */}
      <header className="hub-navbar glass-panel">
        <div className="brand-section">
          <span className="brand-logo-glow">{currentUser.avatar || '🕹️'}</span>
          <div className="brand-heading">
            <h1>GAMECHAT HUB</h1>
            <p>Đấu Trường Trực Tuyến • Tỷ Số Realtime</p>
          </div>
        </div>

        <div className="user-status-bar">
          <button className="btn btn-primary btn-sm" onClick={() => setRoomModalOpen(true)}>
            ➕ Tạo Phòng
          </button>

          <button className="btn btn-secondary btn-sm" onClick={openJoinModal}>
            🚪 Vào Phòng
          </button>

          <div className="score-badge">⭐ {currentUser.score}</div>
          <div className="wins-badge">🏆 {currentUser.wins}</div>

          <button className="btn btn-secondary btn-sm" onClick={openLeaderboard} title="Xem cao thủ">
            🥇 BXH
          </button>

          <button className="btn btn-danger btn-sm" onClick={handleLogout} title="Đăng xuất">
            Thoát
          </button>
        </div>
      </header>

      {/* SCOREBOARD BANNER (NẾU ĐANG TRONG PHÒNG ĐẤU) */}
      {currentRoom && (
        <div className="room-scoreboard-banner glass-panel">
          <div className="room-code-badge">
            <span>MÃ PHÒNG:</span> <strong>{currentRoom.roomCode}</strong>
            <button className="copy-code-btn" onClick={() => { navigator.clipboard.writeText(currentRoom.roomCode); showToast('info', 'Đã chép mã phòng!'); }}>📋</button>
          </div>

          <div className="match-scoreboard-display">
            <div className="player-side host-side">
              <span className="p-badge">Chủ Phòng</span>
              <span className="p-name">{currentRoom.hostFullName}</span>
              <span className="p-score">{currentRoom.hostScore}</span>
            </div>

            <div className="scoreboard-vs">⚡ TỶ SỐ ⚡</div>

            <div className="player-side guest-side">
              <span className="p-score">{currentRoom.guestScore}</span>
              <span className="p-name">{currentRoom.guestFullName || '(Đang chờ đối thủ...)'}</span>
              <span className="p-badge">{currentRoom.guestFullName ? 'Khách' : 'Trống'}</span>
            </div>
          </div>

          <div className="room-controls">
            <button className="btn btn-primary btn-sm" onClick={handleInviteToChat}>
              📢 Mời Vào Chat
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => { setCurrentRoom(null); showToast('info', 'Đã rời phòng đấu.'); }}>
              Rời Phòng
            </button>
          </div>
        </div>
      )}

      {/* GAME SELECTOR TABS & LAYOUT SWITCHER */}
      <div className="game-tabs-bar glass-panel">
        <div className="game-tabs-list">
          <button
            className={`game-tab ${activeGame === 'caro' ? 'active' : ''}`}
            onClick={() => { setActiveGame('caro'); playSound('click'); }}
          >
            ⭕ Cờ Ca-ro (15x15)
          </button>

          <button
            className={`game-tab ${activeGame === 'chess' ? 'active' : ''}`}
            onClick={() => { setActiveGame('chess'); playSound('click'); }}
          >
            ♔ Cờ Vua (Quốc Tế)
          </button>

          <button
            className={`game-tab ${activeGame === 'xiangqi' ? 'active' : ''}`}
            onClick={() => { setActiveGame('xiangqi'); playSound('click'); }}
          >
            帥 Cờ Tướng (Sở Hà)
          </button>

          <button
            className={`game-tab ${activeGame === 'ludo' ? 'active' : ''}`}
            onClick={() => { setActiveGame('ludo'); playSound('click'); }}
          >
            🐎 Cờ Cá Ngựa (15x15)
          </button>

          <button
            className={`game-tab ${activeGame === '2048' ? 'active' : ''}`}
            onClick={() => { setActiveGame('2048'); playSound('click'); }}
          >
            🔢 2048 Arcade
          </button>
        </div>

        {/* Chế độ hiển thị */}
        <div className="view-mode-selector">
          <button
            className={`mode-btn ${viewMode === 'split' ? 'active' : ''}`}
            onClick={() => setViewMode('split')}
            title="Vừa chơi game vừa chat song song"
          >
            🔀 Song Song
          </button>
          <button
            className={`mode-btn ${viewMode === 'game' ? 'active' : ''}`}
            onClick={() => setViewMode('game')}
            title="Toàn màn hình game"
          >
            🎮 Chỉ Game
          </button>
          <button
            className={`mode-btn ${viewMode === 'chat' ? 'active' : ''}`}
            onClick={() => setViewMode('chat')}
            title="Chỉ màn hình chat"
          >
            💬 Chỉ Chat
          </button>
        </div>
      </div>

      {/* ARENA: GAME & CHAT CONTAINER */}
      <main className={`arena-grid layout-${viewMode}`}>
        {/* KHU VỰC GAME */}
        {viewMode !== 'chat' && (
          <div className="game-arena-card glass-panel">
            {activeGame === 'caro' && (
              <CaroGame onWin={handleGameWin} showToast={showToast} />
            )}
            {activeGame === 'chess' && (
              <ChessGame onWin={handleGameWin} showToast={showToast} />
            )}
            {activeGame === 'xiangqi' && (
              <XiangqiGame onWin={handleGameWin} showToast={showToast} />
            )}
            {activeGame === 'ludo' && (
              <LudoGame onWin={handleGameWin} showToast={showToast} />
            )}
            {activeGame === '2048' && (
              <Game2048 onWin={handleGameWin} showToast={showToast} />
            )}
          </div>
        )}

        {/* KHU VỰC CHAT REALTIME */}
        {viewMode !== 'game' && (
          <ChatBox
            currentUser={currentUser}
            currentGame={getGameTitle(activeGame)}
            currentRoomCode={currentRoom?.roomCode}
            onJoinRoom={handleJoinRoom}
            onInviteRoom={handleInviteToChat}
          />
        )}
      </main>

      {/* MODAL TẠO PHÒNG MỚI */}
      {roomModalOpen && (
        <div className="modal-overlay" onClick={() => setRoomModalOpen(false)}>
          <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>➕ TẠO PHÒNG ĐẤU MỚI</h2>
              <button className="btn btn-secondary btn-sm" onClick={() => setRoomModalOpen(false)}>✕</button>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Chọn trò chơi bạn muốn mở phòng. Hệ thống sẽ tự động phát lời mời kèm mã phòng vào phòng Chat!
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <button className="btn btn-secondary" onClick={() => handleCreateRoom('caro')}>
                ⭕ Cờ Ca-ro
              </button>
              <button className="btn btn-secondary" onClick={() => handleCreateRoom('chess')}>
                ♔ Cờ Vua
              </button>
              <button className="btn btn-secondary" onClick={() => handleCreateRoom('xiangqi')}>
                帥 Cờ Tướng
              </button>
              <button className="btn btn-secondary" onClick={() => handleCreateRoom('ludo')}>
                🐎 Cờ Cá Ngựa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL THAM GIA PHÒNG */}
      {joinModalOpen && (
        <div className="modal-overlay" onClick={() => setJoinModalOpen(false)}>
          <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>🚪 THAM GIA PHÒNG ĐẤU</h2>
              <button className="btn btn-secondary btn-sm" onClick={() => setJoinModalOpen(false)}>✕</button>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập mã phòng (ví dụ: ROOM-1234)"
                value={inputRoomCode}
                onChange={e => setInputRoomCode(e.target.value)}
              />
              <button
                className="btn btn-primary"
                onClick={() => handleJoinRoom(inputRoomCode)}
                disabled={!inputRoomCode.trim()}
              >
                Vào Phòng
              </button>
            </div>

            <h4 style={{ fontSize: '13px', color: '#93c5fd', marginBottom: '10px' }}>Phòng Đang Chờ Đối Thủ:</h4>
            {waitingRooms.length === 0 ? (
              <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Hiện chưa có phòng nào đang mở. Hãy là người đầu tiên tạo phòng!</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '200px', overflowY: 'auto' }}>
                {waitingRooms.map(r => (
                  <div key={r.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '8px 12px', borderRadius: '8px' }}>
                    <div>
                      <strong>[{r.roomCode}]</strong> • Trò: <span style={{ color: '#fbbf24' }}>{r.gameType.toUpperCase()}</span>
                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Chủ phòng: {r.hostFullName}</div>
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={() => handleJoinRoom(r.roomCode)}>
                      Vào Chơi ⚔️
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* LEADERBOARD MODAL */}
      {leaderboardOpen && (
        <div className="modal-overlay" onClick={() => setLeaderboardOpen(false)}>
          <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>🏆 BẢNG XẾP HẠNG CAO THỦ (MYSQL)</h2>
              <button className="btn btn-secondary btn-sm" onClick={() => setLeaderboardOpen(false)}>✕</button>
            </div>

            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Hạng</th>
                  <th>Người Chơi</th>
                  <th>Điểm Số</th>
                  <th>Số Trận Thắng</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((u, idx) => (
                  <tr key={u.id} style={{ background: u.id === currentUser.id ? 'rgba(99, 102, 241, 0.15)' : 'transparent' }}>
                    <td>
                      {idx === 0 && '🥇'}
                      {idx === 1 && '🥈'}
                      {idx === 2 && '🥉'}
                      {idx > 2 && `#${idx + 1}`}
                    </td>
                    <td>
                      <span style={{ marginRight: '6px' }}>{u.avatar || '🎮'}</span>
                      <strong>{u.fullName || u.username}</strong>
                    </td>
                    <td style={{ color: '#fbbf24', fontWeight: 700 }}>⭐ {u.score}</td>
                    <td style={{ color: '#34d399', fontWeight: 700 }}>🏆 {u.wins}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ marginTop: '16px', textAlign: 'right' }}>
              <button className="btn btn-primary" onClick={() => setLeaderboardOpen(false)}>Đóng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
