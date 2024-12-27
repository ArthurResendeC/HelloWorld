import { SyntheticEvent, useState } from "react"
import MyInput from "./Input"
import ActionBtn from "./ActionBtn"
interface NewGameFormProps {
    addGame: ({ title, cover }: { title: string, cover: string }) => void
}

export default function NewGameForm({ addGame }: NewGameFormProps) {
    
    const [title, setTitle] = useState<string>('')
    const [cover, setCover] = useState<string>('')
    
    function handleSubmit(evnt: SyntheticEvent) {
        evnt.preventDefault()
        addGame({ title, cover })
        setTitle('')
        setCover('')
    }
    
    return (
        <form className="text-white flex items-end gap-3 p-2" onSubmit={handleSubmit}>
            <MyInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                type="text"
                placeholder="God of war"
                labelfor="title"
                labeltext="Título:"
            />
            <MyInput
                value={cover}
                onChange={(e) => setCover(e.target.value)}
                name="cover"
                type="text"
                placeholder="url/kratos.png"
                labelfor="cover"
                labeltext="Capa:"
            />
            <ActionBtn
                text="Adicionar jogo"
                type="submit"
            />
        </form>
    )
}