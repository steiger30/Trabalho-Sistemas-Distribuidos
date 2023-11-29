"use client";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

import C_Button from "@/components/Button";
import Link from "next/link";
import C_Header from "../../components/ContainerHeader";
import C_TableProduct from "../../components/TableProduct";
import ContainerArticle from "../../components/ContainerArticle";
import { useEffect, useState } from "react";
import { ApiFactory } from "@/shared/factory/api-cliente.factory";
import ReactPaginate from "react-paginate";
import { Button, Stack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";



export default function Product() {
  const [itemOffset, setItemOffset] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [pageProdcut, setPageProdcut] = useState(null)
  
  useEffect(() => {
    getAllProduct()
  }, [])

  const getAllProduct = async () => {
    try {
      let response = await ApiFactory().getPagination(`product?query&page=${itemOffset}`);

      if (response != null) {
        setTotalPages(response.meta.totalPages)
        setPageProdcut(response.items);
      }
    } catch (error) {
      console.error("Erro ao obter produtos:", error);
    }
  };

  const handleNextClick = () => {
    setItemOffset(itemOffset + 1);
    scrollToTop();
  };

  const handlePreviousClick = () => {
    setItemOffset(itemOffset - 1);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  
  return (
    <div>
      <C_Header title="Produtos">
        <Link href='/dashboard/product/new'>
          <C_Button colorScheme='blue'>Novo Produto</C_Button>
        </Link>
      </C_Header>
      <ContainerArticle>
        {pageProdcut !== null ? (
          <>
            <C_TableProduct allProduct={getAllProduct} data={pageProdcut} />
            <Stack justifyContent='center' alignItems='center' direction='row' spacing={4}>
              <Button onClick={handlePreviousClick} isDisabled={itemOffset === 1} leftIcon={<ChevronLeftIcon />} colorScheme='blue' variant='outline'>
                Anterior
              </Button>
              <p>{itemOffset} de {totalPages}</p>

              <Button onClick={handleNextClick} isDisabled={itemOffset === totalPages} rightIcon={<ChevronRightIcon />} colorScheme='blue' variant='outline'>
                Seguinte
              </Button>
            </Stack>
          </>
        ) : (
          <p>Carregando...</p>
        )}

      </ContainerArticle>

    </div>
  )
}
