import axios from "axios";

interface product {
  id: number;
  name: string;
  price: number;
}

interface products {
  map: any;
  data: product[];
}

export default async function SearchResults() {
  const res = await axios.get("http://localhost:3333/products");

  const products: products = res.data;

  console.log(products);

  return (
    <div>
      <h1>Search Results</h1>
      {products.map((product: product) => {
        return <p key={product.id}>{product.name}</p>;
      })}
    </div>
  );
}
