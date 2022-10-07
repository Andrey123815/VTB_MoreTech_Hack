import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../users/enities/user.entity';

export type AuthUser = Omit<User, 'password'>;
export type JwtPayload = {
  login: string;
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

  async validateUser(login: string, pass: string): Promise<AuthUser | null> {
    const user = await this.usersService.findOne(login);
    if (user) {
      const match = await bcrypt.compare(pass, user.password);
      if (match) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async findUser(userId: number): Promise<AuthUser | null> {
    const user = await this.usersService.get(userId);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  auth(user: User): AuthData {
    const payload: JwtPayload = { login: user.login, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
