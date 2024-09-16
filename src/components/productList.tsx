"use client";

import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { addCart } from "@/app/store/slices/cart";
import { addProduct } from "@/app/store/slices/product";
import React, { useEffect, useState } from "react";

export const ProductList = () => {
  const [name, setName] = useState("");
  const [catagory, setCatagory] = useState("");
  const [qty, setQty] = useState(0);
  const products = useAppSelector((state) => state.productArray);
  const cart = useAppSelector((state) => state.cartArray);
  const dispatch = useAppDispatch();

  console.log("cart:", cart)
  


  return (
    <div>
      <div className="grid grid-cols-4 gap-4 bg-red-300  p-4 w-[85%] mx-auto rounded-2xl">
        <input
          type="text"
          placeholder="name"
          className="p-4 bg-slate-400 text-xs rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="catagory"
          className="p-4 bg-slate-400 text-xs rounded-md"
          value={catagory}
          onChange={(e) => setCatagory(e.target.value)}
        />
        <input
          type="number"
          placeholder="qty"
          className="p-4 bg-slate-400 text-xs rounded-md"
          value={qty}
          onChange={(e: any) => setQty(e.target.value)}
        />
        <button
          onClick={()=>dispatch(addProduct({name:name, catagory:catagory, qty:qty}))}
          className="bg-slate-300"
        >
          Add Item
        </button>
      </div>
      <h1>ProductList</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((item, i) => {
          return (
            <div
              className="w-350 border rounded-3xl bg-slate-400 p-6 m-6"
              key={i}
            >
              <h1>Name : {item.name}</h1>
              <p>Catagory : {item.catagory}</p>
              <p>Qty : {item.qty}</p>
              <button onClick={()=>dispatch(addCart({name: item.name, catagory: item.catagory, qty: item.qty}))} className="bg-lime-300 p-2 rounded-lg mt-2">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
