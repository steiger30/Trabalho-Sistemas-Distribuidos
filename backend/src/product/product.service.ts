import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repositories/product.repository';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductRepository){}

  create(createProductDto: CreateProductDto) {
    return this.repository.create(createProductDto);
  }

  findAll(query,page: number) : Promise<Pagination<Product>> {
    page 
    return this.repository.findAll(query , page );
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
