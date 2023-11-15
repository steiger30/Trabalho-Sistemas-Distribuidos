import { Admin } from "src/admin/entities/admin.entity";
import { Category } from "src/category/entities/category.entity";
import { OrderItem } from "src/order-item/entities/order-item.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column({ nullable: false, type: 'varchar', length: 64 })
  name: string;

  @Column({ nullable: false, type: 'int', unsigned: true, width: 3 })
  price: number;

  @Column({ nullable: true, type: 'varchar', length: 120 })
  description: string;

  @Column({ nullable: true, type: 'varchar', length: 120 })
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Admin, admin => admin.product )
  admin: Admin; 


  @ManyToOne(() => Category, category => category.product )
  category: Category;
  
  @ManyToMany(() => OrderItem, orderItem => orderItem.product)
  orderItem: OrderItem[]; 
}
