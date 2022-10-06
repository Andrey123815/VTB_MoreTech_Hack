import { Controller, Get } from '@nestjs/common';
import { User } from './enities/user.entity';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}
