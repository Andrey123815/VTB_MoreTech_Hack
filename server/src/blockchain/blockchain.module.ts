import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockchainService } from './blockchain.service';
import { Wallet } from '../blockchain/entities/wallet.entity';
import { ConfigModule } from '@nestjs/config';
import { BlockchainController } from './blockchain.controller';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Wallet])],
  providers: [BlockchainService],
  exports: [BlockchainService],
  controllers: [BlockchainController],
})
export class BlockchainModule {}
