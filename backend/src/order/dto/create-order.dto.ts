import { OrderStatus } from "@prisma/client";

export class CreateOrderDto {
  nameCustomer: string;
  status: OrderStatus;
  price: number;
  discription?: string;

}
