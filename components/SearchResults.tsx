import useData from "@/hooks/useFetch";
import { Product } from "@/types/types";
import ProductItem from "./ProductItem";

export default async function SearchResults() {
  const products = await useData();

  return (
    <div>
      <h1>Search Results</h1>
      {products.map((product: Product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}
