"use client"
import CartList from "@/components/cartList";
import { ProductList } from "@/components/productList";
import Image from "next/image";
import { useGetAllPostQuery, useGetPostByIdQuery } from "./store/slices/postApi";

export default function Home() {

  // const data =  useGetAllPostQuery("")
  const data =  useGetPostByIdQuery(6)
  console.log("api data is ",data)

  return (
   <div className="text-center">
    Redux
    {/* <ProductList/>
    <h1 className="text-red-500 ">Cart List</h1>
    <CartList/> */}
    </div>
  );
}
