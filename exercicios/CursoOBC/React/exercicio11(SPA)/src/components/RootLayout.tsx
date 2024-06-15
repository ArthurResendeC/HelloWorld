import { Outlet } from "react-router-dom";
import NavHeader from "./NavHeader";

export default function RootLayout(){
    return(
        <div className="h-full bg-neutral-800 text-white">
            <NavHeader />
            <main className="h-screen w-full p-2">
                <p>Esse é o layout padrão da nossa página!</p>
                <hr className="border border-white"/>
                <Outlet/>
            </main>
            <hr className="border border-white"/>
            <footer className="ps-2 pb-2">
                <p>Feito com React Router DOM</p>
            </footer>
        </div>
    )
}