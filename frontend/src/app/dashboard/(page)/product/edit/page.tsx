"use client";
import { useSelector } from "react-redux";
import C_FormProduct from "../../../components/FormProduct";
import { RootState } from '@/store';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function NewProduct() {
  const producto = useSelector((state: RootState) => state.product);
  const router = useRouter();
  useEffect(() => {
    if (producto.id === '') {
      router.push("/dashboard/product")
    }
    console.log(producto)
  }, [producto, router])

  return (
    <>
      {producto.id != "" ?
       ( <C_FormProduct dataEdit={producto} />)
        : ""
    }
    </>
  )
}