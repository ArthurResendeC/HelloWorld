import MyInput from "../components/Input";

export default function CreateItem() {
    return (
        <form className="flex flex-col items-center p-12 gap-8">
            <div className='flex items-center justify-center gap-5'>
                <MyInput labelFor="nome" labelText="Nome" />
                <MyInput labelFor="qtd" labelText="Quantidade" type="number" min={0} />
                <MyInput labelFor="preco" labelText="Preço" type="number" min={0} />
                <div className="flex flex-col gap-2 w-60">
                    <label htmlFor="categoria">Categoria:</label>
                    <select
                        className='p-2 rounded bg-neutral-800 outline-none disabled:bg-neutral-800 hover:bg-neutral-800  border-neutral-800 border-2 text-white'
                        name="categoria"
                    >
                        <option value="games">Jogos</option>
                        <option value="books">Livros</option>
                        <option value="else">Diversos</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <aside className="flex flex-col gap-2">
                    <label htmlFor="description">Descrição</label>
                    <textarea name="description" id="description" className="p-2 bg-neutral-800 resize-none rounded-md" cols={110} rows={10}></textarea>
                </aside>
                <button className="w-28 bg-blue-500 p-2 rounded hover:bg-blue-600 font-semibold transition-all">Salvar</button>
            </div>
        </form>
    )
}