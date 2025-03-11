import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./inicio.css"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Inicio = () => {
  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const navigate = useNavigate();
  return (
    <div>
      <h2>Carousel Component</h2>
      <Slider {...settings}>
        <div>
          <h3>
          <Button className="claseBoton"
            onClick={()=>navigate('')}
          >Inicio</Button>
          
          </h3>
        </div>
        <div>
          <h3>
          <Button className="claseBoton"
            onClick={()=>navigate('/graficos')}
          >Graficos</Button>
            </h3>
        </div>
        <div>
          <h3>
          <Button className="claseBoton"
            onClick={()=>navigate('/registro')}
          >Registro</Button>
            </h3>
        </div>
        <div>
          <h3>
          <Button className="claseBoton"
            onClick={()=>navigate('/pdf')}
          >Procesador PDF</Button>
          </h3>
        </div>
        <div>
          <h3>
          <Button className="claseBoton"
            onClick={()=>navigate('/mapas')}
          >Mapas</Button>
            </h3>
        </div>
      </Slider>
      <br/>
      <br/>
    </div>
  );
};

export default Inicio;