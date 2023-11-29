'use client'
import C_Button from "@/components/Button";
import C_Header from "./ContainerHeader";
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import { ProductSchema } from "@/shared/schemas/product.schema";
import { yupResolver } from "@hookform/resolvers/yup";

import ContainerArticle from "./ContainerArticle";
import Link from "next/link";
import { ApiFactory } from "@/shared/factory/api-cliente.factory";
import ProductDataService from "@/shared/services/product-data.service";
import { useToast } from '@chakra-ui/react'
import { ProdutctInterface } from "@/shared/types/product.type";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface PropsTypes {
  dataEdit?: ProdutctInterface,
}


export default function C_FormProduct({ dataEdit }: PropsTypes) {
  const toast = useToast();
  const router = useRouter();
  const { register, handleSubmit, setValue, reset, formState: { errors }, } = useForm({
    resolver: yupResolver(ProductSchema),

  });
  useEffect(() => {
    if (dataEdit) {
        
      setValue("name", dataEdit.name);
      setValue("price", dataEdit.price);
      setValue("description", dataEdit.description);
    }
  }, [dataEdit, setValue]);


  const onSubmit = async (data: any) => {
    try {
      let response
      if (dataEdit) {
        response = await ApiFactory().patch(`product/${dataEdit.id}`, data)
      } else {
        const productDataService = new ProductDataService(data)
        response = await ApiFactory().post('product', productDataService)
      }
      if (!response.ok) {
        isToast('error', dataEdit ? "Erro ao editar o produto" : "Erro ao criar o produto")
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      isToast('success', dataEdit ? "Produto editado com sucesso" : "Produto criado com sucesso");
      reset();
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      router.push('/dashboard/product');
    }, 1000);
  };

  function isToast(isStatus: any, message: string) {
    toast({ status: isStatus, description: message, position: 'top-right',duration: 1000 , isClosable: false, });
  }

  return (
    <>
      <C_Header title={dataEdit ? "Editar Pedido" : "Novo Pedido"}>
        <Link href='/dashboard/product/'>
          <C_Button colorScheme='blue'>Voltar</C_Button>
        </Link>
      </C_Header>
      <ContainerArticle>
        <form className='grid grid-row-4 gap-6' onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.name?.message} >
            <FormLabel>Nome do Produto</FormLabel>
            <Input  {...register("name")} />
            {errors.name?.message ? (
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            ) : ''}
          </FormControl>

          <FormControl isInvalid={!!errors.price?.message} >
            <FormLabel>Preço</FormLabel>
            <Input type="number" {...register("price")} />
            {errors.price?.message ? (
              <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
            ) : ''}
          </FormControl>

          <FormControl isInvalid={!!errors.description?.message} >
            <FormLabel>Descrição</FormLabel>
            <Textarea
              {...register("description")}
              size='sm'
            />
            {errors.description?.message ? (
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            ) : ''}
          </FormControl>
          <div>
            <C_Button colorScheme='green' type="submit">Salvar</C_Button>
          </div>
        </form>
      </ContainerArticle>
    </>
  )
}