import { Size } from '@/lib/types';
import axios from 'axios';
let URL = '';
if (process.env.NODE_ENV !== 'production') {
    URL = `http://localhost:3000/api/${process.env.NEXT_PUBLIC_API_TOEKN}/sizes`;
} else {
    URL = `https://unddd.yuxuanize.com/api/${process.env.NEXT_PUBLIC_API_TOEKN}/sizes`;
}

const getSizes = async (): Promise<Size[]> => {
    const res = await axios.get(URL);

    return res.data;
};

export default getSizes;
