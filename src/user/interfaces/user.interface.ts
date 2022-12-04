export interface IUser {
  id: number;
  email: string;
  isVerified: boolean;
  username: string;
  name: string;
  surname: string;
  interests: string;
  notifications: boolean;
  isOnline: boolean;
  createdAt: Date;
  updatedAt: Date;
}
