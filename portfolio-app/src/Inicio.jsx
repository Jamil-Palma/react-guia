import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const opciones = [
    {
        titulo: 'Desarrollo Web',
        descripcion: 'Creación de aplicaciones web modernas y escalables con tecnologías como React y Node.js.',
        img: "https://www.comunicare.es/wp-content/uploads/2021/11/desarrollo-web-3.jpg",
    },
    {
        titulo: 'Diseño UI/UX',
        descripcion: 'Diseño de interfaces de usuario atractivas y funcionales para aplicaciones web y móviles.',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaABoXfzJdEMoclspiWba4lj25-n9AdMSaWaD334j5OVETJGfn0qGDZqjbRlsk3MumsMs&usqp=CAU",
    },
    {
        titulo: 'Consultoría',
        descripcion: 'Asesoramiento en el desarrollo de proyectos web y estrategias digitales para empresas.',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnEsWM0uSsFF_DvXSk40cut283yWI4dUf7sA&s",
    },
]
const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
}
const Inicio = () => {
  return (
    <Container id="inicio" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Bienvenido a mi Portafolio.
      </Typography>
      <Typography variant="h6" align="center">
        Soy un desarrollador web apasionado por crear soluciones innovadoras.
      </Typography>
      <Slider {...settings}>
        {opciones.map((opcion, index) => (
            <Box key={index}>
                <img 
                    src={opcion.img} 
                    alt={opcion.titulo} 
                    style={{
                        with: "100%", 
                        borderRadius: 10,
                        height: 300,
                        objectFit: "cover",
                        display: "block",
                        margin: "auto",
                    }}
                />
                <Typography variant="h4" align="center" gutterBottom>
                {opcion.titulo}
                </Typography>
                <Typography variant="body1" align="center">
                {opcion.descripcion}
                </Typography>

            </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Inicio;
