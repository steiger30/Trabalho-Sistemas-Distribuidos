import { ApiService } from "../services/api-client.service";
import { StoreAuthorizationProvider } from "../services/authorization-provider.service";

export const ApiFactory = () => {
    const authorizationProvider = new StoreAuthorizationProvider();
    const apiService =  new ApiService(authorizationProvider);
    return apiService
}