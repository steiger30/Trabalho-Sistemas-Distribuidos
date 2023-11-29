'use client'
import { useEffect, useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  IconButton,
  ScaleFade,
  Collapse,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from '@chakra-ui/react'
import AsyncSelect from 'react-select/async';
import { useToast } from '@chakra-ui/react'
import { ApiFactory } from '@/shared/factory/api-cliente.factory'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductSchema } from '@/shared/schemas/product.schema';
import { OrderSchema } from '@/shared/schemas/order.schema';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import C_Button from '@/components/Button';

const Form1 = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Novo Pedido
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="nameCustomer" fontWeight={'normal'}>
            Nome Cliente
          </FormLabel>
          <Input />
        </FormControl>

      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Descrição
        </FormLabel>
        <Input />
      </FormControl>
    </>
  )
}


type Option = {
  value: string,
  label: string,
  description: string
}

type Produto = {
  id: string,
  name: string,
  description: string
}

const Form2 = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [dataProdcut, setDataProdcut] = useState(false)
  const [quantityProdcut, setQuantityProdcut] = useState(0)


  const { register, handleSubmit, getValues, setValue, reset, formState: { errors }, } = useForm({
    resolver: yupResolver(OrderSchema),

  });

  const getAllProduct = async (inputValue: string): Promise<Option[]> => {
    try {
      let response = await ApiFactory().getPagination(`product?query=${inputValue}&page=1`);
      if (response != null) {
        const options = response.items.map((produto: Produto): Option => ({
          value: produto.id,
          label: produto.name,
          description: produto.description
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
    setDataProdcut(false)
    console.log(selectedOption)
    setValue("name", selectedOption.label);
    setValue("description", selectedOption.description);
    setValue("productId", selectedOption.value);
    setDataProdcut(true)

  }

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Adicionar Produto
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <AsyncSelect
          cacheOptions
          onChange={(selectedOption) => {
            setValueForm(selectedOption);
          }}
          loadOptions={(inputValue: any, callback: any) =>
            getAllProduct(inputValue)}
        />
        {
          dataProdcut ?
            (
              <Collapse startingHeight={20} in={dataProdcut} >
                <Box
                  p='40px'
                  mt='4'
                  bg='blue.100'
                  rounded='md'
                  className='flex gap-2 mt-7 bg-opacity-0'>
                  <FormControl  >
                    <Input style={{ opacity: "inherit", borderColor: "white" }} className='opacity-100' isDisabled {...register('name')} />
                  </FormControl>
                  <Input style={{ opacity: "inherit", borderColor: "white" }} isDisabled {...register('description')} />

                  <div className='flex items-center'>
                    <IconButton
                      colorScheme="blue"
                      variant="outline"
                      aria-label='Search database'
                      icon={<MinusIcon />}

                    />
                    <span className='px-4 text-xl'>
                      {quantityProdcut}
                    </span>
                    <IconButton colorScheme="blue"
                      variant="outline" aria-label='Search database' icon={<AddIcon />} />
                  </div>
                  <div>
                    <C_Button colorScheme='blue'>Adicionar</C_Button>
                  </div>
                </Box>
              </Collapse>

            ) : (
              <div></div>
            )
        }

        <TableContainer className='mt-10'>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Produto</Th>
                <Th isNumeric>Preço</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric><button>oi</button></Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th isNumeric>Total: 100.00</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>

      </FormControl>
    </>
  )
}

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
      </Heading>

    </>
  )
}

export default function Multistep() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 /> :  <Form2 />  }
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 50)
                }}
                isDisabled={step === 1}
                colorScheme="blue"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 2) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 50)
                  }
                }}
                colorScheme="blue"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}