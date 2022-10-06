import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
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

  get(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findOne(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create(userDto: UserDto): Promise<User> {
    return await this.usersRepository.save(userDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
