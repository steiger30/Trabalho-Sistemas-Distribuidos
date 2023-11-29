"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { AuthCookieService } from "@/shared/services/auth-cookie.service";
export default function Home() {
  const router = useRouter()

  useEffect(()=>{
    router.push('/login');
    AuthCookieService.verifyAuthCookie();
  });
  return null
}
