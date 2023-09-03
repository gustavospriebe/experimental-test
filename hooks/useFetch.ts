import { Product } from "@/types/types";
import axios from "axios";


export default async function useData() {
  const res = await axios.get<Product[]>("http://localhost:3333/products");

  return res.data;
}
