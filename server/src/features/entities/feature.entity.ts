import { Task } from 'src/tasks/entities/task.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserFeature } from './user-feature.entity';

@Entity({ name: 'features' })
export class Feature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => UserFeature, (userFeature) => userFeature.feature)
  userFeatures: UserFeature[];

  @ManyToMany(() => Task, (task) => task.features)
  tasks: Task[];
}
