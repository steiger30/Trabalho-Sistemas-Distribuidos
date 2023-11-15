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


  findByAdminEmail(email: string) {
    return this.repository.findByAdminEmail(email)
  }
}
