import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { Repository } from "typeorm";
import { Admin } from "../entities/admin.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { MessagesHelper } from "src/shared/helpers/messages.helper";

@Injectable()
export class AdminRepository {
  constructor(
    @InjectRepository(Admin)
    private readonly repository: Repository<Admin>
  ) { }

  async create(createAdminDto: CreateAdminDto) {
    try {
      let { email } = createAdminDto
      const existingAdmin = await this.repository.findOne({ where: { email } });

      if (existingAdmin) {
        throw new Error(MessagesHelper.EMAIL_ALREADY_REGISTERED);
      }

      const admin = this.repository.create(createAdminDto);
      return await this.repository.save(admin)
    } catch (error) {
      throw new HttpException(
        { message: `${error.message}` },
        HttpStatus.BAD_REQUEST,
      );
    }
  }


  async findByAdminEmail(email: string) {
    return await this.repository.findOne({ where: { email } });
  }
}