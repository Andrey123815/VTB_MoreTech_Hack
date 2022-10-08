import { User } from '../../users/enities/user.entity';
import { PrimaryColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Feature } from './feature.entity';

const INIT_FEATURE_SCORE = 10;

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

  @Column({
    type: 'float',
    default: INIT_FEATURE_SCORE,
  })
  score: number;
}
