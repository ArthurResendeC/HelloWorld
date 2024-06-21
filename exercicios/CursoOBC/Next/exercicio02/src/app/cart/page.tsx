'use client'

import CartTable from "@/components/CartTable"
import CartTotal from "@/components/CartTotal"
import { useCart } from "@/hooks/useCart"
import Link from "next/link"

export default function () {

    const { cart } = useCart()

    return (
        <section className="">
            {cart.length > 0 ?
                <section className="p-8">
                    <h2 className="text-3xl font-semibold px-8 pb-2">Carrinho</h2>
                    <CartTable />
                    <CartTotal />
                </section>
                :
                <div className='container h-screen flex flex-col gap-8 items-center justify-center'>
                    <h2 className='text-3xl font-semibold'>Parece que não há produtos em seu carrinho...</h2>
                    <Link href='/products'>
                        <button
                            className='rounded-lg font-bold p-8 bg-green-500 hover:bg-green-600 text-white text-xl'
                        >
                            confira nossa página de produtos!
                        </button>
                    </Link>
                </div>
            }
        </section>
    )
}
