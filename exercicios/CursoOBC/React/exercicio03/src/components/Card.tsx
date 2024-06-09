export default function Card() {
    return (
        <section className="bg-white h-screen w-sreen flex items-center justify-center font-sans">
            <article className="h-4/5 w-2/3 rounded-3xl flex  p-6 gap-10 bg-blue-100">
                <img className="p-6 m-9 bg-black rounded-lg flex items-center shadow-2xl" src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" alt="" />
                <div className="flex flex-col mt-12">
                    <h1 className="font-bold text-3xl">Pôster do Star Wars (1977)</h1>
                    <p className="pt-6 w-5/6 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem incidunt officia sit facere ipsum asperiores consequuntur qui, veniam similique maxime quisquam excepturi nam. Esse necessitatibus facilis illo tenetur praesentium. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur esse eriboassaurus ler mi nume ri kan</p>
                    <button className="w-40 mt-12 p-3 bg-gray-950 hover:bg-black hover:translate-x-2 transition-all  text-white rounded-xl">Comprar agora</button>
                </div>
            </article>
        </section>
    )
}