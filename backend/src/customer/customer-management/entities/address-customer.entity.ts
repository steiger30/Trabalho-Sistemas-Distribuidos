import ValidatorRules from "src/shared/validators/validator-rules";
import { CreateAddressCustomerDto } from "../dto/create-address-customer.dto";

export class AddressCustomer{
  constructor(readonly addressData: CreateAddressCustomerDto) {
    this.validateProperties(addressData);
  }

  private validateProperties(addressData: CreateAddressCustomerDto) {
    const { address, city, state, zipCode, country } = addressData
  
    ValidatorRules.values(address, "endereço").required().string();
    ValidatorRules.values(city, "cidade").required().string();
    ValidatorRules.values(state, "estado").required().string().minLength(2).maxLength(2);
    ValidatorRules.values(zipCode, "cep").required().string().minLength(8).maxLength(8);
    ValidatorRules.values(country, "país").required().string();
    

  }
}