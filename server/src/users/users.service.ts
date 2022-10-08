import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlockchainService } from '../blockchain/blockchain.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './enities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private blockchainService: BlockchainService,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(login: string): Promise<User> {
    return this.usersRepository.findOneBy({ login });
  }

  get(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.save(userDto);
    user.wallet = await this.blockchainService.createWallet(user);
    return user;
  }
}
