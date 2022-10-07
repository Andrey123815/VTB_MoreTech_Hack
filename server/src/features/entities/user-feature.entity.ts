import { User } from '../../users/enities/user.entity';
import { PrimaryColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Feature } from './feature.entity';

@Entity({ name: 'users_features' })
export class UserFeature {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  featureId: number;

  @ManyToOne(() => Feature, (feature) => feature.userFeatures)
  feature: Feature;

  @ManyToOne(() => User, (user) => user.userFeatures)
  user: User;

  @Column('int')
  score: number;
}
