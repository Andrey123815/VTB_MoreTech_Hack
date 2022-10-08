import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/enities/user.entity';
import { Feature } from './entities/feature.entity';
import { UserFeature } from './entities/user-feature.entity';

export type TUserFeatures = Record<string, number>;

export const TOXICITY_ID = 7;

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

      if (feature.id === TOXICITY_ID) {
        userFeature.score = 0;
      }

      userFeature = await this.usersFeaturesRepository.save(userFeature);
      userFeatures.push(userFeature);
    }

    return userFeatures;
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
    let countFeaturesWithoutToxicity = 0;
    let sum = 0;
    let toxicityScore = 0;

    if (user.userFeatures === undefined) {
      return 0;
    }

    user.userFeatures.forEach((userFeature) => {
      if (userFeature.featureId !== TOXICITY_ID) {
        countFeaturesWithoutToxicity += 1;
        sum += userFeature.score;
      } else {
        toxicityScore = userFeature.score;
      }
    });

    return (
      sum / countFeaturesWithoutToxicity -
      toxicityScore / countFeaturesWithoutToxicity
    );
  }

  findAll() {
    return this.featuresRepository.find();
  }
}
