import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column('timestamp')
  createdAt: Date;

  @Column('timestamp')
  updatedAt: Date;

  @Column('timestamp')
  deletedAt: Date;
}

export default User;
