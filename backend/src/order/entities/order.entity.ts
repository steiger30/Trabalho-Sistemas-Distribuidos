import { CreateOrderDto } from "../dto/create-order.dto";

export class Order {
  constructor(readonly orderData: CreateOrderDto){
    this.validateProperties(orderData)
  }
  private validateProperties(orderData: CreateOrderDto){

  }
}
