import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './componentes/Contador'
import Lista from './componentes/Lista'

function App() {
  const [count, setCount] = useState(0)
  const [segundero, setSegundero] = useState(10);
  return (
    <>
      <Contador
        aumentar={setSegundero}
        valor={segundero}
      />
      <Lista/>
    </>
  )
}

export default App
