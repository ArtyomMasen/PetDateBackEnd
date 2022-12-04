import { IPet } from "../../pet/interfaces";

export interface IUser {
  id: number;
  email: string;
  isVerified: boolean;
  username: string;
  password: string;
  name: string;
  surname: string;
  interests: string;
  notifications: boolean;
  isOnline: boolean;
  createdAt: Date;
  updatedAt: Date;
  pets: IPet[];
}
