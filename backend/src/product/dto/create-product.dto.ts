import { IsEmail, IsInt, IsNotEmpty, IsString, Matches, Max, MaxLength } from "class-validator";
export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Max(1000)
  price: number;
  
  @MaxLength(120)
  description: string;

  @IsNotEmpty()
  adminId: string; 
}
