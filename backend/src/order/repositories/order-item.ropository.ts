import { Injectable } from "@nestjs/common";

import { CreateOrderItemDto } from "../../order/dto/create-order-item.dto";
import { Repository } from "typeorm";
import { OrderItem } from "../../order/entities/order-item.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class OrderItemRepository {
  constructor(
    @InjectRepository(OrderItem)
    private readonly repository: Repository<OrderItem>
  ) { }
  create(createOrderItemDto: CreateOrderItemDto) {
    return this.repository.save(createOrderItemDto);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
