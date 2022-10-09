import { Feature } from '../../features/entities/feature.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { UserTask } from './user-task.entity';
import { User } from '../../users/enities/user.entity';
import { Exclude } from 'class-transformer';

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

  @Column('int')
  featureId: number;

  @Exclude()
  @ManyToOne(() => Feature, (feature) => feature.tasks)
  feature: Feature;

  @Exclude()
  @OneToMany(() => UserTask, (userTask) => userTask.task)
  userTasks: UserTask[];

  @Exclude()
  @Column({
    type: 'enum',
    enum: TaskCreationStatus,
    default: TaskCreationStatus.IN_MODERATION,
  })
  creationStatus: TaskCreationStatus;

  @Exclude()
  @ManyToOne(() => User, (team) => team.createdTasks)
  creator: User;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: number;
}
