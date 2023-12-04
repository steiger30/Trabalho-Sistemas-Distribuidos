import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './repositories/order.repository';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './entities/order-item.entity';
import { OrderItemRepository } from './repositories/order-item.ropository';
import { ProductRepository } from 'src/product/repositories/product.repository';
import { Product } from 'src/product/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem, Product]),],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, OrderItemRepository, ProductRepository],
})
export class OrderModule {}
