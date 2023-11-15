import { Injectable } from "@nestjs/common";

import { CreateOrderItemDto } from "../dto/create-order-item.dto";
import { Repository } from "typeorm";
import { OrderItem } from "../entities/order-item.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class OrderItemRepository {
  constructor(
    @InjectRepository(OrderItem)
    private readonly repository: Repository<OrderItem>
    ) { }
  create(createOrderItemDto: CreateOrderItemDto) {
    return this.repository.create(createOrderItemDto);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
