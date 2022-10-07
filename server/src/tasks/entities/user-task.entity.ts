import { User } from 'src/users/enities/user.entity';
import { PrimaryColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Task } from './task.entity';

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

  @ManyToOne(() => Task, (Task) => Task.userTasks)
  task: Task;

  @ManyToOne(() => User, (user) => user.userTasks)
  user: User;

  @Column({
    type: 'enum',
    enum: TaskCompletionStatus,
    default: TaskCompletionStatus.IN_PROGRESS,
  })
  completionStatus: TaskCompletionStatus;
}
