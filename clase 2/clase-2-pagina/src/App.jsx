import { datos } from "./ayuda/datos_imagenes"
import BasicCard from "./componentes/BasicCard"
import Cabezera from "./componentes/Cabezera"
import Card_propio from "./componentes/Card"
import Cuerpo from "./componentes/Cuerpo"
import Despedida from "./componentes/Despedida"
import JuegoAtrapaElBoton from "./componentes/JuegoAtrapaElBoton"
import PiePagina from "./componentes/PiePagina"
import Saludo from "./componentes/Saludo"

function App() {
  const nombre_saludo = "Mundo"
  const title = "videojuego"
  console.log("datos", datos)
  const numeros = [10,22,33,44,55]
  numeros.map((numero) => {
    console.log("numero", numero)
  })
  for (let i = 0; i < numeros.length; i++) {
    console.log("numero", numeros[i])
  }
  return (
    <>
      {
        //<Cabezera/>
      }
      <JuegoAtrapaElBoton/>
      <Saludo
        nombre = {nombre_saludo}
      />
      <Cuerpo></Cuerpo>

      {
        datos.map((dato)=>{
          console.log("dato: ", dato)
          return <Card_propio
                    title={dato.title}
                    description={dato.description}
                    url={dato.url}
                  />
        })
      }
      <BasicCard/>
      {/*<Card
        title={datos[0].title}
        description={datos[0].description}
        url={datos[0].url}
      />
      <Card
        title="imagen 2"
        description={"simple imagen aleatoria"}
        url={"https://definicion.com/wp-content/uploads/2022/09/imagen.jpg"}
      />*/}
      <Despedida
        nombre = "Mundo"
      />
      {/*<PiePagina/>*/}
    </>
  )
}

export default App;
