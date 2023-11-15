import { Injectable } from "@nestjs/common";
import { UpdateProductDto } from "../dto/update-product.dto";
import { CreateProductDto } from "../dto/create-product.dto";
import { Product } from "../entities/product.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>
    ) { }

  create(createProductDto: CreateProductDto) {

    return this.repository.save(createProductDto)
  }

  async findAll(query: string, skips: number): Promise<Product[]> {
    return this.repository.find({
      take: 10,
      skip: skips,
      where: {
        name: query
      },
      select: {
        name: true,
        price: true,
        description: true,
        image: true,
      },
    });
  }

  async findOne(id: string): Promise<Product> {

    return this.repository.findOne({
      where: { id },
      select: {
        name: true,
        price: true,
        description: true,
        image: true,
      }
    });

  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.repository.update(id, updateProductDto)
  }

  remove(id: string) {
    return this.repository.delete(id)
  }

}