import React from 'react';
import { Container, Typography } from '@mui/material';

const Contacto = () => {
  return (
    <Container id="contacto" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Contacto
      </Typography>
      <Typography variant="body1" align="center">
        Puedes contactarme a través de email, LinkedIn u otras redes sociales.
      </Typography>
    </Container>
  );
};

export default Contacto;
