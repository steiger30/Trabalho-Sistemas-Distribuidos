import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repositories/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductRepository){}

  create(createProductDto: CreateProductDto) {
    return this.repository.create(createProductDto);
  }

  findAll(category: string, skip: number) {
    return this.repository.findAll( category, skip );
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
