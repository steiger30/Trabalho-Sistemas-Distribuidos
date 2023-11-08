import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateOrderItemDto } from "../dto/create-order-item.dto";

@Injectable()
export class OrderItemRepository {
  constructor(private prisma: PrismaService) { }
  create(createOrderItemDto: CreateOrderItemDto) {
    return this.prisma.orderItem.create({ data: createOrderItemDto });
  }

  remove(id: string) {
    return this.prisma.orderItem.delete({where: {id}});
  }
}
