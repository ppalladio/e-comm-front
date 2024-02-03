import getBillboard from '@/actions/getBillboard';
import Billboard from '@/components/Billboard';
import Container from '@/components/ui/Container';
export const revalidation = 0
export default async function Home({}: {}) {
	//> get the id of billboard from billboard page
    const billboard = await getBillboard(
        '077a2e28-174c-47a3-9b2d-b89b060fd4af',
    );
	console.log(billboard)
    return (
        <Container>
            <section className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </section>
        </Container>
    );
}
