import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "src/order-item/entities/order-item.entity";

enum OrderStatus {
  FEITO_PEDIDO = 'FEITO_PEDIDO',
  PEDIDO_NA_COZINHA = 'PEDIDO_NA_COZINHA',
  PEDIDO_PRONTO = 'PEDIDO_PRONTO',
  FINALIZADO = 'FINALIZADO',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 64 })
  nameCustomer: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.FEITO_PEDIDO, })
  status: OrderStatus;

  @Column({ nullable: false, type: 'int', unsigned: true, width: 3 })
  price: number;

  @Column({ nullable: false, type: 'varchar', length: 64 })
  codigoOrder: string;

  @Column({ nullable: true, type: 'varchar', length: 120 })
  discription: string;

  @CreateDateColumn()
  createdAt: Date;
  
  @ManyToMany(() => OrderItem, orderItem => orderItem.order)
  orderItem: OrderItem[]


}
