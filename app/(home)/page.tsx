import getBillboard from '@/actions/getBillboard';
import getProducts from '@/actions/getProducts';
import Billboard from '@/components/Billboard';
import Container from '@/components/ui/Container';
import ProductList from '@/components/ui/ProductList';
export const revalidation = 0;
export default async function Home({}: {}) {
    //> get the id of billboard from billboard page
    const billboard = await getBillboard(
        '1a2a33bb-881f-424a-8ae4-7de79bedf33b',
    );
    const products = await getProducts({ isFeatured: true });
    console.log(billboard);
	console.log(products)
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
