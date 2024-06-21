import CartButton from "@/components/CartButton";
import { fetchProduct, ProductType } from "@/services/products";
import Image from "next/image";
export default async function ProductPage({ params }: { params: { id: number } }) {

    const productFound: ProductType = await fetchProduct(params.id)
    
    return (
        <div className='flex items-center gap-6 h-screen pr-12'>
            <Image src={productFound.imageUrl} alt={productFound.name} width={600} height={600} />
            <div className="flex flex-col gap-12 h-full justify-center">
                <div className='flex-col flex gap-4'>
                    <div className='flex flex-col gap-2'>
                        <h1 className="font-semibold text-5xl">{productFound.name}</h1>
                        <h2 className="text-neutral-600 font-semibold text-3xl">R$ {productFound.price}</h2>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h2 className="text-xl">Descrição:</h2>
                        <p className='text-justify text-lg'>{productFound.description}</p>
                    </div>
                </div>
                <div className="w-1/3">
                    <p className='mb-2 text-neutral-400'>Em estoque: {productFound.inStock}</p>
                    <CartButton product={productFound}/>
                </div>
            </div>
        </div>
    )
}