import { store } from "../../store";

interface AuthorizationProvider {
  getToken(): string;
  getIAdmin(): string
}

export class StoreAuthorizationProvider implements AuthorizationProvider {
  private getSate() {
    const { auth } = store.getState();
    return auth
  }
  getToken(): string {
    const auth = this.getSate();
    return auth.accessToken!;
  }
  getIAdmin(): string {
    const auth = this.getSate();
    return auth.id!
  }
}