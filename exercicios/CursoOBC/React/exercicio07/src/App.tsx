import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import useGameCollection from "./hooks/useGameCollection";

function App() {
  const { games, addGame, removeGame } = useGameCollection()

  return (
    <div className="w-full h-screen bg-neutral-800">
      <h1 className="text-white text-5xl font-bold p-8">Biblioteca de jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="flex pt-4 flex-wrap items-center gap-3 w-full">
        {games.length > 0
          ? games.map((game) =>
          (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />))
          : (
            <h2 className="text-white font-semibold text-2xl m-2 ">Parece que não tem nada aqui ainda, tente adicionar algum jogo! :)</h2>
          )
        }
      </div>
    </div>
  )
}
export default App