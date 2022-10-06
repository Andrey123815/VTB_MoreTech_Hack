import { UserFeature } from 'src/features/entities/user-feature.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

const LISTED_COINS_PER_MONTH = 100;

export enum UserRole {
  ADMIN = 'admin',
  TEAMLEAD = 'teamlead',
  MEMBER = 'member',
}

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  login: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column()
  specialization: string;

  @Column()
  grade: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.MEMBER,
  })
  role: UserRole;

  @Column({ type: 'int', default: 0 })
  coinsAmount: number;

  @Column({ type: 'int', default: LISTED_COINS_PER_MONTH })
  listedCoinsAmount: number;

  @Column()
  avatarSrc: string;

  @OneToMany(() => UserFeature, (userFeature) => userFeature.feature)
  userFeature: UserFeature[];
}
