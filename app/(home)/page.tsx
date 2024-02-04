import getBillboard from '@/actions/getBillboard';
import Billboard from '@/components/Billboard';
import Container from '@/components/ui/Container';
export const revalidation = 0;
export default async function Home({}: {}) {
    //> get the id of billboard from billboard page
    const billboard = await getBillboard(
        '1a2a33bb-881f-424a-8ae4-7de79bedf33b',
    );

    console.log(billboard);
    return (
        <Container>
            <section className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </section>
        </Container>
    );
}
