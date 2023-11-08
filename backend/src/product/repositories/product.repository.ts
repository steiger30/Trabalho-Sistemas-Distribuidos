import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateProductDto } from "../dto/update-product.dto";
import { CreateProductDto } from "../dto/create-product.dto";
import { NotFoundError } from "rxjs";
import { Product } from "../entities/product.entity";
import { Category } from "@prisma/client";

@Injectable()
export class ProducRepository {
  constructor(private prisma: PrismaService) { }

  create(createProductDto: CreateProductDto) {
    const { adminId, categoryId } = createProductDto;
    const admin = this.prisma.admin.findUnique({ where: { id: adminId } })

    if (!admin) {
      throw new NotFoundError('Author not found.');
    }
    const category = this.prisma.admin.findUnique({ where: { id: categoryId } })

    if (!category) {
      throw new NotFoundError('Categoy not found.');
    }

    return this.prisma.product.create({
      data: createProductDto,

    })
  }

  async findAll({ query, skip }: { query: Category; skip: number; }): Promise<Product[] | any > {
    return this.prisma.product.findMany({
      take:10,
      skip:skip,
      where: {
        category: query
      },
      select: {
        name: true,
        category: true,
        price: true,
        description: true,
        image: true,
        adminId: true,
      },
      orderBy: {
        name: 'asc',
      }
    });
  }

  async findOne(id: string): Promise<Product | any> {

  this.prisma.product.findUnique({
      where: { id },
      select: {
        name: true,
        category: true,
        price: true,
        description: true,
        image: true,
        adminId: true,
      }
    });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const { adminId, categoryId } = updateProductDto;
    const admin = this.prisma.admin.findUnique({ where: { id: adminId } })

    if (!admin) {
      throw new NotFoundError('Author not found.');
    }
    const category = this.prisma.admin.findUnique({ where: { id: categoryId } })

    if (!category) {
      throw new NotFoundError('Categoy not found.');
    }


    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    })
  }

  remove(id: string) {
    return this.prisma.product.delete({
      where: { id }
    })
  }

}