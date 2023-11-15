import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService    
    ) {}

  
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async singIn(@Req() req: any) {
    return await this.authService.singIn(req.user);
  }
}
