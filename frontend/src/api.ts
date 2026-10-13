import type { ChatMessage, User } from './types';

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

export async function fetchChatMessages(): Promise<ChatMessage[]> {
  const res = await fetch(`${API_BASE}/chat/messages`);
  if (!res.ok) throw new Error('Không thể tải tin nhắn!');
  return res.json();
}

export async function sendChatMessage(
  userId: number,
  username: string,
  fullName: string,
  avatar: string,
  message: string,
  gameTag: string
): Promise<ChatMessage> {
  const res = await fetch(`${API_BASE}/chat/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, username, fullName, avatar, message, gameTag })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Gửi tin nhắn thất bại!');
  return data;
}

export async function reportGameWin(userId: number, gameName: string, score: number): Promise<{ score: number; wins: number; message: string }> {
  const res = await fetch(`${API_BASE}/games/win`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, gameName, score })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Không thể lưu kết quả trận đấu!');
  return data;
}

export async function fetchLeaderboard(): Promise<User[]> {
  const res = await fetch(`${API_BASE}/leaderboard`);
  if (!res.ok) throw new Error('Không thể tải bảng xếp hạng!');
  return res.json();
}
