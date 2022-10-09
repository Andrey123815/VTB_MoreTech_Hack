import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/enities/user.entity';
import { Feature } from './entities/feature.entity';
import { UserFeature } from './entities/user-feature.entity';

export type TUserFeatures = Record<string, number>;

@Injectable()
export class FeaturesService {
  constructor(
    @InjectRepository(Feature)
    private featuresRepository: Repository<Feature>,
    @InjectRepository(UserFeature)
    private usersFeaturesRepository: Repository<UserFeature>,
  ) {}

  async addFeaturesToUser(user: User): Promise<UserFeature[]> {
    const features = await this.findAll();
    const userFeatures = [];

    for (const feature of features) {
      let userFeature = new UserFeature();
      userFeature.feature = feature;
      userFeature.user = user;

      userFeature = await this.usersFeaturesRepository.save(userFeature);
      userFeatures.push(userFeature);
    }

    return userFeatures;
  }

  async richFeature(user: User, featureId: number, amount: number) {
    const userFeature = user.userFeatures.find(
      (feature) => feature.featureId === featureId,
    );

    if (userFeature === undefined) {
      throw new BadRequestException('There is no such feature');
    }

    userFeature.score += amount;
    await this.usersFeaturesRepository.save(userFeature);
  }

  getFeatures(user: User): TUserFeatures {
    const result: TUserFeatures = {};

    if (user.userFeatures !== undefined) {
      user.userFeatures.forEach((userFeature) => {
        result[userFeature.feature.title] = userFeature.score;
      });
    }

    return result;
  }

  getLevel(user: User): number {
    let countFeatures = 0;
    let sum = 0;

    if (user.userFeatures === undefined) {
      return 0;
    }

    user.userFeatures.forEach((userFeature) => {
      countFeatures += 1;
      sum += userFeature.score;
    });

    return sum / countFeatures;
  }

  findAll() {
    return this.featuresRepository.find();
  }
}
