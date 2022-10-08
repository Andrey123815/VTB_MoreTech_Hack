import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../users/enities/user.entity';
import { bcryptContants } from './constants';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export type JwtPayload = {
  login: string;
  sub: number;
};
export type AuthData = {
  accessToken: string;
};

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUser(login: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOne(login);
    if (user) {
      const match = await bcrypt.compare(pass, user.password);
      if (match) {
        return user;
      }
    }
    return null;
  }

  async findUser(userId: number): Promise<User | null> {
    const user = await this.usersService.get(userId);
    if (user) {
      return user;
    }
    return null;
  }

  auth(user: User): AuthData {
    const payload: JwtPayload = { login: user.login, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async register(userDto: CreateUserDto): Promise<User> {
    userDto.password = await bcrypt.hash(userDto.password, bcryptContants.salt);
    const user = await this.usersService.create(userDto);
    return user;
  }
}
