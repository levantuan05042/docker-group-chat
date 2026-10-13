import type { ChatMessage, GameRoom, User } from './types';

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

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(`${API_BASE}/users`);
  if (!res.ok) throw new Error('Không thể tải danh sách người chơi!');
  return res.json();
}

export async function fetchChatMessages(userId?: number): Promise<ChatMessage[]> {
  const url = userId ? `${API_BASE}/chat/messages?userId=${userId}` : `${API_BASE}/chat/messages`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Không thể tải tin nhắn!');
  return res.json();
}

export async function inviteUserToRoom(
  roomCode: string,
  targetUserId: number,
  targetUsername: string,
  targetFullName: string
): Promise<GameRoom> {
  const res = await fetch(`${API_BASE}/rooms/${roomCode}/invite`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ targetUserId, targetUsername, targetFullName })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Gửi lời mời thất bại!');
  return data;
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

// Room Management APIs
export async function createGameRoom(
  gameType: string,
  hostUserId: number,
  hostUsername: string,
  hostFullName: string
): Promise<GameRoom> {
  const res = await fetch(`${API_BASE}/rooms/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ gameType, hostUserId, hostUsername, hostFullName })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Tạo phòng thất bại!');
  return data;
}

export async function joinGameRoom(
  roomCode: string,
  guestUserId: number,
  guestUsername: string,
  guestFullName: string
): Promise<GameRoom> {
  const res = await fetch(`${API_BASE}/rooms/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomCode, guestUserId, guestUsername, guestFullName })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Tham gia phòng thất bại!');
  return data;
}

export async function fetchGameRoom(roomCode: string): Promise<GameRoom> {
  const res = await fetch(`${API_BASE}/rooms/${roomCode}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Không tìm thấy phòng!');
  return data;
}

export async function syncGameRoom(
  roomCode: string,
  hostScore?: number,
  guestScore?: number,
  gameState?: string,
  status?: string
): Promise<GameRoom> {
  const res = await fetch(`${API_BASE}/rooms/${roomCode}/sync`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ hostScore, guestScore, gameState, status })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Đồng bộ phòng thất bại!');
  return data;
}

export async function fetchWaitingRooms(): Promise<GameRoom[]> {
  const res = await fetch(`${API_BASE}/rooms/waiting`);
  if (!res.ok) throw new Error('Không thể tải danh sách phòng!');
  return res.json();
}
