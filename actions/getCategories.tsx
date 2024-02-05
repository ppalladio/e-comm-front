import { Category } from '@/lib/types';
import axios from 'axios';
//! next_public_api_url should be the url fom setting page and store in .env file
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
const getCategories = async (): Promise<Category[]> => {
    const res = await axios.get(URL);
    return res.data;
};

export default getCategories;
