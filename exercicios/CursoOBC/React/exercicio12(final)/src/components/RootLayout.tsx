import { Link, Outlet } from "react-router-dom"

export default function RootLayout() {
    return (
        <section className="font-Montserrat">
            <article className="h-screen">
                <div id="header" className="flex justify-between p-2">
                    <Link
                        className="font-Poppins uppercase tracking-tighter font-bold"
                        to={'/'}>
                        <h1>React Stock</h1>
                    </Link>
                    <nav className="flex gap-6 font-semibold">
                        <Link className="hover:underline" to={'/'}>Início</Link>
                        <Link className="hover:underline" to={'/Itens'}>Itens</Link>
                    </nav>
                </div>
                <Outlet />
            </article>
            <footer className="p-2 font-semibold">
                <p>Feito com React</p>
            </footer>
        </section>
    )
}