import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './repositories/category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly respository: CategoryRepository){}
  create(createCategoryDto: CreateCategoryDto) {
    return this.respository.create(createCategoryDto);
  }

  findAll() {
    return this.respository.findAll()
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.respository.update(id, updateCategoryDto);
  }

  remove(id: string) {
    return this.respository.remove(id);
  }
}
