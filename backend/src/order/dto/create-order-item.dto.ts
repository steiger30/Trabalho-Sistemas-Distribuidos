import { IsInt, IsNotEmpty, IsPositive, Min } from "class-validator";

export class CreateOrderItemDto {
  
  @IsInt({ message: 'Quantity must be an integer' })
  @Min(1, { message: 'Quantity must be greater than 0' })
  quantity: number
  
  @IsNotEmpty()
  productId: string;
  
  @IsNotEmpty()
  orderId: string;
}
