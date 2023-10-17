import ValidatorRules from "src/shared/validators/validator-rules";
import { CreateCustomerManagementDto } from "../dto/create-customer-management.dto";

export class CustomerManagement {
  constructor(readonly customerData: CreateCustomerManagementDto) {
    this.validateProperties(customerData);
  }
  private validateProperties(customerData: CreateCustomerManagementDto) {
    const { fullName, email, password, phone } = customerData

    ValidatorRules.values(fullName, "nome completo").required().string();
    ValidatorRules.values(email, "email").required().string();
    ValidatorRules.values(password, "PASSWORD").required().string().minLength(8);
    ValidatorRules.values(phone, "telefone").required().string().maxLength(15).minLength(15);
  }
}
