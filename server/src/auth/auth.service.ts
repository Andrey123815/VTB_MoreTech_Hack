import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/enities/user.entity';
import { UserDto } from 'src/users/user.dto';
import { bcryptContants } from './constants';

export type User = Omit<User, 'password'>;
export type JwtPayload = {
  email: string;
  sub: number;
};
export type AuthData = {
  access_token: string;
};

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOne(email);
    if (user) {
      const match = await bcrypt.compare(pass, user.password);
      if (match) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async findUser(userId: number): Promise<User | null> {
    const user = await this.usersService.get(userId);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  auth(user: User): AuthData {
    const payload: JwtPayload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userDto: UserDto): Promise<AuthData> {
    userDto.password = await bcrypt.hash(userDto.password, bcryptContants.salt);
    const user = await this.usersService.create(userDto);
    return this.auth(user);
  }
}
