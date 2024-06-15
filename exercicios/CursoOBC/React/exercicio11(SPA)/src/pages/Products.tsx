import { Link } from 'react-router-dom'
import products from '../database.json'

export default function Products() {
    return (
        <section className='h-full flex flex-col gap-2 p-8'>
            <h2>Todos os produtos</h2>
            <p>Confira todas as nossas ofertas.</p>
            <section>
                <h3>Processadores</h3>
                <ul>
                    {products.map((product) => (
                        <li className='p-2' key={product.id}>
                            <h4>{product.name}</h4>
                            <p>R${product.price}</p>
                            <Link to={`/products/${product.id}`}>
                            <button className='p-2 bg-neutral-900 rounded-xl hover:bg-black me-8 pt-2 w-24'>Ver</button>
                            </Link>
                            <button className='p-2 bg-neutral-900 rounded-xl hover:bg-black w-24'>Compras</button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}