'use client';
import { ShoppingBag } from 'lucide-react';
import Button from './ui/button';
import { useEffect, useState } from 'react';
import useCart from '@/hooks/useCart';
import { useRouter } from 'next/navigation';

const NavbarAction = () => {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const cart = useCart();
    if (!isMounted) {
        return null;
    }
    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button
                className="flex items-center rounded-full bg-black px-4 py-2"
                onClick={() => {
                    router.push('/cart');
                }}
            >
                <ShoppingBag size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
};
export default NavbarAction;
