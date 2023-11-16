"use client";
import React, { useEffect, useState } from 'react'
import LoginCard from '../../../components/login-card/index'
import C_Button from '@/components/button/index'
import { Input, Stack } from '@chakra-ui/react'

export default function SignupPage() {
  const [admin, setAdmin] = useState({
    password: "admin@Admin1",
    email: "admin@admin.com"
  })

  useEffect(() => {
    if (admin.email.length > 0 && admin.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [admin]);

  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    setLoading(true);
    console.log(JSON.stringify(admin))
    const response = await fetch("http://localhost:4200/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(admin),
    })
      .then((response) =>  console.log(response))
      .then((data) => console.log(data));
    console.log(response)
    setLoading(false);
  }


  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <LoginCard title={"Login"}>
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
        <C_Button  onClick={onLogin} isDisabled={buttonDisabled} isLoading={loading} colorScheme='blue' size='lg' width='100%'>Entrar</C_Button>
      </LoginCard>
    </div>
  )
}
