export interface User {
  id: number;
  username: string;
  fullName: string;
  email: string;
  avatar: string;
  score: number;
  wins: number;
}

export interface ChatMessage {
  id: number;
  userId: number;
  username: string;
  fullName: string;
  avatar: string;
  message: string;
  gameTag: string;
  targetUserId?: number | null;
  createdAt: string;
}

export type GameType = 'caro' | 'xiangqi' | 'chess' | 'ludo' | '2048';

export interface GameRoom {
  id: number;
  roomCode: string;
  gameType: GameType;
  hostUserId: number;
  hostUsername: string;
  hostFullName: string;
  guestUserId: number | null;
  guestUsername: string | null;
  guestFullName: string | null;
  invitedUserId?: number | null;
  invitedUsername?: string | null;
  invitedFullName?: string | null;
  hostScore: number;
  guestScore: number;
  status: 'WAITING' | 'PLAYING' | 'FINISHED';
  gameState: string | null;
  createdAt: string;
}

export interface ToastNotification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title?: string;
  message: string;
}
