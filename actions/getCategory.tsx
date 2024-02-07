import { Category } from "@/lib/types";
import axios from "axios";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await axios.get(`${URL}/${id}`);
console.log(res.data)
  return res.data;
};

export default getCategory;
