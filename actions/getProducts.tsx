import { Product } from '@/lib/types';
import axios from 'axios';
import qs from 'query-string';

let URL = '';
if (process.env.NODE_ENV !== 'production') {
    URL = `http://localhost:3000/api/${process.env.NEXT_PUBLIC_API_TOEKN}/products`;
} else {
    URL = `https://unddd.yuxuanize.com/api/${process.env.NEXT_PUBLIC_API_TOEKN}/products`;
}interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    });

    const res = await axios.get(url);
    return res.data;
};

export default getProducts;
