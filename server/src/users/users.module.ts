import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './enities/user.entity';
import { Team } from './enities/team.entity';
import { BlockchainModule } from '../blockchain/blockchain.module';
import { FeaturesModule } from 'src/features/features.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Team, User]),
    BlockchainModule,
    FeaturesModule,
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
