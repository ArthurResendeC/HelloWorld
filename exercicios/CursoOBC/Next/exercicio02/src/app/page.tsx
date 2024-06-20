import Link from "next/link";

export default function Home(){
  return(
      <div className="flex flex-col gap-12 items-center justify-center w-9/12 m-auto pt-32">
        <h1 className="text-7xl text-center">O melhor jeito de comprar o que você ama</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum fuga quibusdam laborum officia modi aliquid enim illo sit eveniet repudiandae nam ducimus accusamus obcaecati rerum et, dolore at aut!</p>
        <Link href='/products'><button className="p-4 bg-neutral-800 rounded-lg hover:bg-neutral-900 transition-all text-white">Conheça já os nossos produtos!</button></Link>
      </div>
  )
}