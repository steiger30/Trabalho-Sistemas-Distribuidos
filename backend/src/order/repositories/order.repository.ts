import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "../dto/create-order.dto";
import { Order } from "../entities/order.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class OrderRepository {
  constructor(
    @InjectRepository(Order)
    private repository: Repository<Order>
    ) { }

  create(createOrderDto: CreateOrderDto) {
    return this.repository.create(createOrderDto);
  }

  remove(id: string) {
    return this.repository.delete(id)
  }
}