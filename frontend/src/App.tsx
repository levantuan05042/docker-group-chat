import React, { useState, useEffect, useMemo } from 'react';
import type { User, Todo, TodoStats, TodoStatus, TodoPriority } from './types';
import {
  loginUser,
  registerUser,
  fetchTodos,
  fetchStats,
  createTodoItem,
  updateTodoItem,
  updateTodoStatus,
  deleteTodoItem
} from './api';
import './App.css';

export default function App() {
  // Auth state
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('todohub_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [authUsername, setAuthUsername] = useState('demo');
  const [authPassword, setAuthPassword] = useState('123456');
  const [authFullName, setAuthFullName] = useState('Nguyễn Văn Demo');
  const [authEmail, setAuthEmail] = useState('demo@example.com');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Todo Dashboard state
  const [todos, setTodos] = useState<Todo[]>([]);
  const [stats, setStats] = useState<TodoStats>({ total: 0, todoCount: 0, inProgressCount: 0, completedCount: 0 });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [filterPriority, setFilterPriority] = useState<string>('ALL');

  // Modal create / edit
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formPriority, setFormPriority] = useState<TodoPriority>('MEDIUM');
  const [formStatus, setFormStatus] = useState<TodoStatus>('TODO');
  const [formDueDate, setFormDueDate] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Load data when user logs in
  const loadData = async (user: User) => {
    setLoading(true);
    try {
      const [todosData, statsData] = await Promise.all([
        fetchTodos(user.id),
        fetchStats(user.id)
      ]);
      setTodos(todosData);
      setStats(statsData);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      loadData(currentUser);
    }
  }, [currentUser]);

  // Handle Login/Register
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);

    try {
      let user: User;
      if (authMode === 'login') {
        user = await loginUser(authUsername, authPassword);
      } else {
        user = await registerUser(authUsername, authPassword, authFullName, authEmail);
      }
      setCurrentUser(user);
      localStorage.setItem('todohub_user', JSON.stringify(user));
    } catch (err: any) {
      setAuthError(err.message || 'Lỗi xác thực!');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('todohub_user');
    setCurrentUser(null);
    setTodos([]);
  };

  // Open Modal for New Todo
  const openCreateModal = () => {
    setEditingTodo(null);
    setFormTitle('');
    setFormDesc('');
    setFormPriority('MEDIUM');
    setFormStatus('TODO');
    setFormDueDate('');
    setModalOpen(true);
  };

  // Open Modal for Edit
  const openEditModal = (todo: Todo) => {
    setEditingTodo(todo);
    setFormTitle(todo.title);
    setFormDesc(todo.description || '');
    setFormPriority(todo.priority);
    setFormStatus(todo.status);
    setFormDueDate(todo.dueDate || '');
    setModalOpen(true);
  };

  // Save Todo (Create / Update)
  const handleSaveTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser || !formTitle.trim()) return;

    setFormSubmitting(true);
    try {
      if (editingTodo) {
        await updateTodoItem(editingTodo.id, {
          title: formTitle,
          description: formDesc,
          priority: formPriority,
          status: formStatus,
          dueDate: formDueDate || null,
          userId: currentUser.id
        });
      } else {
        await createTodoItem({
          title: formTitle,
          description: formDesc,
          priority: formPriority,
          status: formStatus,
          dueDate: formDueDate || null,
          userId: currentUser.id
        });
      }
      setModalOpen(false);
      await loadData(currentUser);
    } catch (err: any) {
      alert(err.message || 'Có lỗi xảy ra khi lưu công việc!');
    } finally {
      setFormSubmitting(false);
    }
  };

  // Toggle/advance status
  const handleNextStatus = async (todo: Todo) => {
    if (!currentUser) return;
    const nextMap: Record<TodoStatus, TodoStatus> = {
      TODO: 'IN_PROGRESS',
      IN_PROGRESS: 'COMPLETED',
      COMPLETED: 'TODO'
    };
    const nextStatus = nextMap[todo.status];
    try {
      await updateTodoStatus(todo.id, nextStatus);
      await loadData(currentUser);
    } catch (err: any) {
      alert(err.message);
    }
  };

  // Delete Todo
  const handleDelete = async (id: number) => {
    if (!currentUser) return;
    if (confirm('Bạn có chắc chắn muốn xóa công việc này?')) {
      try {
        await deleteTodoItem(id);
        await loadData(currentUser);
      } catch (err: any) {
        alert(err.message);
      }
    }
  };

  // Filtered & searched todos
  const filteredTodos = useMemo(() => {
    return todos.filter(t => {
      const matchSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (t.description && t.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchStatus = filterStatus === 'ALL' || t.status === filterStatus;
      const matchPriority = filterPriority === 'ALL' || t.priority === filterPriority;
      return matchSearch && matchStatus && matchPriority;
    });
  }, [todos, searchTerm, filterStatus, filterPriority]);

  // If not logged in -> render Auth screen
  if (!currentUser) {
    return (
      <div className="auth-wrapper">
        <div className="auth-card glass-panel">
          <div className="auth-header">
            <span style={{ fontSize: '40px', display: 'block', marginBottom: '8px' }}>🚀</span>
            <h2>TaskHub Fullstack</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
              React (TSX) + Spring Boot + MySQL
            </p>
          </div>

          <div className="auth-tabs">
            <button
              className={`tab-btn ${authMode === 'login' ? 'active' : ''}`}
              onClick={() => { setAuthMode('login'); setAuthError(''); }}
            >
              Đăng Nhập
            </button>
            <button
              className={`tab-btn ${authMode === 'register' ? 'active' : ''}`}
              onClick={() => { setAuthMode('register'); setAuthError(''); }}
            >
              Đăng Ký
            </button>
          </div>

          {authError && (
            <div style={{ background: 'rgba(239, 68, 68, 0.2)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#fca5a5', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', marginBottom: '16px' }}>
              ⚠️ {authError}
            </div>
          )}

          <form onSubmit={handleAuthSubmit}>
            <div className="form-group">
              <label>Tên đăng nhập (Username)</label>
              <input
                type="text"
                className="form-control"
                value={authUsername}
                onChange={e => setAuthUsername(e.target.value)}
                required
                placeholder="Ví dụ: demo"
              />
            </div>

            {authMode === 'register' && (
              <>
                <div className="form-group">
                  <label>Họ và tên</label>
                  <input
                    type="text"
                    className="form-control"
                    value={authFullName}
                    onChange={e => setAuthFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
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
              {authLoading ? 'Đang xử lý...' : (authMode === 'login' ? 'Đăng Nhập Vào Hệ Thống' : 'Tạo Tài Khoản Mới')}
            </button>
          </form>

          <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>
            💡 Gợi ý: Nếu chưa có tài khoản, hãy nhấn <b>Đăng Ký</b> để tạo user mới lưu trực tiếp vào MySQL!
          </div>
        </div>
      </div>
    );
  }

  // Calculate completion percentage
  const completionRate = stats.total > 0 ? Math.round((stats.completedCount / stats.total) * 100) : 0;

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <header className="navbar glass-panel">
        <div className="brand">
          <span className="brand-icon">📋</span>
          <div className="brand-text">
            <h1>TASKHUB PRO</h1>
            <p>Hệ thống Quản lý Công việc Fullstack 3 Tầng</p>
          </div>
        </div>

        <div className="user-nav">
          <div className="user-profile">
            <div className="avatar">{currentUser.fullName ? currentUser.fullName[0].toUpperCase() : 'U'}</div>
            <div className="user-info">
              <div className="name">{currentUser.fullName || currentUser.username}</div>
              <div className="username">@{currentUser.username}</div>
            </div>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={handleLogout} title="Đăng xuất">
            Đăng xuất
          </button>
        </div>
      </header>

      {/* STATS OVERVIEW */}
      <div className="stats-grid">
        <div className="stat-card glass-panel">
          <div className="stat-icon" style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8' }}>📊</div>
          <div className="stat-info">
            <div className="num">{stats.total}</div>
            <div className="label">Tổng công việc</div>
          </div>
        </div>

        <div className="stat-card glass-panel">
          <div className="stat-icon" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24' }}>⏳</div>
          <div className="stat-info">
            <div className="num">{stats.todoCount}</div>
            <div className="label">Chờ thực hiện</div>
          </div>
        </div>

        <div className="stat-card glass-panel">
          <div className="stat-icon" style={{ background: 'rgba(14, 165, 233, 0.2)', color: '#38bdf8' }}>⚡</div>
          <div className="stat-info">
            <div className="num">{stats.inProgressCount}</div>
            <div className="label">Đang tiến hành</div>
          </div>
        </div>

        <div className="stat-card glass-panel">
          <div className="stat-icon" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}>✅</div>
          <div className="stat-info">
            <div className="num">{stats.completedCount} ({completionRate}%)</div>
            <div className="label">Đã hoàn thành</div>
          </div>
        </div>
      </div>

      {/* CONTROLS & FILTER */}
      <div className="controls-bar glass-panel">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="form-control"
            placeholder="Tìm kiếm công việc theo tiêu đề, mô tả..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-actions">
          <select
            className="form-control"
            style={{ width: 'auto' }}
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
          >
            <option value="ALL">Tất cả trạng thái</option>
            <option value="TODO">Cần làm (Todo)</option>
            <option value="IN_PROGRESS">Đang làm (In Progress)</option>
            <option value="COMPLETED">Đã xong (Completed)</option>
          </select>

          <select
            className="form-control"
            style={{ width: 'auto' }}
            value={filterPriority}
            onChange={e => setFilterPriority(e.target.value)}
          >
            <option value="ALL">Tất cả mức ưu tiên</option>
            <option value="HIGH">Ưu tiên Cao</option>
            <option value="MEDIUM">Ưu tiên Vừa</option>
            <option value="LOW">Ưu tiên Thấp</option>
          </select>

          <button className="btn btn-primary" onClick={openCreateModal}>
            + Thêm việc mới
          </button>
        </div>
      </div>

      {/* TODO LIST */}
      {loading ? (
        <div className="empty-state glass-panel">
          <p>⏳ Đang tải dữ liệu từ Spring Boot API & MySQL...</p>
        </div>
      ) : filteredTodos.length === 0 ? (
        <div className="empty-state glass-panel">
          <div className="empty-icon">📭</div>
          <h3>Không có công việc nào phù hợp</h3>
          <p style={{ marginTop: '8px', fontSize: '14px' }}>
            {todos.length === 0
              ? 'Bạn chưa có công việc nào. Nhấn "+ Thêm việc mới" để bắt đầu!'
              : 'Hãy thử đổi bộ lọc hoặc từ khóa tìm kiếm.'}
          </p>
        </div>
      ) : (
        <div className="todos-grid">
          {filteredTodos.map(todo => (
            <div key={todo.id} className={`todo-card glass-panel ${todo.status === 'COMPLETED' ? 'completed' : ''}`}>
              <div className="todo-header">
                <div className="badges">
                  <span className={`badge badge-${todo.status.toLowerCase()}`}>
                    {todo.status === 'TODO' && 'Chờ làm'}
                    {todo.status === 'IN_PROGRESS' && 'Đang làm'}
                    {todo.status === 'COMPLETED' && 'Hoàn thành'}
                  </span>
                  <span className={`badge badge-${todo.priority.toLowerCase()}`}>
                    {todo.priority === 'HIGH' && '🔥 Cao'}
                    {todo.priority === 'MEDIUM' && '⚡ Vừa'}
                    {todo.priority === 'LOW' && '🌱 Thấp'}
                  </span>
                </div>

                <div className="card-actions">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => openEditModal(todo)}
                    title="Chỉnh sửa"
                  >
                    ✏️
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(todo.id)}
                    title="Xóa"
                  >
                    🗑️
                  </button>
                </div>
              </div>

              <h3 className="todo-title" style={{ textDecoration: todo.status === 'COMPLETED' ? 'line-through' : 'none' }}>
                {todo.title}
              </h3>

              {todo.description && (
                <p className="todo-desc">{todo.description}</p>
              )}

              <div className="todo-footer">
                <div className="due-date">
                  📅 {todo.dueDate ? todo.dueDate : 'Không có hạn'}
                </div>

                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleNextStatus(todo)}
                  title="Nhấn để đổi trạng thái"
                >
                  {todo.status === 'TODO' && 'Bắt đầu làm ➡️'}
                  {todo.status === 'IN_PROGRESS' && 'Đã xong ✔️'}
                  {todo.status === 'COMPLETED' && 'Làm lại 🔄'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CREATE / EDIT MODAL */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingTodo ? 'Chỉnh Sửa Công Việc' : 'Thêm Công Việc Mới'}</h2>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveTodo}>
              <div className="form-group">
                <label>Tiêu đề công việc *</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Ví dụ: Thiết kế giao diện Dashboard"
                  value={formTitle}
                  onChange={e => setFormTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Mô tả chi tiết</label>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Chi tiết các bước thực hiện..."
                  value={formDesc}
                  onChange={e => setFormDesc(e.target.value)}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label>Mức độ ưu tiên</label>
                  <select
                    className="form-control"
                    value={formPriority}
                    onChange={e => setFormPriority(e.target.value as TodoPriority)}
                  >
                    <option value="LOW">Thấp (Low)</option>
                    <option value="MEDIUM">Vừa (Medium)</option>
                    <option value="HIGH">Cao (High)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Trạng thái</label>
                  <select
                    className="form-control"
                    value={formStatus}
                    onChange={e => setFormStatus(e.target.value as TodoStatus)}
                  >
                    <option value="TODO">Cần làm (Todo)</option>
                    <option value="IN_PROGRESS">Đang làm (In Progress)</option>
                    <option value="COMPLETED">Đã xong (Completed)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Hạn chót (Due Date)</label>
                <input
                  type="date"
                  className="form-control"
                  value={formDueDate}
                  onChange={e => setFormDueDate(e.target.value)}
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={formSubmitting}
                >
                  {formSubmitting ? 'Đang lưu...' : (editingTodo ? 'Lưu thay đổi' : 'Tạo mới')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER ARCHITECTURE */}
      <footer className="tech-footer">
        <p>Kiến Trúc Chuẩn 3 Tầng (3-Tier Enterprise Web Application)</p>
        <div className="tech-pills">
          <span className="pill">⚛️ Frontend: React 19 + TypeScript (TSX) + Vite</span>
          <span className="pill">☕ Backend: Java 17 + Spring Boot 3 + Spring Data JPA</span>
          <span className="pill">🐬 Database: MySQL 8.0</span>
          <span className="pill">🐳 Container: Docker &amp; Docker Compose</span>
        </div>
      </footer>
    </div>
  );
}
