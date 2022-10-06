import { User } from 'src/users/enities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Feature } from './feature.entity';

@Entity({ name: 'users_features' })
export class UserFeature {
  @Column()
  userId: number;

  @Column()
  featureId: number;

  @ManyToOne(() => Feature, (feature) => feature.userFeature)
  feature: Feature;

  @ManyToOne(() => User, (user) => user.userFeature)
  user: User;
}
