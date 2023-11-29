import { StoreAuthorizationProvider } from "./authorization-provider.service";

export class ApiService {
  private readonly baseUrl: string;

  constructor(private authorizationProvider: StoreAuthorizationProvider) {
    this.baseUrl = process.env.API_URL!;
  }

  async post(url: string, data: any): Promise<Response> {

    const datas = JSON.stringify(data);
    const token = this.authorizationProvider.getToken();

    return await fetch(`${this.baseUrl + url}`, {
      method: 'POST',
      body: datas,
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    });
  }

  async patch(url: string, data: any): Promise<Response> {

    const datas = JSON.stringify(data);
    const token = this.authorizationProvider.getToken();

    return await fetch(`${this.baseUrl + url}`, {
      method: 'PATCH',
      body: datas,
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    });
  }


  async getPagination(url: string): Promise<Response | any> {

    let token = this.authorizationProvider.getToken();
    if (token) {
      let response = await fetch(`${this.baseUrl + url}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        }
      });

      return await response.json()
    }
    return null
  }

  async delete(url: string): Promise<Response | any> {

    let token = this.authorizationProvider.getToken();
    if (token) {
      let response = await fetch(`${this.baseUrl + url}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        }
      });

      return await response.json()
    }
    return null
  }
}