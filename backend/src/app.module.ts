import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { Order } from './order/entities/order.entity';
import { OrderItem } from './order/entities/order-item.entity';
import { Product } from './product/entities/product.entity';
import { Admin } from './admin/entities/admin.entity';


@Module({
  imports: [

    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [Admin, Order, OrderItem, Product],
      synchronize: true,
    }),
    ProductModule,
    OrderModule,
    
    AdminModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
