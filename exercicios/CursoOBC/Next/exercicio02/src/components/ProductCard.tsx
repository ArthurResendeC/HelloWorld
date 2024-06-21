import { ProductType } from '@/services/products'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CartButton from './CartButton'
type ProductCardProps = {
    product: ProductType
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    
    const { id, name, imageUrl, price } = product

    return (
        <div className='border border-neutral-700 rounded-2xl p-6'>
            <Link className='p-2' href={`/products/${id}`}>
                <Image src={imageUrl} alt='Product' height={200} width={200} />
            </Link>

            <div className='text-xl mb-6'>
                <Link href={`/products/${id}`}>
                    <h5 className='font-semibold'>
                        {name}
                    </h5>
                </Link>
                <p>R${price}</p>
            </div>
            <CartButton product={product}/>
        </div>
    )
}
