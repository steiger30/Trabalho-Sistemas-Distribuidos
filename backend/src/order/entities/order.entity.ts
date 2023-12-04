import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./order-item.entity";


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

  @Column({ generated: 'increment' })
  numPedido: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.FEITO_PEDIDO  })
  status: OrderStatus;

  @Column({ nullable: false, type: 'int', unsigned: true})
  price: number;

  @Column({ nullable: true, type: 'varchar', length: 120 })
  discription: string;

  @CreateDateColumn()
  createdAt: Date;
  
  @ManyToMany(() => OrderItem, orderItem => orderItem.order)
  orderItem: OrderItem[]

}
