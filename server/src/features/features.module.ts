import { Module } from '@nestjs/common';
import { FeaturesService } from './features.service';
import { FeaturesController } from './features.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feature } from './entities/feature.entity';
import { UserFeature } from './entities/user-feature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feature, UserFeature])],
  controllers: [FeaturesController],
  providers: [FeaturesService],
})
export class FeaturesModule {}
