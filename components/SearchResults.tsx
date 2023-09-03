import axios from "axios";
import ProductItem from "./ProductItem";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default async function SearchResults() {
  const res = await axios.get<Product[]>("http://localhost:3333/products");
  const products = res.data;

  return (
    <div>
      <h1>Search Results</h1>
      {products.map((product: Product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}
