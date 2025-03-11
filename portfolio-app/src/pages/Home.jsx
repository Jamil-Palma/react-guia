import React from 'react';
import { Box, Button } from '@mui/material';
import Inicio from '../Inicio';
import Acerca from '../Acerca';
import Proyectos from '../Proyectos';
import Contacto from '../Contacto';
import Navbar from '../components/NavBar';
const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'acerca', label: 'Acerca de' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' }
];

const Home = () => {
  return (
    <div>
      <Navbar sections={sections} />
      {/* Se agrega un margen superior para que el contenido no quede oculto tras el navbar */}
      <Box sx={{ mt: 8 }}>
        <Inicio />
        <Acerca />
        <Proyectos />
        <Contacto />
      </Box>
    </div>
  );
};

export default Home;
