import { LoginRequestType } from "../types/login-request.type";
import { LoginResponseType } from "../types/login-response.type";

export class AuthService{
  private static BASE_URL = process.env.API_URL;

  public static async login(data: LoginRequestType) {
   return await fetch(`${this.BASE_URL}auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
  }
}