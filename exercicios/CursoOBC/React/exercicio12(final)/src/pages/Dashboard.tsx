import Dashbox from "../components/Dashbox";
import ItemsDashbox from "../components/ItemsDashbox";

export default function Dashboard(){

    return(
        <section>
            <article className="flex flex-col p-8">
                <h2 className="text-5xl">Dashboard</h2>
                <div className="flex flex-wrap justify-between">
                    <Dashbox highlightedNumber={0} textContent="Diversidade de itens" />
                    <Dashbox highlightedNumber={0} textContent="Iventário total"/>
                    <Dashbox highlightedNumber={0} textContent="Itens recentes"/>
                    <Dashbox highlightedNumber={0} textContent="Itens acabando"/>
                </div>
            </article>
            <article className="flex w-full justify-between p-8 gap-12">
                <ItemsDashbox textContent="Itens recentes" actions="Ver" />
                <ItemsDashbox textContent="Itens acabando" actions="Ver"/>
            </article>
        </section>
    )
}