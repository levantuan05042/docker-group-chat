export interface User {
  id: number;
  username: string;
  fullName: string;
  email: string;
}

export type TodoStatus = 'TODO' | 'IN_PROGRESS' | 'COMPLETED';
export type TodoPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: TodoStatus;
  priority: TodoPriority;
  dueDate: string | null;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface TodoStats {
  total: number;
  todoCount: number;
  inProgressCount: number;
  completedCount: number;
}
