import getBillboard from '@/actions/getBillboard';
import getProducts from '@/actions/getProducts';
import Billboard from '@/components/Billboard';
import Container from '@/components/ui/Container';
import ProductList from '@/components/ui/ProductList';
export const dynamic = 'force-dynamic';
export default async function Home() {
    //> get the id of billboard from billboard page
    const billboard = await getBillboard(
        '45617c7f-5067-4b03-9592-ebbcad4c9c97',
    );
    const products = await getProducts({ isFeatured: true });
    // console.log(billboard);
    // console.log(products)
    return (
        <Container>
            <section className="space-y-10 pb-10">
                <Billboard data={billboard} />{' '}
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </section>
        </Container>
    );
}
