import { IUser } from "../interfaces";
import { BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { getUnixTime } from "date-fns";

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  email: string;

  @Column('boolean')
  isVerified: boolean;

  @Column('varchar')
  username: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  surname: string;

  @Column('varchar')
  interests: string;

  @Column('boolean')
  notifications: boolean;

  @Column('boolean')
  isOnline: boolean;

  @CreateDateColumn({ type: 'integer' })
  createdAt: number;

  @UpdateDateColumn({ type: 'integer' })
  updatedAt: number;

  @BeforeUpdate()
  private update?() {
    this.updatedAt = getUnixTime(new Date());
  }
}