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
  createdAt: string;
}

export type GameType = 'caro' | 'xiangqi' | 'chess' | 'ludo' | '2048';

export interface ToastNotification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title?: string;
  message: string;
}
