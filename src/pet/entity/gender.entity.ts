import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IId } from "../interfaces";

@Entity()
export class Gender implements IId {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;
}