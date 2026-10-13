import React, { useState } from 'react';
import type { User, GameType, ToastNotification } from './types';
import { loginUser, registerUser, reportGameWin, fetchLeaderboard } from './api';
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

  // Show dynamic Toast notification
  const showToast = (type: 'success' | 'error' | 'info' | 'warning', message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

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
        showToast('success', 'Đăng ký thành công! Mật khẩu của bạn đã được mã hóa BCrypt an toàn. 🛡️');
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
    playSound('click');
    showToast('info', 'Bạn đã đăng xuất khỏi hệ thống.');
  };

  // Record Game Win to MySQL and update player stats
  const handleGameWin = async (gameName: string, bonus: number) => {
    if (!currentUser) return;
    try {
      const res = await reportGameWin(currentUser.id, gameName, bonus);
      setCurrentUser(prev => prev ? { ...prev, score: res.score, wins: res.wins } : null);
      showToast('success', `Cộng +${bonus} điểm thưởng vào tài khoản MySQL! Tổng điểm: ${res.score} ⭐`);
    } catch (e) {
      console.error(e);
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
        {/* Toast Container */}
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
              <span style={{ fontSize: '46px', display: 'block', marginBottom: '8px' }}>🕹️</span>
              <h2>GAMECHAT HUB</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                Đấu Trường Cờ &amp; Minigames Trực Tuyến • Chat Realtime
              </p>
              <div style={{ marginTop: '8px', display: 'inline-block', background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', color: '#a5b4fc' }}>
                🔒 Bảo mật mật khẩu bằng thuật toán BCrypt
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
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
                      {AVATARS.map(av => (
                        <button
                          key={av}
                          type="button"
                          className="btn btn-secondary btn-sm"
                          style={{ fontSize: '20px', padding: '6px 10px', border: authAvatar === av ? '2px solid #6366f1' : '1px solid var(--border-color)' }}
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
            <p>Vừa Đấu Cờ Đỉnh Cao • Vừa Giao Lưu Nhắn Tin</p>
          </div>
        </div>

        <div className="user-status-bar">
          <div className="score-badge">⭐ {currentUser.score} Điểm</div>
          <div className="wins-badge">🏆 {currentUser.wins} Thắng</div>

          <button className="btn btn-secondary btn-sm" onClick={openLeaderboard}>
            🥇 Bảng Xếp Hạng
          </button>

          <button className="btn btn-danger btn-sm" onClick={handleLogout} title="Đăng xuất">
            Đăng xuất
          </button>
        </div>
      </header>

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
            🐎 Cờ Cá Ngựa (4 Đội)
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
          />
        )}
      </main>

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

            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button className="btn btn-primary" onClick={() => setLeaderboardOpen(false)}>Đóng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
