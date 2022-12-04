import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IId } from '../interfaces';
import { Pet } from './pet.entity';

@Entity()
export class Breed implements IId {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @OneToOne(() => Pet, (pet) => pet.gender, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  pet: Pet;
}
