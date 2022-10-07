import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AllowAnon } from './allow-anon.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @AllowAnon()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.auth(req.user);
  }
}
