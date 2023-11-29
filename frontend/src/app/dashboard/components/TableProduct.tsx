'use client'

import { ApiFactory } from '@/shared/factory/api-cliente.factory';
import { ProdutctInterface } from '@/shared/types/product.type'
import { store } from '@/store';
import { product } from '@/store/slices/product.slice';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Stack,
  Button,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import { useRef, RefObject } from 'react';

interface PropsTypes {
  data: ProdutctInterface[],
  allProduct: Function;
}


export default function C_TableProduct({ data, allProduct }: PropsTypes) {
  const router = useRouter();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<any>(null)
  const selectedProductRef = useRef<ProdutctInterface | null>(null);


  const editProductReducerHandler = (dataProduct: ProdutctInterface) => {
    store.dispatch(product(dataProduct));
    router.push("/dashboard/product/edit")
  }

  const deleteProduct =  async () => {
    if (selectedProductRef.current) {
      const productId = selectedProductRef.current;
      try {
        let response = await ApiFactory().delete(`product/${productId.id}`)
        console.log(response.ok);
        allProduct()
        isToast('success', "Produto excluído com sucesso");
      } catch (error) {
        console.log(error);
      }
     
    }

    function isToast(isStatus: any, message: string) {
      toast({ status: isStatus, description: message, position: 'top-right',duration: 1000 , isClosable: false, });
    }
    onClose(); 
    router.refresh();
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      {
        data.map((product) => (
          <div className='bg-gray-100 mb-4 border-r-8 flex flex-col p-6 j items-start rounded-xl' key={product.id}>

            <div>
              <p className='text-gray-500 text-md font-bold mb-3'>{product.name}</p>
              <p className='text-gray-400 font-semibold text-sm'>Decrição: <span className='text-gray-500'>{product.description}</span></p>
              <p className='text-gray-400 font-semibold text-sm'>Preço: <span className='text-gray-500' >{product.price}</span></p>
            </div>
            <Stack width='100%' pt={12} justifyContent='center' alignItems='center' direction='row' spacing={4}>
              <Button onClick={() => { editProductReducerHandler(product) }} className='bg-inherit' color='gray.600' leftIcon={<EditIcon w={5} h={5} color='gray.600' />} variant='solid'>
                Editar
              </Button>
              <Button onClick={() =>{ onOpen(); selectedProductRef.current = product}} className='bg-inherit' color='red.500' leftIcon={<DeleteIcon w={5} h={5} color='red.500' />} >
                Excluir
              </Button>
            </Stack>
          </div>
        ))
      }

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Deletar Produto
            </AlertDialogHeader>

            <AlertDialogBody>
            Tem certeza? Você não pode desfazer esta ação posteriormente.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancela
              </Button>
              <Button colorScheme='red'onClick={deleteProduct} ml={3}>
                Sim
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>

  )
}