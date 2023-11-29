import { PropsTypes } from "../types/props.types";
import { StoreAuthorizationProvider } from "./authorization-provider.service";

export default class ProductDataService {
  private adminId: string;
  private name: string;
  private description: string;
  private price: number;
  private id?: string
  constructor(data: any) {
    const authorizationProvider = new StoreAuthorizationProvider()
    this.adminId = authorizationProvider.getIAdmin();
    this.description = data.description;
    this.price = data.price;
    this.name = data.name;
    if (data.id) this.id = data.id;
  }
}