import { useState } from "react";

interface GameProps {
    id: number;
    title: string;
    cover: string;
}

export default function useGameCollection() {
    const [games, setGames] = useState<GameProps[]>(() => {
        const storedGames = localStorage.getItem("obc-game-lib")
        if (!storedGames) return []
        return JSON.parse(storedGames)
    })

    function removeGame(id: number) {
        setGames(state => {
            const newState = state.filter(game => game.id !== id)
            localStorage.setItem("obc-game-lib", JSON.stringify(newState))
            return newState
        })
    }

    function addGame({ title, cover }: { title: string, cover: string }) {
        const id = Math.floor(Math.random() * 100000)
        const game = { id, title, cover }
        setGames((state) => {
            const newState = [...state, game]
            localStorage.setItem("obc-game-lib", JSON.stringify(newState))
            return newState
        })
    }

    return { games, removeGame, addGame }
}