import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {

  @PrimaryGeneratedColumn('uuid')
   id: string;

  @Column()
  name: string;
  
  @ManyToMany(() => Product, product => product.category )
  product: Product[];
}
