import { Billboard } from '@/lib/types';
interface BillboardProps {
    data: Billboard;
}
const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return (
        <div className="p-4 sm:p-6 kg:p-8 rounded-xl overflow-hidden">
            <div
                className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"
                style={{ backgroundImage: `url(${data.imageUrl})` }}
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-xl sm:text-5xl lg:text-6xl sm:max-w-xk max-w-xs">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Billboard;
