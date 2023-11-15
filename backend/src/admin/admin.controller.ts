import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminService } from './admin.service'
;
@Controller('api/v1/admin')
export class AdminController {
  constructor(
    private readonly adimService: AdminService,
  ) { }

  @Post('sing-up')
  signUp(@Body() registerAdminDto: CreateAdminDto) {
    return this.adimService.create(registerAdminDto);
  }
}
