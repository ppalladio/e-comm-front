import { Size } from '@/lib/types';
import axios from 'axios';
const OFFICIAL_URL = process.env.API_URL;
let URL = '';
if (process.env.NODE_ENV !== 'production') {
    URL = `http://localhost:3000/api/${process.env.NEXT_PUBLIC_API_TOEKN}/sizes`;
} else {
    URL = `${OFFICIAL_URL}/api/${process.env.NEXT_PUBLIC_API_TOEKN}/sizes`;
}

const getSizes = async (): Promise<Size[]> => {
    const res = await axios.get(URL);

    return res.data;
};

export default getSizes;
