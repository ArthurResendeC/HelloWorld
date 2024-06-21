'use client'
import { useCart } from '@/hooks/useCart'
import React from 'react'

export default function CartTotal() {

    const {cart} = useCart()

  return (
    <div className='container flex justify-end p-2'>
        <div className='flex justify-between w-2/5 border border-neutral-200 me-2  p-3 rounded-lg'>
            <h3 className='font-bold'>Total: </h3>
            <span>R$ {cart.reduce((total,product) => total+ product.price, 0)}</span>
        </div>
    </div>
  )
}
