'use client';
import CartButton from "@/components/CartButton";
import { fetchProduct, ProductType } from "@/services/products";
import Image from "next/image";
g
export default async function ProductPage({ params }: { params: { id: number } }) {

    const productFound: ProductType = await fetchProduct(params.id)
    
    return (
        <div className='flex items-center gap-6 h-screen'>
            <Image src={productFound.imageUrl} alt={productFound.name} width={600} height={800} />
            <div className="flex flex-col gap-12">
                <div className='pr-12 flex-col flex gap-4'>
                    <h1 className="font-semibold">{productFound.name}</h1>
                    <p className='text-justify'>{productFound.description}</p>
                </div>
                <div>
                    <p className='mb-2'>Em estoque: {productFound.inStock}</p>
                    <CartButton/>
                </div>
            </div>
        </div>
    )
}