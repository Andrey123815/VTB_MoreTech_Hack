import { Task } from '../../tasks/entities/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserFeature } from './user-feature.entity';

@Entity({ name: 'features' })
export class Feature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  imageSrc: string;

  @OneToMany(() => UserFeature, (userFeature) => userFeature.feature)
  userFeatures: UserFeature[];

  @OneToMany(() => Task, (task) => task.feature)
  tasks: Task[];
}
