import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Products {
  data: Product[];
}

export default async function SearchResults() {
  const res = await axios.get<Products>("http://localhost:3333/products");
  const products: Product[] = res.data.data;

  return (
    <div>
      <h1>Search Results</h1>
      {products.map((product: Product) => {
        return <p key={product.id}>{product.name}</p>;
      })}
    </div>
  );
}
