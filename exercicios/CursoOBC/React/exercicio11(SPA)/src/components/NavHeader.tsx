import { Link } from "react-router-dom";

export default function NavHeader() {
    return (
        <header className="bg-neutral-800 w-full text-white p-2">
            <nav className="flex gap-8">
                <Link to="/">Início</Link>
                <Link to="/products">Produtos</Link>
                <Link to="/cart">Carrinho</Link>
            </nav>
        </header>
    )
}