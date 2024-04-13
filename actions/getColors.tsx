import { Color } from "@/lib/types";
import axios from "axios";


let URL = '';
if (process.env.NODE_ENV !== 'production') {
    URL = `http://localhost:3000/api/${process.env.NEXT_PUBLIC_API_TOEKN}/colors`;
} else {
    URL = `https://unddd.yuxuanize.com/api/${process.env.NEXT_PUBLIC_API_TOEKN}/colors`;
}

const getColors = async (): Promise<Color[]> => {
  const res = await axios.get(URL);

  return res.data;
};

export default getColors;
