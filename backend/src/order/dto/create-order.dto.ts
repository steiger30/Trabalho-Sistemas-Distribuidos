import { IsNotEmpty, Length } from "class-validator";

enum OrderStatus {
  FEITO_PEDIDO = 'FEITO_PEDIDO',
  PEDIDO_NA_COZINHA = 'PEDIDO_NA_COZINHA',
  PEDIDO_PRONTO = 'PEDIDO_PRONTO',
  FINALIZADO = 'FINALIZADO',
}

export class CreateOrderDto {
  @IsNotEmpty()
  nameCustomer: string;

  @IsNotEmpty()
  status: OrderStatus;

  @IsNotEmpty()
  price: number;
    @Length(0, 128, { message: 'Nome precisa ter entre 3 e 10 caracteres' })

  discription?: string;

}
