import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { OrderItemRepository } from './repositories/order-item.ropository';

@Injectable()
export class OrderItemService {
  constructor(private readonly repository: OrderItemRepository) { }
  create(createOrderItemDto: CreateOrderItemDto) {
    return this.repository.create(createOrderItemDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
