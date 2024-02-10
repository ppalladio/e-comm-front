import { Category } from "@/lib/types";
import axios from "axios";

let URL = '';
if (process.env.NODE_ENV !== 'production') {
    URL = `http://localhost:3000/api/${process.env.NEXT_PUBLIC_API_TOEKN}/categories`;
} else {
    URL = `https://yuxuanize-ecomm.vercel.app/api/${process.env.NEXT_PUBLIC_API_TOEKN}/categories`;
}

const getCategory = async (id: string): Promise<Category> => {
  const res = await axios.get(`${URL}/${id}`);
console.log(res.data)
  return res.data;
};

export default getCategory;
