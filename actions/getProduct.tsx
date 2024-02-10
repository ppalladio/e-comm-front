import { Product } from "@/lib/types";
import axios from "axios";

let URL = '';
if (process.env.NODE_ENV !== 'production') {
    URL = `http://localhost:3000/api/${process.env.NEXT_PUBLIC_API_TOEKN}/products`;
} else {
    URL = `https://yuxuanize-ecomm.vercel.app/api/${process.env.NEXT_PUBLIC_API_TOEKN}/products`;
}

const getProduct = async (id: string): Promise<Product> => {
  const res = await axios.get(`${URL}/${id}`);

  return res.data;
};

export default getProduct;
