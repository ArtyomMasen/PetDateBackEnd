import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IPet } from "../interfaces";

@Entity()
export class Pet implements IPet {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'number', nullable: false })
  gender: number;

  @Column({ type: 'number', nullable: false })
  breed: number;

  @Column({ type: 'number', nullable: false })
  kindOfAnimal: number;

  @Column({ type: 'varchar', nullable: true })
  breedCertificate: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;
}