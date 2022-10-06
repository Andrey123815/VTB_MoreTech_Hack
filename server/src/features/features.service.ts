import { Injectable } from '@nestjs/common';
import { CreateFeatureDto } from './dto/create-feature.dto';

@Injectable()
export class FeaturesService {
  create(createFeatureDto: CreateFeatureDto) {
    return 'This action adds a new Feature';
  }

  findAll() {
    return `This action returns all Features`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Feature`;
  }
}
