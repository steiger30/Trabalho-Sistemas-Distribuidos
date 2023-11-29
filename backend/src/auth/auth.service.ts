import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/entities/admin.entity';
import { JwtService } from '@nestjs/jwt';
import {  SignInDto } from './dto/sign-in.dto';


@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService
  ) { }

  async singIn(signInDto: SignInDto) {

    const payload = { sub: signInDto.id, email: signInDto.email };

    return {
      token: this.jwtService.sign(payload),
      expires_in: 2,
    };
  }
  async validateAdmin(email, password) {
    let adminIsValid: Admin;
  
    adminIsValid = await this.adminService.findByAdminEmail(email);
    if(!adminIsValid) return null;
    

    const isPasswordValid = await adminIsValid.validatePassword(password);;
    if (!isPasswordValid) { return null; }

    return adminIsValid;
  }
}
