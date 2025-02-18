import axios from 'axios'
import { useEffect, useState } from 'react'
import MiPrimerLlamadaAPI from './componentes/MiPrimerLlamadaAPI'
import CardList from './componentes/base/CardList'

function App() {
  return (
    <>
      {/*<MiPrimerLlamadaAPI/>*/}
      <CardList/>
    </>
  )
}

export default App
