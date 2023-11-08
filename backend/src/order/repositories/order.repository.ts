import { Injectable } from "@nestjs/common";
import { UpdateOrderDto } from "../dto/update-order.dto";
import { CreateOrderDto } from "../dto/create-order.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class OrderRepository {
  constructor(private prisma: PrismaService) { }

  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: createOrderDto,
    });
  }

  remove(id: string) {
    return this.prisma.order.delete({
      where: { id }
    })
  }
}