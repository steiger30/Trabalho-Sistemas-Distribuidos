'use client'
import { useEffect, useState } from 'react'
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  StackDivider,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'
import AsyncSelect from 'react-select/async';
import { ApiFactory } from '@/shared/factory/api-cliente.factory'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import ContainerArticle from '../../components/ContainerArticle';
import { OrderSchema } from '@/shared/schemas/order.schema';
import { formatCurrencyBRL } from '@/shared/types/format-currency';
import { Option, OrderSelect, Producto } from './types';
import C_ModalOrder from '../../components/ModalOrder';
import { useRouter } from 'next/navigation';


const Form1 = () => {
  const toast = useToast();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPriceOrder, settotalPiceOrder] = useState(0);
  const [orderSelect, setOrderSelect] = useState<{
    productId: string;
    description: string;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }>();

  const [listOrder, setListOrder] = useState<{
    productId: string;
    description: string;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }[]>([]);

  useEffect(() => {
    if(listOrder.length > 0){

      sumPriceOrder()
    }
  }, [listOrder]);

  const { reset, handleSubmit, register, formState: { errors }, } = useForm({
    resolver: yupResolver(OrderSchema),

  });

  const getAllProduct = async (inputValue: string): Promise<Option[]> => {
    try {
      let response = await ApiFactory().getPagination(`product?query=${inputValue}&page=1`);
      if (response != null) {

        const options = response.items.map((producto: Producto): Option => ({
          value: producto.id,
          label: producto.name,
          description: producto.description,
          price: producto.price
        }));
        return options;
      }
      return [];
    } catch (error) {
      console.error("Erro ao obter produtos:", error);
      return [];
    }
  };

  const setValueForm = (selectedOption: any) => {
    setOrderSelect({
      name: selectedOption.label,
      description: selectedOption.description,
      productId: selectedOption.value,
      price: selectedOption.price,
      totalPrice: selectedOption.totalPrice,
      quantity: 1
    })
    openModal();
  }

  const addProductOrders = (data: OrderSelect) => {
    setListOrder((prevList: any) => [...prevList, data]);
    console.log(data);
    closeModal();
    setOrderSelect({
      name: '',
      description: '',
      productId: '',
      price: 0,
      totalPrice: 0,
      quantity: 1
    })
  }

  const removeOrder = (produRemove: OrderSelect) => {

    let index = listOrder.findIndex(item => item.productId === produRemove.productId || item.quantity === produRemove.quantity);

    if (index !== -1) {
      const newListOrder = [...listOrder];

      newListOrder.splice(index, 1);

      setListOrder(newListOrder);
    }
  }


  const onSubmit = async (data: any) => {
    console.log('Dados do primeiro formulário:', data);
    const { nameCustomer, description } = data
    try {
      const response = await ApiFactory().post('order', { nameCustomer: nameCustomer, description: description, items: listOrder })
      isToast('success', "Pedido feito com sucesso");
      console.log(response)
      setListOrder([])
      reset()
      router.push('/dashboard');
    } catch (error) {
      isToast('error', "Erro ao fazer Pedido");
      console.log(error);
    }

  };
  function isToast(isStatus: any, message: string) {
    toast({ status: isStatus, description: message, position: 'top-right', duration: 1000, isClosable: false, });
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function sumPriceOrder() {
    const totalPriceArray = listOrder.map(order => order.totalPrice);

    console.log(totalPriceArray)
    const totalPrice = totalPriceArray.reduce((acc, item) => {
      return acc + item;
    })
    settotalPiceOrder(totalPrice);
  }

  return (
    <ContainerArticle>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mt="20px" mb="50px">
        Novo Pedido
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap w-full items-start justify-between'>
        <Box className='flex flex-col gap-5 w-full md:w-1/3'>
          <FormControl isInvalid={!!errors.nameCustomer?.message}>
            <FormLabel htmlFor="nameCustomer" fontWeight={'normal'}>
              Nome Cliente
            </FormLabel>
            <Input  {...register("nameCustomer")} />
            {errors.nameCustomer?.message ? (
              <FormErrorMessage>{errors.nameCustomer?.message}</FormErrorMessage>
            ) : ''}
          </FormControl>
          <FormControl isInvalid={!!errors.description?.message}>
            <FormLabel htmlFor="email" fontWeight={'normal'}>
              Descrição
            </FormLabel>
            <Input  {...register("description")} />
            {errors.description?.message ? (
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            ) : ''}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email" fontWeight={'normal'}>
              Descrição
            </FormLabel>
            <AsyncSelect
              cacheOptions
              onChange={(selectedOption) => {
                setValueForm(selectedOption);

              }}
              loadOptions={(inputValue: any, callback: any) =>
                getAllProduct(inputValue)}
            />
          </FormControl>
          {
            orderSelect ?
              (
                <C_ModalOrder onClose={closeModal} active={isModalOpen} addProductOrders={addProductOrders} data={orderSelect}></C_ModalOrder>
              ) : ""
          }
        </Box>


        {
          listOrder.length > 0 ?
            (
              <Card size={"md"} h={445} className='w-full mt-8 md:w-420 md:mt-0'>
                <CardHeader>
                  <Heading size='md'>Pedidos</Heading>
                </CardHeader>
                <CardBody maxH="270px" overflowY="auto">
                  <Stack divider={<StackDivider />} spacing='4'>
                    {
                      listOrder.map((data) => (
                        <Box key={data.productId}>
                          <div className='flex justify-between items-center pb-2'>
                            <Text fontSize='md'>{data.quantity}x {data.name}</Text>
                            <Text fontSize='md'>{formatCurrencyBRL(data.price * data.quantity)}</Text>
                          </div>
                          <div className='flex items-center  gap-3'>
                            <Button onClick={() => removeOrder(data)} size='sm' colorScheme='red' variant='ghost'>
                              Remover
                            </Button>
                          </div>
                        </Box>
                      ))
                    }
                  </Stack>

                </CardBody>

                <CardFooter className='flex flex-col'>
                  <Text className='flex justify-between'><span className='font-bold'>Total</span><span className='font-bold'>{formatCurrencyBRL(totalPriceOrder)}</span></Text>
                  <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent='flex-end'>
                      <Button
                        type="submit"
                        w="100%"
                        colorScheme="red"
                        variant="solid"
                      >
                        Fazer Pedido
                      </Button>
                    </Flex>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            )
            :
            <Card size={"md"} h={445} className='w-full mt-8 md:w-420 md:mt-0'>
              <CardBody display="flex" alignItems="center" justifyContent='center' >
                <Text>Adicione itens</Text>
              </CardBody>
            </Card>
        }
      </form>


    </ContainerArticle >
  )
}

export default Form1