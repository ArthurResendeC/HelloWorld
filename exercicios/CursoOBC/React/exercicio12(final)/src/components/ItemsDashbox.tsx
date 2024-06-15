interface ItemsDashboxProps{
    textContent:string;
    addon?:string;
    actions:string
}

export default function ItemsDashbox(props:ItemsDashboxProps){
    return(
        <section className="flex flex-col w-full">    
            <div className="flex justify-between items-center rounded-sm p-2 drop-shadow bg-neutral-800">
                <p className="ms-2">{props.textContent}</p>
                <p>{props.addon}</p>
                <p className="me-12">Ações:</p>
            </div>
            <ul className="flex justify-between me-10 p-4">
                <li>Conteúdo teste</li>
                <button className="p-2 rounded-md bg-white text-black hover:bg-gray-500">{props.actions}</button>
            </ul>
        </section>
    )
}