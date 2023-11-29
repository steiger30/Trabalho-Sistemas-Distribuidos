import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { DateUtil } from "../util/date-util";
import { jwtDecode } from "jwt-decode";
import { JwtPayloadType } from "../types/jwt-payload.type";
import { store } from "@/store";
import { login } from "@/store/slices/auth.slice";

export class AuthCookieService {

  public static createAccessTokenCookie(
    accessToken: string,
    expiresInDays: number
  ){
    setCookie("ACCESS_TOKEN", JSON.stringify({ accessToken, expiresInDays }),{
      expires: DateUtil.addDaysToCurrentDate(expiresInDays),
    });
  }

  public static verifyAuthCookie() {
    const accessTokenCookie = this.retrieveAccessTokenCookie();

    if (accessTokenCookie) {
      const { accessToken, expiresInDays } = JSON.parse(accessTokenCookie);
      const { email,sub } = jwtDecode<JwtPayloadType>(accessToken);

      store.dispatch(
        login({
          accessToken: accessToken,
          email,
          expiringDate:
            DateUtil.addDaysToCurrentDate(expiresInDays).toISOString(),
          id: sub,
        })
      );
    }
  }

  private static retrieveAccessTokenCookie() {
    return getCookie("ACCESS_TOKEN");
  }

}