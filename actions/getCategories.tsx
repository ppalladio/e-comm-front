import { Category } from '@/lib/types';
import axios from 'axios';
//! next_public_api_url should be the url fom setting page and store in .env file
let URL = '';
const OFFICIAL_URL = process.env.API_URL;

if (process.env.NODE_ENV !== 'production') {
    URL = `http://localhost:3000/api/${process.env.NEXT_PUBLIC_API_TOEKN}/categories`;
} else {
    URL = `${OFFICIAL_URL}/api/${process.env.NEXT_PUBLIC_API_TOEKN}/categories`;
}

const getCategories = async (): Promise<Category[]> => {
    const res = await axios.get(URL);
    return res.data;
};

export default getCategories;
