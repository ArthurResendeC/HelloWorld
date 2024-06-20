import { useToast } from "./ui/use-toast"

export default function CartButton() {
    const { toast } = useToast()

    function handleClick() {
        toast({
            description: 'Produto adicionado ao carrinho com sucesso!'
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