import { Link, Outlet } from "react-router-dom";

export default function ItemsRoot() {
    return (
        <div>
            <nav className="p-2 flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                    <Link to="/itens" className="hover:-translate-y-0.5 transition-all font-semibold">Todos os itens</Link>
                    <Link to='/itens/criar-item' className="hover:-translate-y-0.5 transition-all font-semibold">Novo item</Link>
                </div>
                <hr className="border border-neutral-400" />
            </nav>
            <Outlet></Outlet>
        </div>

    )
}