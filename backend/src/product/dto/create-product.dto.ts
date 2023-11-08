import { Category } from "@prisma/client";

export class CreateProductDto {
  name: string;
  price: number;
  description: string;
  image: string;
  adminId: string; 
  categoryId: string;
}
