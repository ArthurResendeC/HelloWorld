import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <nav className='flex justify-between py-6 px-12 bg-neutral-800 text-white'>
      <Link href='/' className='font-semibold hover: transition-all'>Início</Link>
      <div className='flex gap-4 '>
        <Link href='/products' className='hover:text-white text-neutral-400 transition-all'>Produtos</Link>
        <Link href='/cart' className='hover:text-white text-neutral-400 transition-all '>Carrinho</Link>
      </div>
    </nav>
  )
}
