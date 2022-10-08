import { Feature } from '../../features/entities/feature.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { UserTask } from './user-task.entity';
import { User } from '../../users/enities/user.entity';

export enum TaskCreationStatus {
  CREATED = 'created',
  IN_MODERATION = 'in_moderation',
  REJECTED = 'rejected',
}

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column()
  description: string;

  @Column('int')
  rewardCoins: number;

  @Column()
  featureId: number;

  @ManyToMany(() => Feature, (feature) => feature.tasks)
  @JoinTable()
  features: Feature[];

  @Column('int')
  rewardFeature: number;

  @OneToMany(() => UserTask, (userTask) => userTask.task)
  userTasks: UserTask[];

  @Column({
    type: 'enum',
    enum: TaskCreationStatus,
    default: TaskCreationStatus.IN_MODERATION,
  })
  creationStatus: TaskCreationStatus;

  @ManyToOne(() => User, (team) => team.createdTasks)
  creator: User;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: number;
}