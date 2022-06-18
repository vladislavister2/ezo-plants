import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'login' })
  login: string;

  @Column()
  password: string;

  @Column()
  email: string;
}
