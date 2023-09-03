import { Product } from "@/types/types";

export default function ProductItem({ product }: { product: Product }) {
  return <p>{product.name} - R$ {product.price}</p>;
}
