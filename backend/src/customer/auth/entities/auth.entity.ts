import ValidatorRules from "src/shared/validators/validator-rules";
import { CreateAuthDto } from "../dto/create-auth.dto";

export class Auth {
  constructor(readonly authData: CreateAuthDto){
    this.validateProperties(authData);
  }
  
  validateProperties(authData: CreateAuthDto){
    const {email, password} = authData
    ValidatorRules.values(email, "email").required().string();
    ValidatorRules.values(password, "PASSWORD").required().string().minLength(8);
  }
}
