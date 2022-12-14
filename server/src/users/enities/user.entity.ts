import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Team } from './team.entity';
import { UserFeature } from '../../features/entities/user-feature.entity';
import { UserTask } from '../../tasks/entities/user-task.entity';
import { Wallet } from '../../blockchain/entities/wallet.entity';
import { Task } from '../../tasks/entities/task.entity';
import { Exclude } from 'class-transformer';

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

  @Exclude()
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

  @Column('int')
  @Exclude()
  teamId: number;

  @ManyToOne(() => Team, (team) => team.users)
  team: Team;

  @Column()
  avatarSrc: string;

  @OneToOne(() => Wallet)
  @JoinColumn()
  @Exclude()
  mainWallet: Wallet;

  @OneToOne(() => Wallet)
  @JoinColumn()
  @Exclude()
  listedWallet: Wallet;

  @OneToMany(() => UserFeature, (userFeature) => userFeature.user)
  @Exclude()
  userFeatures: UserFeature[];

  @OneToMany(() => UserTask, (userTask) => userTask.user)
  userTasks: UserTask[];

  @OneToMany(() => Task, (task) => task.creator)
  createdTasks: Task;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: number;

  level: number;

  features: Record<string, number>;
}
