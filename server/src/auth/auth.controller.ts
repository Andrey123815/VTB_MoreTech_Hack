import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AllowAnon } from './decorators/allow-anon.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @AllowAnon()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    const authData = this.authService.auth(req.user);
    return {
      ...authData,
      user: req.user,
    };
  }
}
