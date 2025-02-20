import axios from 'axios'
import { useEffect, useState } from 'react'
import CardList from './componentes/base/CardList'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './componentes/Home'
import Equipo from './componentes/rutas/Equipo'
import MiContextoProvider from './componentes/hook/MiContextoProvider'

function App() {
  const navigate = useNavigate()
  function cambioIdioma(){
    const idioma = localStorage.getItem('idioma')
    if(idioma=="spanish"){
      localStorage.setItem("idioma","otro")
    } else{
      localStorage.setItem("idioma","spanish")
    }
  }
  return (
    <>
    <MiContextoProvider>
    
      <button onClick={() => navigate('/')}>Inicio</button>
      <button onClick={() => navigate('/cardList')}>Elegir pokemon</button>
      <button onClick={() => navigate('/equipo')}>Equipo</button>
      <button onClick={cambioIdioma}>Cambio idioma</button>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cardlist" element={
            <CardList />}/>
          <Route path="/equipo" element={
            <Equipo/>}/>
        </Routes>
      </MiContextoProvider>
    </>
  )
}

export default App
