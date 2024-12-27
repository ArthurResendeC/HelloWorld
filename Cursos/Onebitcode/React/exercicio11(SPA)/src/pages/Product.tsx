import { Link, useLoaderData } from "react-router-dom";

interface ProductType{
    id:number;
    name:string;
    description:string;
    price:number
}

export default function Product(){
    
    const product = useLoaderData() as ProductType
    if (product) {
        return (
            <section className="p-2 flex flex-col gap-8">
                <Link to="/products"><button className="p-2 rounded-xl bg-neutral-900 hover:bg-black">Voltar</button></Link>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>R${product.price}</p>
                <button className="bg-neutral-900 hover:bg-black p-2 rounded-xl w-36">Comprar</button>
            </section>
        )
    }
}