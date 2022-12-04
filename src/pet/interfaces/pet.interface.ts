import { IId } from './id.interface';

export interface IPet {
  id: number;
  gender: IId;
  breed: IId;
  kindOfAnimal: IId;
  breedCertificate: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
