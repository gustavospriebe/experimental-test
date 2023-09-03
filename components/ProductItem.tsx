'use client'

import { searchContext } from "@/context/searchContext";
import { useContext } from "react";

interface Product {
  product: {
    id: number;
    name: string;
    price: number;
  };
}



export default function ProductItem({ product }: Product) {
  const { search } = useContext(searchContext);



  return <p>{product.name}</p>;
}
