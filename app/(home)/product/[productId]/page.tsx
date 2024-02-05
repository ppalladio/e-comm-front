import getProduct from '@/actions/getProduct';
import getProducts from '@/actions/getProducts';
import Info from '@/components/Info';
import Gallery from '@/components/gallery';
import Container from '@/components/ui/Container';
import ProductList from '@/components/ui/ProductList';

interface ProductPageProps {
    params: {
        productId: string;
    };
}
const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
    const product = await getProduct(params.productId);
    console.log(product);
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id,
    });
    console.log(suggestedProducts);
    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8 ">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={product?.images} />{' '}
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-8">
                          <Info data={product}/>
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductList
                        title="You Might Also Like"
                        items={suggestedProducts}
                    />
                </div>
            </Container>
        </div>
    );
};
export default ProductPage;
