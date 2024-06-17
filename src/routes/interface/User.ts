export interface User {
  telegramID: string | null;
  password: string | null;
  createdAt: Date | null;
  token: string | null;
  isLoggedIn: boolean;
}