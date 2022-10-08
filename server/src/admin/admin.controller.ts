import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from '../auth/auth.service';
import { OnlyAdmin } from '../auth/decorators/only-admin.decorator';
import { FillWalletsDto } from './dto/fill-wallets.dto';
import { AdminService } from './admin.service';
import { User as UserDecorator } from '../users/user.decorator';
import { User } from '../users/enities/user.entity';

@Controller('admin')
@OnlyAdmin()
export class AdminController {
  constructor(
    private authService: AuthService,
    private adminService: AdminService,
  ) {}

  @Post('users/create')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createUser(@Body() userDto: CreateUserDto) {
    const user = await this.authService.register(userDto);
    return user;
  }

  @Post('users/fill-wallets')
  async fillWallets(
    @UserDecorator() user: User,
    @Body() fillWalletsDto: FillWalletsDto,
  ) {
    await this.adminService.fillUsersWallets(user, fillWalletsDto.amount);
  }
}
