"use client";

import { useSearch } from "@/context/searchContext";
import { Product } from "@/types/types";
import ProductItem from "./ProductItem";

export default function SearchResults({ products }: { products: Product[] }) {
  const { search } = useSearch();

  const filteredProduct = products.filter((product) => product.name === search);

  return (
    <div>
      <h1>Search Results</h1>
      {filteredProduct.map((product: Product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}
