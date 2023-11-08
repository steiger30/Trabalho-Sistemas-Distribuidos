import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) { }

  create(createAdminDto: CreateAdminDto) {
    return this.prisma.admin.create({ data: createAdminDto });
  }
}
