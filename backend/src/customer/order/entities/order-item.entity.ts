import ValidatorRules from "src/shared/validators/validator-rules";
import { CreateOrderItemDto } from "../dto/create-order-item.dto";

export class OrderItem {
  constructor(readonly orderItemData: CreateOrderItemDto) {
    this.validateProperties(orderItemData);
   }

   validateProperties(orderItemData: CreateOrderItemDto){
    const {quantity, discription, customerId, discount, orderId, productId} = orderItemData
    ValidatorRules.values(quantity, "quantity").required().number();
    ValidatorRules.values(discription, "discription").string();
    ValidatorRules.values(customerId, "customerId").required().number();
    ValidatorRules.values(discount, "discount").required().number();
    ValidatorRules.values(orderId, "orderId").required().string();
    ValidatorRules.values(productId, "productId").required().string();

   }
}
