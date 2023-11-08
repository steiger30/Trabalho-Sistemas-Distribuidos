import ValidatorRules from "src/shared/validators/validator-rules";
import { CreateProductDto } from "../dto/create-product.dto";

export class Product {
  constructor(readonly productData: CreateProductDto){
    this.validateProperties(productData)
  }
  private validateProperties(productData: CreateProductDto){
    const {  name, price,description, image } = productData
    ValidatorRules.values(name,"nome completo").required().string();
    ValidatorRules.values(price,"").required()
    ValidatorRules.values(description,"").string();
    ValidatorRules.values(image,"").required();

  }
}
