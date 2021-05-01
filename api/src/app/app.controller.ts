import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { LocalAuthGuard } from 'src/auth/local-auth-guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(GqlAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
