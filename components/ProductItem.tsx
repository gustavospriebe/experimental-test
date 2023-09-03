interface Product {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

export default function ProductItem({ product }: Product) {
  return <p>{product.name}</p>;
}
