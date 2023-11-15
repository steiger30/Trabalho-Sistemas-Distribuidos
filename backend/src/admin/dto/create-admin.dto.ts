import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { MessagesHelper } from "src/shared/helpers/messages.helper";
import { RegexHelper } from "src/shared/helpers/regex.helper";


export class CreateAdminDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  

  @IsNotEmpty()
  @Matches(RegexHelper.password, {message: MessagesHelper.PASSWORD_VALID})
  password: string;
}
