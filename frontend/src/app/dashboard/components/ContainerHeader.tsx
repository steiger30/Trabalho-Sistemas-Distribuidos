import { Divider } from '@chakra-ui/react'
interface PropsTypes {
  children: React.ReactNode,
  title: string,

}
export default function C_Header({ children, title }: PropsTypes) {
  return (
    <section className="py-8 max-w-6xl m-auto">
      <div className='flex justify-between items-center py-5'>
        <h1 className='text-primary font-bold text-xl'>{title}</h1>
        {children}
      </div>
      <Divider />
    </section>
  )

}