import { Controller, Get } from '@nestjs/common';
import { User } from './enities/user.entity';
import { User as ContextUser } from './user.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('team')
  getUsersInTeam(@ContextUser() user: User): Promise<User[]> {
    return this.usersService.findAllInTeam(user.teamId);
  }
}
