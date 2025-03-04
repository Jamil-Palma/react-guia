import axios from 'axios'
import { useEffect, useState } from 'react'
import CardList from './componentes/base/CardList'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './componentes/Home'
import Equipo from './componentes/rutas/Equipo'
import MiContextoProvider from './componentes/hook/MiContextoProvider'
import AppRef from './Hooks/useRefHook/useRefEjemplo'
import UseReducirEjemplo from './Hooks/useReducerHook/UseReducerEjemplo'
import HookStorage from './Hooks/CustomHook/CustomHook'
import FormularioEjemplo1 from './Hooks/useRefHook/FormularioEjemplo1'
import BotonesEjemplo from './mui_diseno/Botones'
import { Box, Button } from '@mui/material'

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
    <Box>
      <MiContextoProvider>
      
        <Button         sx={{
          width: '10%',
          height: 100,
          borderRadius: 1,
          bgcolor: '#5af7ea',
          '&:hover': {
            bgcolor: '#62f472',
          },
          borderRight: 20
        }} onClick={() => navigate('/')}>Inicio</Button>
        <Button 
            sx={{
              width: 200,
              height: 100,
              borderRadius: 1,
              bgcolor: '#5af7ea',
              '&:hover': {
                bgcolor: '#62f472',
              },
            }} 
          onClick={() => navigate('/cardList')}>Elegir pokemon</Button>
        <Button onClick={() => navigate('/equipo')}>Equipo</Button>
        <Button onClick={() => navigate('/hook/useRef')}>use Ref</Button>
        <Button onClick={() => navigate('/hook/useReduce')}>use Reduce</Button>
        <Button onClick={() => navigate('/hook/propio')}>Mi Hook</Button>
        <Button onClick={() => navigate('/MUI/botones')}>Botones</Button>
        <Button onClick={cambioIdioma}>Cambio idioma</Button>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/cardlist" element={
              <CardList />}/>
            <Route path="/equipo" element={
              <Equipo/>}/>
            <Route path="/hook/useRef" element={<FormularioEjemplo1/>}/>
            <Route path="/hook/useReduce" element={<UseReducirEjemplo/>}/>
            <Route path="/hook/propio" element={<HookStorage/>}/>
            <Route path="/MUI/botones" element={<BotonesEjemplo/>}/>
          </Routes>
        </MiContextoProvider>
      </Box>
    </>
  )
}

export default App
