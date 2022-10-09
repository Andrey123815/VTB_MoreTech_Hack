import { User } from '../../users/enities/user.entity';
import { PrimaryColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Task } from './task.entity';
import { Exclude, Expose } from 'class-transformer';

export enum TaskCompletionStatus {
  DONE = 'done',
  IN_PROGRESS = 'in_progress',
}

@Entity({ name: 'users_tasks' })
export class UserTask {
  @PrimaryColumn()
  id: string;

  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  taskId: number;

  @Exclude()
  @ManyToOne(() => Task, (Task) => Task.userTasks)
  task: Task;

  @Exclude()
  @ManyToOne(() => User, (user) => user.userTasks)
  user: User;

  @Exclude()
  @Column('float')
  rewardFeature: number;

  @Expose()
  get title() {
    return this.task.title;
  }

  @Expose()
  get description() {
    return this.task.description;
  }

  @Expose()
  get featureId() {
    return this.task.featureId;
  }

  @Column({
    type: 'enum',
    enum: TaskCompletionStatus,
    default: TaskCompletionStatus.IN_PROGRESS,
  })
  completionStatus: TaskCompletionStatus;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  doneAt: number;
}
