import { Button, ButtonGroup } from '@chakra-ui/react'



export default function C_Button({children,  ...props}){
  return(
    <Button {...props}>{children}</Button>
  )
}