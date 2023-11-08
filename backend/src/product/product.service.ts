import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProducRepository } from './repositories/product.repository';
import { Category } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProducRepository){}

  create(createProductDto: CreateProductDto) {
    return this.repository.create(createProductDto);
  }

  findAll(category: Category, skip: number) {
    return this.repository.findAll({ query: category, skip });
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.repository.update(id, updateProductDto)
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
