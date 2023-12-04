import { IsInt, IsNotEmpty, IsPositive, Min } from "class-validator";

export class GetOrderItemDto {
  
  @IsInt({ message: 'Quantity must be an integer' })
  @Min(1, { message: 'Quantity must be greater than 0' })
  quantity: number
  
  @IsNotEmpty()
  productId: string;
 
}
