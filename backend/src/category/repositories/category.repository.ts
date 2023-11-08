import { Injectable } from "@nestjs/common";
import { UpdateCategoryDto } from "../dto/update-category.dto";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class CategoryRepository {
  constructor(private prisma: PrismaService) { }

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({ data: createCategoryDto });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({ where: { id }, data: updateCategoryDto });
  }

  findAll(){
    return this.prisma.category.findMany();
  }
  
  remove(id: string) {
    return this.prisma.category.delete({
      where: { id }
    })
  }
}