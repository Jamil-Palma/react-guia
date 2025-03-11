import React from 'react';
import { Container, Typography } from '@mui/material';

const Acerca = () => {
  return (
    <Container id="acerca" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Acerca de mí
      </Typography>
      <Typography variant="body1" align="center">
        Con experiencia en React, Node.js y tecnologías modernas, me especializo en el desarrollo de aplicaciones web de alta calidad.
      </Typography>
    </Container>
  );
};

export default Acerca;
