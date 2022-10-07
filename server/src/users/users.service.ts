import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './enities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
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
}
