import Card from "./components/Card"
const image = 'https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg'

const App:React.FC = () => {
  return (
    <>
    <h1 className="text-3xl pt-2 ps-4">Exercício 2</h1>
      <Card title='Card1' posterImg={image}></Card>
      <Card title='Card2' posterImg={image}></Card>
      <Card title='Card3' posterImg={image}></Card>
    </>
  )
}

export default App
