import type { Todo, TodoStats, User } from './types';

const isLocalDev = typeof window !== 'undefined' && window.location.port === '5173';
const API_BASE = import.meta.env.VITE_API_URL || (isLocalDev ? 'http://localhost:8080/api' : '/api');

export async function loginUser(username: string, password: string): Promise<User> {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Đăng nhập thất bại!');
  return data;
}

export async function registerUser(username: string, password: string, fullName: string, email: string): Promise<User> {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, fullName, email })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Đăng ký thất bại!');
  return data;
}

export async function fetchTodos(userId: number, status?: string): Promise<Todo[]> {
  const url = new URL(`${API_BASE}/todos`);
  url.searchParams.set('userId', userId.toString());
  if (status && status !== 'ALL') {
    url.searchParams.set('status', status);
  }
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Không thể tải danh sách công việc!');
  return res.json();
}

export async function fetchStats(userId: number): Promise<TodoStats> {
  const res = await fetch(`${API_BASE}/todos/stats?userId=${userId}`);
  if (!res.ok) throw new Error('Không thể tải thống kê!');
  return res.json();
}

export async function createTodoItem(todo: Partial<Todo>): Promise<Todo> {
  const res = await fetch(`${API_BASE}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Thêm công việc thất bại!');
  return data;
}

export async function updateTodoItem(id: number, todo: Partial<Todo>): Promise<Todo> {
  const res = await fetch(`${API_BASE}/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Cập nhật thất bại!');
  return data;
}

export async function updateTodoStatus(id: number, status: string): Promise<Todo> {
  const res = await fetch(`${API_BASE}/todos/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Cập nhật trạng thái thất bại!');
  return data;
}

export async function deleteTodoItem(id: number): Promise<void> {
  const res = await fetch(`${API_BASE}/todos/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || 'Xóa thất bại!');
  }
}
