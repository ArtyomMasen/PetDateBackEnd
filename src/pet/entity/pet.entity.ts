import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IPet } from '../interfaces';
import { Gender } from './gender.entity';
import { Breed } from './breed.entity';
import { KindOfAnimal } from './kind-of-animal.entity';
import { User } from '../../user/entity';

@Entity()
export class Pet implements IPet {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: true })
  breedCertificate: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @OneToOne(() => Gender, (gender) => gender.pet)
  gender: Gender;

  @OneToOne(() => Breed, (breed) => breed.pet)
  breed: Breed;

  @OneToOne(() => KindOfAnimal, (kindOfAnimal) => kindOfAnimal.pet)
  kindOfAnimal: KindOfAnimal;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.pets, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  user: Pet[];
}
