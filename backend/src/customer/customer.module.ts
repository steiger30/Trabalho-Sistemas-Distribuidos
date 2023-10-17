import { Module } from '@nestjs/common';
import { CustomerManagementModule } from './customer-management/customer-management.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';


@Module({
  imports: [CustomerManagementModule, AuthModule, OrderModule,   ]
})

export class CustomerModule {}
