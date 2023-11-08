import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './repositories/order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly repository: OrderRepository){}
  create(createOrderDto: CreateOrderDto) {
    return this.repository.create(createOrderDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
