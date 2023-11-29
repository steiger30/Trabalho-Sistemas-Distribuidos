// app/providers.tsx
'use client'
import { AuthCookieService } from '@/shared/services/auth-cookie.service';
import { store } from '@/store';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react';
import { Provider } from "react-redux";
export function Providers({
  children
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AuthCookieService.verifyAuthCookie();
  });
  return (
    <Provider store={store}>
      <CacheProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </Provider>
  )
}