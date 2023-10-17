import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { OwnerControlModule } from './owner-control/owner-control.module';

@Module({
  imports: [CustomerModule, OwnerControlModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
