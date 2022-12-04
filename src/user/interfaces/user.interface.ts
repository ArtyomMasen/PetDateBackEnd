export interface IUser {
  id: number;
  email: string;
  isVerified: boolean;
  username: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  surname: string;
  interests: string;
  notifications: boolean;
  isOnline: boolean;
}