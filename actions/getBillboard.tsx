import { Billboard } from '@/lib/types';
import axios from 'axios';
let URL = '';
const OFFICIAL_URL = process.env.API_URL
if (process.env.NODE_ENV !== 'production') {
    URL = `http://localhost:3000/api/${process.env.NEXT_PUBLIC_API_TOEKN}/billboards`;
} else {
    URL = `${OFFICIAL_URL}/api/${process.env.NEXT_PUBLIC_API_TOEKN}/billboards`;
}
const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await axios.get(`${URL}/${id}`);
    console.log(res.data);
    return res.data;
};

export default getBillboard;
