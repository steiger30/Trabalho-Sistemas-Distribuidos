"use client";
import React, { useEffect, useState } from 'react'
import C_LoginCard from '../../../components/LoginCard'
import C_Button from '@/components/Button'
import { Input, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import { AuthService } from '@/shared/services/auth.service';
import { AuthCookieService } from '@/shared/services/auth-cookie.service';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';


export default function SignupPage() {
  const { userEmail } = useSelector((state: RootState) => state.auth);
  const router = useRouter()
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [erroLogin, setErroLogin] = React.useState(false);
  const [admin, setAdmin] = useState({
    password: "",
    email: ""
  })

  useEffect(() => {
    if (admin.email.length > 0 && admin.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
    if(userEmail){
      router.push('/dashboard')
    }
  }, [admin, userEmail, admin.email.length, admin.password.length, router]);

  const onLogin = async () => {
    setLoading(true);
    try {
      const res = await AuthService.login({ email: admin.email, password: admin.password })

      if (res.status == 401) {
        setErroLogin(true);
        return;
      }
      const responseData = await res.json();
      AuthCookieService.createAccessTokenCookie(responseData.token, responseData.expires_in)
      router.push('/dashboard')

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <C_LoginCard title={"Login"}>
        {erroLogin && (
          <div className="bg-red-600 bg-opacity-20 border-2 border-red-700 py-5 px-5 rounded-lg">
            <p className="text-sm">E-mail ou senha são inválidos</p>
          </div>
        )}
        <Stack spacing={4}>
          <Input
            value={admin.email}
            onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
            errorBorderColor='red.300'
            size='lg'
            width='100%'
            className='border-slate-600'
            placeholder='Email' />
          <Input
            value={admin.password}
            onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            type='password'
            size='lg'
            width='100%'
            className='border-slate-600'
            placeholder='Senha' />
        </Stack>
        <C_Button onClick={onLogin} isDisabled={buttonDisabled} isLoading={loading} colorScheme='blue' size='lg' width='100%'>Entrar</C_Button>
      </C_LoginCard>
    </div>
  )
}
