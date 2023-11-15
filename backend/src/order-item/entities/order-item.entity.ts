import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Order, order => order.orderItem)
   order: Order;

  @ManyToOne(() => Product, product => product.orderItem)
  product: Product;
}