import axios from 'axios'
import { useEffect, useState } from 'react'
import MiPrimerLlamadaAPI from './componentes/MiPrimerLlamadaAPI'
import CardList from './componentes/base/CardList'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './componentes/Home'

function App() {
  const navigate = useNavigate()
  return (
    <>
    <button onClick={() => navigate('/')}>ruta 1</button>
    <button onClick={() => navigate('/cardList')}>ruta 2</button>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cardlist" element={<CardList/>}/>
      </Routes>
    </>
  )
}

export default App
