import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminRepository } from './repositories/admin.repository';

@Injectable()
export class AdminService {
  constructor(
    private readonly repository: AdminRepository
  ) { }

  async create(createAdminDto: CreateAdminDto) {
    return await this.repository.create(createAdminDto);
  }


  async findByAdminEmail(email: string) {
    return await this.repository.findByAdminEmail(email)
  }
}
