'use client'
import { useCart } from "@/hooks/useCart"
import { useToast } from "./ui/use-toast"
import { ProductType } from "@/services/products"

interface CartButtonProps{
    product:ProductType
}

export default function CartButton(props: CartButtonProps ) {
    const { toast } = useToast()
    const { addProduct } = useCart()

    function handleClick() {
        addProduct(props.product)
        toast({
            description: 'Produto adicionado ao carrinho com sucesso!',
            variant: 'custom'
        })
    }
    return (
        <button
            className='bg-neutral-800 rounded-lg hover:bg-neutral-900 transition-all text-white p-4 w-full'
            onClick={handleClick}
        >
            Adicionar ao carrinho
        </button>
    )
}