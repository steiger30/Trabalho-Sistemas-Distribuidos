import C_Button from "@/components/Button";
import { formatCurrencyBRL } from "@/shared/types/format-currency";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
type Producto = {
  name: string;
  productId: string;
  price: number;
  description: string;
  quantity: number,
  totalPrice: number

}
interface PropsTypes {
  data: Producto,
  active: boolean
  addProductOrders: any,
  onClose: any
}
const C_ModalOrder = ({ data, active, onClose, addProductOrders }: PropsTypes) => {
  const [quantityProduct, setQuantityProduct] = useState(data.quantity);
  const initialRef = useRef(null);
  const finalRef = useRef(null);


  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={active}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className='flex'>{data.name}
          <Text ml='20px'>{formatCurrencyBRL(data.price)}</Text></ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Text>{data.description}</Text>
        </ModalBody>

        <ModalFooter justifyContent="space-between">
          <Flex alignItems='center'>
            <IconButton
              isDisabled={quantityProduct <= 1}
              onClick={() => { setQuantityProduct(quantityProduct - 1) }}
              size='xs'
              colorScheme="blue"
              variant="outline"
              aria-label='Search database'
              icon={<MinusIcon />}
            />
            <span className='px-1 w-16 text-center text-xl'>
              {quantityProduct}
            </span>
            <IconButton
              onClick={() => setQuantityProduct(quantityProduct + 1)}
              colorScheme="blue"
              size='xs'
              variant="outline"
              aria-label='Search database'
              icon={<AddIcon />} />
            <Text ml='10px'>{formatCurrencyBRL(quantityProduct * data.price)}</Text>
          </Flex>
          <C_Button colorScheme='blue' onClick={() => { 
            data.quantity = quantityProduct,
            data.totalPrice = quantityProduct * data.price
            setQuantityProduct(1), 
            addProductOrders(data) }} isDisabled={quantityProduct <= 0}>Adicionar</C_Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default C_ModalOrder;