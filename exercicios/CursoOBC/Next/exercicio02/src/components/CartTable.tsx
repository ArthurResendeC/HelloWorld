import React, { useEffect, useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { ProductType } from '@/services/products';
import Image from 'next/image';

interface CartEntry {
    product: ProductType,
    quantity: number
}

export const CartTableRow = (props: {
    entry: CartEntry
}) => {
    const { addProduct, removeProduct } = useCart();

    return (
        <article className='grid grid-cols-7 gap-4 border-b py-4 items-center'>
            <div className='col-span-2 flex items-center'>
                <Image src={props.entry.product.imageUrl} alt={props.entry.product.name} width={100} height={100} />
                <p>{props.entry.product.name}</p>
            </div>
            <p className='text-center'>R$ {props.entry.product.price}</p>
            <p className='text-center'>{props.entry.quantity}</p>
            <p className='text-center'>R$ {props.entry.product.price * props.entry.quantity}</p>
            <div className='flex items-center justify-center gap-2'>
                <button
                    className='py-1 px-3 font-bold bg-green-600 hover:bg-green-700 text-white rounded-lg'
                    onClick={() => addProduct(props.entry.product)}
                >
                    +
                </button>
                <button
                    className='py-1 px-3 font-bold bg-red-600 hover:bg-red-700 text-white rounded-lg'
                    onClick={() => removeProduct(props.entry.product.id)}
                >
                    -
                </button>
            </div>
        </article>
    );
};

import Link from 'next/link';

interface CartEntry {
    product: ProductType,
    quantity: number
}

export default function CartTable() {
    const [cartEntries, setCartEntries] = useState<CartEntry[]>([]);
    const { cart } = useCart();

    useEffect(() => {
        const entriesList = cart.reduce((list, product) => {
            const entryIndex = list.findIndex(entry => entry.product.id === product.id);
            if (entryIndex === -1) {
                return [
                    ...list,
                    {
                        product,
                        quantity: 1
                    }
                ];
            }
            list[entryIndex].quantity++;
            return list;
        }, [] as CartEntry[]);
        entriesList.sort((a, b) => a.product.id - b.product.id);
        setCartEntries(entriesList);
    }, [cart]);

    return (
        <section className='container mx-auto'>
            <div className='grid grid-cols-7 gap-4 border-b-2 pb-2 ps-2 pt-2 font-bold'>
                <h3 className='col-span-2'>Produto</h3>
                <h3 className='text-center'>Preço</h3>
                <h3 className='text-center'>Qtd.</h3>
                <h3 className='text-center'>Total</h3>
                <h3 className='text-center'>Ações</h3>
            </div>
            <div>
                {cartEntries.map(entry => <CartTableRow entry={entry} key={entry.product.id} />)}
            </div>
        </section>
    );
}
