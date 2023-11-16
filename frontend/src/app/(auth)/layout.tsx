import { ReactNode } from "react"
import bg from '../../../public/bg-auth/bg.jpg'
import Image from "next/image"
interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <div className="fixed overflow-hidden h-screen w-screen  -z-10">
        <Image
          alt="baground"
          src={bg}
          fill
          placeholder="blur"
          priority
          style={{
            objectFit: 'cover',
            filter: ' blur(4px) brightness(85%)'

          }}
        />
      </div>
      {children}
    </>
  )
}