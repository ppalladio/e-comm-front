'use client';
import type { Billboard } from '@/lib/types';
import Link from 'next/link';
interface BillboardProps {
    data: Billboard;
}
const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
                className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
            >
                <div className="relative h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="absolute bottom-5 right-5 flex flex-col items-end  text-purple-100  max-w-xs ">
                        {/* {data?.label} */}
                        <span>
                            Concept: {" "}
                            <Link href={'https://yuxuanize.vercel.app/'} scroll={false} target='_blank'>
                                Yuxuan Peng
                            </Link>
                        </span>
                        <span>
                            Art:{' '}
                            <Link
                                className="underline"
                                target="_blank"
                                href={'https://www.instagram.com/cesar_marcen/'}
                            >
                                César Marcén
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Billboard;
