import React, { useState, useEffect, useRef } from 'react';
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
  fetchOnlineUsers,
  sendHeartbeat,
  inviteUserToRoom
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
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  // Room Management State
  const [currentRoom, setCurrentRoom] = useState<GameRoom | null>(null);
  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [waitingRooms, setWaitingRooms] = useState<GameRoom[]>([]);
  const [inputRoomCode, setInputRoomCode] = useState('');

  // User Selection & Private Invite State
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [usersList, setUsersList] = useState<User[]>([]);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [inviteLoading, setInviteLoading] = useState(false);

  const prevGuestRef = useRef<number | null | undefined>(null);

  // Show dynamic Toast notification
  const showToast = (type: 'success' | 'error' | 'info' | 'warning', message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  // Poll room updates if inside a room
  useEffect(() => {
    if (!currentRoom) return;

    const interval = setInterval(async () => {
      try {
        const latest = await fetchGameRoom(currentRoom.roomCode);

        // Thông báo nếu có khách mới tham gia phòng
        if (!prevGuestRef.current && latest.guestUserId) {
          showToast('success', `🎉 ${latest.guestFullName || 'Đối thủ'} đã tham gia phòng đấu! Trận chiến bắt đầu! ⚔️`);
          playSound('win');
          triggerConfetti();
        }
        prevGuestRef.current = latest.guestUserId;

        // Chỉ cập nhật state nếu có dữ liệu mới
        if (
          latest.gameState !== currentRoom.gameState ||
          latest.hostScore !== currentRoom.hostScore ||
          latest.guestScore !== currentRoom.guestScore ||
          latest.guestUserId !== currentRoom.guestUserId ||
          latest.invitedUserId !== currentRoom.invitedUserId ||
          latest.status !== currentRoom.status
        ) {
          setCurrentRoom(latest);
        }
      } catch (e) {
        // Room might have been closed or network glitch
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [currentRoom?.roomCode, currentRoom?.gameState, currentRoom?.guestUserId, currentRoom?.hostScore, currentRoom?.guestScore, currentRoom?.invitedUserId]);

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

  // Heartbeat định kỳ 15 giây để báo trạng thái Online với máy chủ
  useEffect(() => {
    if (!currentUser) return;
    sendHeartbeat(currentUser.id);
    const interval = setInterval(() => {
      sendHeartbeat(currentUser.id);
    }, 15000);
    return () => clearInterval(interval);
  }, [currentUser?.id]);

  // Tải danh sách người chơi ĐANG ONLINE và mở popup mời
  const loadUsersAndOpenInviteModal = async () => {
    if (!currentUser) return;
    try {
      setInviteLoading(true);
      // Chỉ lấy những người đang online (hoạt động trong 45 giây qua)
      const users = await fetchOnlineUsers(currentUser.id);
      setUsersList(users);
      setUserSearchQuery('');
      setInviteModalOpen(true);
    } catch (e) {
      showToast('error', 'Không thể tải danh sách người chơi online!');
    } finally {
      setInviteLoading(false);
    }
  };

  // Tạo Phòng (KHÔNG tự động spam tin nhắn công khai vào chat)
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
      prevGuestRef.current = null;
      setActiveGame(gameType);
      setRoomModalOpen(false);
      playSound('click');
      showToast('success', `Đã tạo phòng [${room.roomCode}]. Hãy chọn người bạn muốn mời cùng chơi!`);

      // Mở popup danh sách người chơi để lựa chọn
      loadUsersAndOpenInviteModal();
    } catch (err: any) {
      showToast('error', err.message || 'Không thể tạo phòng!');
    }
  };

  // Mời 1 người chơi cụ thể (Chỉ người đó mới thấy trên chat và được vào phòng)
  const handleInviteSpecificUser = async (targetUser: User) => {
    if (!currentRoom || !currentUser) return;
    try {
      const updated = await inviteUserToRoom(
        currentRoom.roomCode,
        targetUser.id,
        targetUser.username,
        targetUser.fullName || targetUser.username
      );
      setCurrentRoom(updated);
      setInviteModalOpen(false);
      playSound('win');
      showToast('success', `🎉 Đã gửi lời mời riêng cho ${targetUser.fullName || targetUser.username}! Chỉ người này mới thấy trong Chat và được vào phòng.`);
    } catch (e: any) {
      showToast('error', e.message || 'Gửi lời mời thất bại!');
    }
  };

  // Mở phòng tự do (Không chỉ định ai, ai nhập đúng mã đều vào được)
  const handleMakeRoomPublic = () => {
    setInviteModalOpen(false);
    playSound('click');
    showToast('info', `Phòng [${currentRoom?.roomCode}] đang mở tự do! Bất kỳ ai nhập đúng mã phòng đều có thể tham gia.`);
  };

  // Join Room (Kiểm tra lời mời riêng và kiểm tra phòng đã đủ người)
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
      prevGuestRef.current = room.guestUserId;
      setActiveGame(room.gameType);
      setJoinModalOpen(false);
      setInputRoomCode('');
      playSound('move');
      showToast('success', `Đã tham gia phòng [${room.roomCode}]! Đối đầu trực tiếp với ${room.hostFullName} ⚔️`);
    } catch (err: any) {
      playSound('error');
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

  // Record Game Win to MySQL and update match score
  const handleGameWin = async (gameName: string, bonus: number) => {
    if (!currentUser) return;

    try {
      const res = await reportGameWin(currentUser.id, gameName, bonus);
      setCurrentUser(prev => prev ? { ...prev, score: res.score, wins: res.wins } : null);
      showToast('success', `Cộng +${bonus} điểm thưởng vào MySQL! Tổng điểm: ${res.score} ⭐`);
    } catch (e) {
      console.error(e);
    }

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

  // Đồng bộ nước cờ lên máy chủ
  const handleSyncState = async (gameState: string) => {
    if (!currentRoom) return;
    try {
      const updated = await syncGameRoom(
        currentRoom.roomCode,
        currentRoom.hostScore,
        currentRoom.guestScore,
        gameState,
        currentRoom.guestUserId ? 'PLAYING' : currentRoom.status
      );
      setCurrentRoom(updated);
    } catch (e) {
      console.error('Lỗi đồng bộ nước cờ:', e);
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

  const isHost = currentRoom && currentRoom.hostUserId === currentUser.id;

  // Lọc người chơi theo ô tìm kiếm
  const filteredUsers = usersList.filter(u => {
    if (u.id === currentUser.id) return false;
    if (!userSearchQuery.trim()) return true;
    const q = userSearchQuery.toLowerCase();
    return (u.fullName && u.fullName.toLowerCase().includes(q)) || u.username.toLowerCase().includes(q);
  });

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

      {/* TOP NAVBAR: THANH ĐIỀU HƯỚNG HIỆN ĐẠI, TINH GỌN (TẤT CẢ TRONG 1 THANH) */}
      <header className="hub-navbar glass-panel">
        <div className="brand-section">
          <div className="brand-logo-pill">
            <span className="brand-icon">{currentUser.avatar || '🎮'}</span>
            <div className="brand-text-block">
              <span className="brand-title">GameHub</span>
              <span className="brand-user">@{currentUser.username}</span>
            </div>
          </div>
          <div className="user-score-badge" title="Điểm số tích lũy">
            ⭐ {currentUser.score}
          </div>
        </div>

        {/* BỘ CHỌN TRÒ CHƠI DẠNG SEGMENTED PILL GỌN GÀNG TRÊN THANH ĐIỀU HƯỚNG */}
        <nav className="game-nav-segmented">
          <button
            className={`game-nav-btn ${activeGame === 'caro' ? 'active' : ''}`}
            onClick={() => { setActiveGame('caro'); playSound('click'); }}
            title="Cờ Ca-ro 15x15"
          >
            <span className="nav-icon">⭕</span> <span className="nav-label">Ca-ro</span>
          </button>

          <button
            className={`game-nav-btn ${activeGame === 'chess' ? 'active' : ''}`}
            onClick={() => { setActiveGame('chess'); playSound('click'); }}
            title="Cờ Vua Tiêu Chuẩn"
          >
            <span className="nav-icon">♔</span> <span className="nav-label">Cờ Vua</span>
          </button>

          <button
            className={`game-nav-btn ${activeGame === 'xiangqi' ? 'active' : ''}`}
            onClick={() => { setActiveGame('xiangqi'); playSound('click'); }}
            title="Cờ Tướng Sở Hà"
          >
            <span className="nav-icon">帥</span> <span className="nav-label">Cờ Tướng</span>
          </button>

          <button
            className={`game-nav-btn ${activeGame === 'ludo' ? 'active' : ''}`}
            onClick={() => { setActiveGame('ludo'); playSound('click'); }}
            title="Cờ Cá Ngựa 15x15"
          >
            <span className="nav-icon">🐎</span> <span className="nav-label">Cá Ngựa</span>
          </button>

          <button
            className={`game-nav-btn ${activeGame === '2048' ? 'active' : ''}`}
            onClick={() => { setActiveGame('2048'); playSound('click'); }}
            title="2048 Arcade"
          >
            <span className="nav-icon">🔢</span> <span className="nav-label">2048</span>
          </button>
        </nav>

        {/* CÁC NÚT THAO TÁC TIỆN ÍCH */}
        <div className="hub-actions">
          {!currentRoom && (
            <>
              <button className="btn btn-primary btn-sm" onClick={() => setRoomModalOpen(true)}>
                ➕ Tạo Phòng
              </button>
              <button className="btn btn-secondary btn-sm" onClick={openJoinModal}>
                🚪 Vào Phòng
              </button>
            </>
          )}

          <button className="btn btn-secondary btn-sm" onClick={openLeaderboard} title="Bảng xếp hạng">
            🏆 BXH
          </button>

          <button className="btn btn-secondary btn-sm" onClick={() => setHelpModalOpen(true)} title="Hướng dẫn">
            ❓
          </button>

          {/* CHUYỂN ĐỔI CHẾ ĐỘ XEM: GAME + CHAT / TOÀN MÀN HÌNH */}
          <div className="view-mode-selector">
            <button
              className={`mode-btn ${viewMode === 'split' ? 'active' : ''}`}
              onClick={() => setViewMode('split')}
              title="Vừa chơi vừa chat song song"
            >
              🔀
            </button>
            <button
              className={`mode-btn ${viewMode === 'game' ? 'active' : ''}`}
              onClick={() => setViewMode('game')}
              title="Toàn màn hình Bàn cờ"
            >
              🎮
            </button>
            <button
              className={`mode-btn ${viewMode === 'chat' ? 'active' : ''}`}
              onClick={() => setViewMode('chat')}
              title="Toàn màn hình Phòng Chat"
            >
              💬
            </button>
          </div>

          <button className="btn btn-logout btn-sm" onClick={handleLogout} title="Đăng xuất">
            Thoát
          </button>
        </div>
      </header>

      {/* THANH THÔNG TIN TRẬN ĐẤU (CHỈ HIỂN THỊ KHI ĐANG TRONG PHÒNG ONLINE) */}
      {currentRoom && (
        <div className="room-match-strip glass-panel">
          <div className="strip-left">
            <span className="strip-tag">PHÒNG ONLINE</span>
            <strong className="room-code-text">{currentRoom.roomCode}</strong>
            <button
              className="strip-copy-btn"
              onClick={() => { navigator.clipboard.writeText(currentRoom.roomCode); showToast('info', 'Đã sao chép mã phòng!'); }}
              title="Sao chép mã phòng"
            >
              📋
            </button>
          </div>

          <div className="strip-center">
            <div className={`strip-player ${isHost ? 'active-player' : ''}`}>
              <span className="p-title">{isHost ? 'Bạn (Chủ)' : 'Chủ'}</span>
              <span className="p-fullname">{currentRoom.hostFullName}</span>
              <span className="p-score-pill">{currentRoom.hostScore}</span>
            </div>
            <span className="strip-vs">VS</span>
            <div className={`strip-player ${!isHost && currentRoom.guestUserId ? 'active-player' : ''}`}>
              <span className="p-score-pill">{currentRoom.guestScore}</span>
              <span className="p-fullname">{currentRoom.guestFullName || (currentRoom.invitedFullName ? `(${currentRoom.invitedFullName})` : 'Đang đợi...')}</span>
              <span className="p-title">{!isHost && currentRoom.guestUserId ? 'Bạn (Khách)' : 'Khách'}</span>
            </div>
          </div>

          <div className="strip-right">
            {isHost && !currentRoom.guestUserId && (
              <button className="btn btn-primary btn-sm" onClick={loadUsersAndOpenInviteModal}>
                👥 Mời Bạn
              </button>
            )}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => { setCurrentRoom(null); showToast('info', 'Bạn đã rời phòng.'); }}
            >
              🚪 Rời Phòng
            </button>
          </div>
        </div>
      )}

      {/* ARENA: GAME & CHAT CONTAINER */}
      <main className={`arena-grid layout-${viewMode}`}>
        {/* KHU VỰC GAME */}
        {viewMode !== 'chat' && (
          <div className="game-arena-card glass-panel">
            {activeGame === 'caro' && (
              <CaroGame
                onWin={handleGameWin}
                showToast={showToast}
                room={currentRoom}
                currentUser={currentUser}
                onSyncState={handleSyncState}
              />
            )}
            {activeGame === 'chess' && (
              <ChessGame
                onWin={handleGameWin}
                showToast={showToast}
                room={currentRoom}
                currentUser={currentUser}
                onSyncState={handleSyncState}
              />
            )}
            {activeGame === 'xiangqi' && (
              <XiangqiGame
                onWin={handleGameWin}
                showToast={showToast}
                room={currentRoom}
                currentUser={currentUser}
                onSyncState={handleSyncState}
              />
            )}
            {activeGame === 'ludo' && (
              <LudoGame
                onWin={handleGameWin}
                showToast={showToast}
              />
            )}
            {activeGame === '2048' && (
              <Game2048
                onWin={handleGameWin}
                showToast={showToast}
              />
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
            onInviteRoom={loadUsersAndOpenInviteModal}
          />
        )}
      </main>

      {/* POPUP: CHỌN NGƯỜI CHƠI ĐỂ MỜI ĐẤU (CHỈ HIỂN THỊ NGƯỜI ĐANG ONLINE) */}
      {inviteModalOpen && currentRoom && (
        <div className="modal-overlay" onClick={() => setInviteModalOpen(false)}>
          <div className="modal-content glass-panel" onClick={e => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <div className="modal-header">
              <h2>🟢 NGƯỜI CHƠI ĐANG ONLINE [{currentRoom.roomCode}]</h2>
              <button className="btn btn-secondary btn-sm" onClick={() => setInviteModalOpen(false)}>✕</button>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: '1.5' }}>
              Danh sách chỉ hiển thị những người <strong>đang Online</strong>. Hãy chọn đối thủ bạn muốn thách đấu — <strong>chỉ người được mời mới thấy thông báo trên Chat và có quyền vào phòng này.</strong>
            </p>

            {/* Ô tìm kiếm người chơi */}
            <div style={{ marginBottom: '14px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="🔍 Tìm kiếm theo tên hoặc username..."
                value={userSearchQuery}
                onChange={e => setUserSearchQuery(e.target.value)}
                autoFocus
              />
            </div>

            {/* Danh sách người chơi online */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '250px', overflowY: 'auto', marginBottom: '16px' }}>
              {inviteLoading ? (
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '20px' }}>Đang tìm kiếm người chơi online...</p>
              ) : filteredUsers.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '24px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '30px', marginBottom: '8px' }}>😴</div>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Hiện tại chưa có người chơi nào khác đang Online.
                  </p>
                  <p style={{ fontSize: '12px', color: '#93c5fd' }}>
                    Bạn có thể chọn <strong>"Mở Phòng Tự Do"</strong> phía dưới để lấy mã phòng gửi cho bạn bè!
                  </p>
                </div>
              ) : (
                filteredUsers.map(u => (
                  <div
                    key={u.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 14px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ position: 'relative' }}>
                        <span style={{ fontSize: '24px' }}>{u.avatar || '🎮'}</span>
                        <span
                          style={{
                            position: 'absolute',
                            bottom: -2,
                            right: -2,
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            background: '#22c55e',
                            border: '2px solid #0f172a',
                            boxShadow: '0 0 6px #22c55e'
                          }}
                          title="Đang Online"
                        />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <strong style={{ fontSize: '13.5px', color: '#f8fafc' }}>{u.fullName || u.username}</strong>
                          <span style={{ fontSize: '10px', background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', padding: '1px 6px', borderRadius: '10px', fontWeight: 600 }}>Online</span>
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                          @{u.username} • ⭐ {u.score} điểm • 🏆 {u.wins} thắng
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleInviteSpecificUser(u)}
                      style={{ padding: '6px 14px', fontSize: '12px' }}
                    >
                      ⚔️ Mời Đấu
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Tùy chọn mở phòng tự do */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <button
                className="btn btn-secondary btn-sm"
                onClick={handleMakeRoomPublic}
                title="Ai nhập đúng mã phòng đều có thể vào chơi"
              >
                🌐 Mở Phòng Tự Do (Ai Có Mã Đều Vào Được)
              </button>
              <button className="btn btn-secondary btn-sm" onClick={() => setInviteModalOpen(false)}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL HƯỚNG DẪN CÁCH DÙNG SIÊU DỄ HIỂU */}
      {helpModalOpen && (
        <div className="modal-overlay" onClick={() => setHelpModalOpen(false)}>
          <div className="modal-content glass-panel" onClick={e => e.stopPropagation()} style={{ maxWidth: '580px' }}>
            <div className="modal-header">
              <h2>📖 HƯỚNG DẪN SỬ DỤNG GAMECHAT HUB</h2>
              <button className="btn btn-secondary btn-sm" onClick={() => setHelpModalOpen(false)}>✕</button>
            </div>

            <div className="help-content-list" style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '10px' }}>
                <h4 style={{ color: '#38bdf8', marginBottom: '4px' }}>1️⃣ Chơi Tự Luyện (Một Mình Với Máy / AI)</h4>
                <p>Mặc định khi đăng nhập, bạn có thể chọn bất kỳ trò chơi nào trên thanh tab và đánh ngay với Máy (AI). Có 3 độ khó: 🟢 Bình thường, 🟡 Khó, 🔴 Siêu khó 🔥.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '10px' }}>
                <h4 style={{ color: '#34d399', marginBottom: '4px' }}>2️⃣ Tạo Phòng &amp; Mời Người Chơi Riêng</h4>
                <p>• Bấm <strong>"+ Tạo Phòng"</strong> ➔ Chọn trò chơi muốn mở.</p>
                <p>• Hệ thống mở popup danh sách người dùng (có ô tìm kiếm) ➔ Chọn bạn bè để mời riêng.</p>
                <p>• Chỉ người được bạn mời mới thấy thông báo trên Chat và chỉ người đó mới có quyền vào phòng!</p>
                <p>• Hoặc bạn có thể chọn <em>"Mở phòng tự do"</em> để bất kỳ ai có mã phòng đều vào được (khi đủ 2 người sẽ tự động khóa).</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '10px' }}>
                <h4 style={{ color: '#fbbf24', marginBottom: '4px' }}>3️⃣ Đồng Bộ Nước Cờ &amp; Tỉ Số Tự Động</h4>
                <p>• Khi đã vào phòng, mỗi nước đi của bạn sẽ hiển thị ngay lập tức trên màn hình của đối thủ.</p>
                <p>• Phía trên bàn cờ có bảng hiển thị rõ: <strong>Lượt của ai</strong> và <strong>Tỉ số trận đấu</strong>.</p>
                <p>• Khi có người chiến thắng, điểm số được ghi nhận và lưu vĩnh viễn vào cơ sở dữ liệu TiDB Cloud / MySQL.</p>
              </div>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button className="btn btn-primary" onClick={() => setHelpModalOpen(false)}>Đã Hiểu, Bắt Đầu Chơi! 🚀</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL TẠO PHÒNG MỚI */}
      {roomModalOpen && (
        <div className="modal-overlay" onClick={() => setRoomModalOpen(false)}>
          <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>➕ TẠO PHÒNG ĐẤU ONLINE</h2>
              <button className="btn btn-secondary btn-sm" onClick={() => setRoomModalOpen(false)}>✕</button>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Chọn trò chơi bạn muốn mở phòng. Sau khi tạo, bạn có thể tìm kiếm và chọn người bạn muốn mời vào chơi!
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button className="btn btn-secondary room-pick-btn" onClick={() => handleCreateRoom('caro')}>
                <span style={{ fontSize: '24px' }}>⭕</span>
                <div>
                  <strong>Cờ Ca-ro</strong>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Lưới 15x15 thi đấu 5 ô</div>
                </div>
              </button>

              <button className="btn btn-secondary room-pick-btn" onClick={() => handleCreateRoom('chess')}>
                <span style={{ fontSize: '24px' }}>♔</span>
                <div>
                  <strong>Cờ Vua</strong>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Tiêu chuẩn quốc tế FIDE</div>
                </div>
              </button>

              <button className="btn btn-secondary room-pick-btn" onClick={() => handleCreateRoom('xiangqi')}>
                <span style={{ fontSize: '24px' }}>帥</span>
                <div>
                  <strong>Cờ Tướng</strong>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Bàn cờ gỗ mun sông Sở Hà</div>
                </div>
              </button>

              <button className="btn btn-secondary room-pick-btn" onClick={() => handleCreateRoom('ludo')}>
                <span style={{ fontSize: '24px' }}>🐎</span>
                <div>
                  <strong>Cờ Cá Ngựa</strong>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>15x15 lắc xúc xắc đá ngựa</div>
                </div>
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
              <h2>🚪 VÀO PHÒNG ĐẤU BẰNG MÃ</h2>
              <button className="btn btn-secondary btn-sm" onClick={() => setJoinModalOpen(false)}>✕</button>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập mã phòng (ví dụ: ROOM-4398)"
                value={inputRoomCode}
                onChange={e => setInputRoomCode(e.target.value)}
              />
              <button
                className="btn btn-primary"
                onClick={() => handleJoinRoom(inputRoomCode)}
                disabled={!inputRoomCode.trim()}
              >
                Vào Ngay ⚔️
              </button>
            </div>

            <h4 style={{ fontSize: '13px', color: '#93c5fd', marginBottom: '10px' }}>Các Phòng Đang Chờ Đối Thủ:</h4>
            {waitingRooms.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Hiện chưa có ai mở phòng chờ.
                </p>
                <button className="btn btn-primary btn-sm" onClick={() => { setJoinModalOpen(false); setRoomModalOpen(true); }}>
                  Tạo Phòng Đầu Tiên Ngay 🚀
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '220px', overflowY: 'auto' }}>
                {waitingRooms.map(r => (
                  <div key={r.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div>
                      <strong style={{ color: '#38bdf8' }}>[{r.roomCode}]</strong> • Trò: <span style={{ color: '#fbbf24', fontWeight: 600 }}>{r.gameType.toUpperCase()}</span>
                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                        Chủ: {r.hostFullName} {r.invitedFullName && <span style={{ color: '#f87171' }}>• Lời mời riêng cho: {r.invitedFullName}</span>}
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={() => handleJoinRoom(r.roomCode)}>
                      Vào Chiến ⚔️
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
