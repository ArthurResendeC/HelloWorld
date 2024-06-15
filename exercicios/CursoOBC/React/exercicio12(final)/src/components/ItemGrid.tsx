interface ItemGridProps{
    id:string;
    nome:string;
    emEstoque:number;
    categoria:string;
}

export default function ItemGrid(props:ItemGridProps){
    return(
        <article className="grid grid-cols-11 gap-4 mb-2">
                <div className="col-span-3 p-2">{props.id}</div>
                <div className="col-span-2 p-2">{props.nome}</div>
                <div className="col-span-2 p-2">{props.emEstoque}</div>
                <div className="col-span-2 p-2">{props.categoria}</div>
                <div className="col-span-2 p-2">
                    <button className="p-2 bg-teal-800 hover:bg-teal-900 rounded-lg min-w-16 transition-all">Ver</button>
                    <button className="p-2 bg-red-900 hover:bg-red-950 transition-all rounded-lg min-w-16 ms-12">Deletar</button>
                </div>
            </article>
    )
}