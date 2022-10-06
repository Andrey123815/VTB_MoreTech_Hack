import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserFeature } from './user-feature.entity';

@Entity({ name: 'features' })
export class Feature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => UserFeature, (userFeature) => userFeature.feature)
  userFeature: UserFeature[];
}
