import { Injectable } from "@nestjs/common";
import { UpdateCategoryDto } from "../dto/update-category.dto";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { Repository } from 'typeorm';
import { Category } from "../entities/category.entity";
import { InjectRepository } from "@nestjs/typeorm";
@Injectable()
export class CategoryRepository {

  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>
    ) { }

  create(createCategoryDto: CreateCategoryDto) {
    return this.repository.save(createCategoryDto);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.repository.update( id, updateCategoryDto);
  }

  findAll(){
    return this.repository.find();
  }
  
  remove(id: string) {
    return this.repository.delete( id )
  }
}