import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { ALLOW_ANON_KEY } from '../allow-anon.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const allowAnon = this.reflector.getAllAndOverride<boolean>(
      ALLOW_ANON_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (allowAnon) {
      return true;
    }

    return super.canActivate(context);
  }
}
