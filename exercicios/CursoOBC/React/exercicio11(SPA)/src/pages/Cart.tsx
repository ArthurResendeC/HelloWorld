
export function Cart(){
    return(
        <section className="bg-neutral-800 text-white h-full w-full p-8 flex flex-col gap-5">
            <h2>Carrinho</h2>
            <p>Os produtos atualmente em seu carrinho.</p>
            <ul>
                <li>2un - Memória RAM DDR4 8gb</li>
                <li>1un - Intel I3 12th gen</li>
                <li>1un - SSD Sata 300gb</li>
                <li>1un - Fonte ATX 600W</li>
                <li>1un - Placa mãe Intel LGA 1700</li>
                <li>1un - Gabinete</li>
            </ul>
            <button className="w-36 p-2 bg-neutral-900 rounded-xl hover:bg-black">Finalizar compra</button>
        </section>
    )
}