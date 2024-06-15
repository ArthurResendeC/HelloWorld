import ItemGrid from "../components/ItemGrid"

export default function AllItems() {
    return (
        <section className="p-4">
            <article className="grid grid-cols-11 gap-4 mb-4 bg-neutral-800">
                <div className="col-span-3 p-2 ">ID</div>
                <div className="col-span-2 p-2 ">Nome</div>
                <div className="col-span-2 p-2">Em estoque</div>
                <div className="col-span-2 p-2">Categoria</div>
                <div className="col-span-2 p-2 ">Ações</div>
            </article>
            <ItemGrid id="id" categoria="Categoria tal" emEstoque={25} nome="Produtox"/>
            <ItemGrid id="id" categoria="Categoria tal" emEstoque={235} nome="Produtoy"/>
            <ItemGrid id="id" categoria="Categoria tal" emEstoque={24} nome="Produtoz"/>
            <ItemGrid id="id" categoria="Categoria tal" emEstoque={12} nome="Produtoaa"/>
        </section>
    )
}