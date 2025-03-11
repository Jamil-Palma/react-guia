import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Proyectos = () => {
  return (
    <Container id="proyectos" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Proyectos Destacados
      </Typography>
      <Grid container spacing={4}>
        {[1, 2, 3].map((item) => (
          <Grid item key={item} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`portafolio_${item}.webp`}
                alt={`Proyecto ${item}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Proyecto {item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Breve descripción del proyecto {item}. Tecnologías utilizadas y objetivos del desarrollo.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Proyectos;
