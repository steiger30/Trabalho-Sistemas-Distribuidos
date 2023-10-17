import ValidatorRules from "src/shared/validators/validator-rules";
import { CreateOrderDto } from "../dto/create-order.dto";

export class Order {
  constructor(readonly orderData: CreateOrderDto) {
    this.validateProperties(orderData);
  }

  validateProperties(orderData: CreateOrderDto) {
    const { discription, price, customerId, discount } = orderData
    ValidatorRules.values(discription, "discription").string();
    ValidatorRules.values(price, "price").required().number();
    ValidatorRules.values(customerId, "customerId").required().number();
    ValidatorRules.values(discount, "discount").required().number();

  }
}