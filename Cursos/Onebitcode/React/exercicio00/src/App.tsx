import React from 'react'
import Div from './components/Title'
const App = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      Olá, mundo!
    <Div>Teste</Div>
    <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App