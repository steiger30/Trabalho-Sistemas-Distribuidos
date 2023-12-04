import { IsNotEmpty, IsNumber, Length, MaxLength } from "class-validator";
import { CreateOrderItemDto } from "./create-order-item.dto";


enum OrderStatus {
  FEITO_PEDIDO = 'FEITO_PEDIDO',
  PEDIDO_NA_COZINHA = 'PEDIDO_NA_COZINHA',
  PEDIDO_PRONTO = 'PEDIDO_PRONTO',
  FINALIZADO = 'FINALIZADO',
}

export class CreateOrderDto {
 

  nameCustomer: string;

  status: OrderStatus;

  price: number;


  discription?: string;

  @IsNotEmpty()
  items: CreateOrderItemDto[];
}
