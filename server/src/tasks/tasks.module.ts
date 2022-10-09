import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { UserTask } from './entities/user-task.entity';
import { FeaturesModule } from '../features/features.module';
import { BlockchainModule } from '../blockchain/blockchain.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, UserTask]),
    FeaturesModule,
    BlockchainModule,
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
