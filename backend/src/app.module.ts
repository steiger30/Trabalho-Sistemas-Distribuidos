import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { CategoryModule } from './category/category.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ ProductModule, OrderModule, OrderItemModule, CategoryModule, AdminModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
