/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { User, UserRole } from 'src/users/enities/user.entity';
import { ALLOW_ANON_KEY } from '../decorators/allow-anon.decorator';
import { ONLY_ADMIN_KEY } from '../decorators/only-admin.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  // @ts-ignore
  async canActivate(context: ExecutionContext) {
    const allowAnon = this.reflector.getAllAndOverride<boolean>(
      ALLOW_ANON_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (allowAnon) {
      return true;
    }

    const superResult = await super.canActivate(context);

    const onlyAdmin = this.reflector.getAllAndOverride<boolean>(
      ONLY_ADMIN_KEY,
      [context.getHandler(), context.getClass()],
    );

    const request = context.switchToHttp().getRequest();
    const user: User = request.user;

    if (onlyAdmin) {
      return superResult && user.role === UserRole.ADMIN;
    }

    return superResult;
  }
}
