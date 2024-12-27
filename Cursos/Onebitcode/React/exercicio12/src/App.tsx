import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";

export default function App(){

  const {theme} = useContext(ThemeContext)

  return(
    <div className={`h-screen p-2 flex flex-col gap-2 ${theme=== 'dark' ? "dark-theme" : ""}`}>
      <NavBar/>
      <Outlet/>
    </div>
  )
}