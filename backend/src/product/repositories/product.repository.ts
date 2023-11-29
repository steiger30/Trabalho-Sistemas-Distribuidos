import { Injectable } from "@nestjs/common";
import { UpdateProductDto } from "../dto/update-product.dto";
import { CreateProductDto } from "../dto/create-product.dto";
import { Product } from "../entities/product.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Pagination, paginate } from "nestjs-typeorm-paginate";

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>
  ) { }

  create(createProductDto: CreateProductDto) {

    return this.repository.save(createProductDto)
  }

  async findAll(query: string, page: number): Promise<Pagination<Product>> {
    const queryBuilder = this.repository.createQueryBuilder('h');
    queryBuilder.select(['h.id', 'h.name', 'h.price', 'h.description']);
    if (query.length > 0) {
      queryBuilder.where('LOWER(h.name)  LIKE :filter', { filter: `%${query.toLowerCase()}%` });
    }
    queryBuilder.orderBy('h.id', 'ASC');
    return paginate<Product>(queryBuilder, { page, limit: 10 })
  }
  async findOne(id: string): Promise<Product> {

    return this.repository.findOne({
      where: { id },
      select: {
        name: true,
        price: true,
        description: true,
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