import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const Home = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div>
            <h1>Página inicial</h1>
            <p>O tema atual é {theme}</p>
            <p>Clique <button onClick={toggleTheme}>aqui</button> para mudar o tema!</p>
        </div>
    )
}

export default Home