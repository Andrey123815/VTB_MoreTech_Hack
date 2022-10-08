import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from '../auth/auth.service';
import { OnlyAdmin } from 'src/auth/decorators/only-admin.decorator';

@Controller('admin')
@OnlyAdmin()
export class AdminController {
  constructor(private authService: AuthService) {}

  @Post('users/create')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createUser(@Body() userDto: CreateUserDto) {
    const user = await this.authService.register(userDto);
    return user;
  }
}
