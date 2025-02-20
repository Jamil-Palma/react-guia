import { useContext } from "react";
import MiContexto from "./hook/MiContexto";

function Home(){
    const {datos, setDatos, casoEnvio} = useContext(MiContexto)
    console.log("datos en Home es : ", datos)
    casoEnvio()
    const visitas = localStorage.getItem('pokemons')
    console.log("visitas es:", visitas)
    const idioma = localStorage.getItem('idioma')
    
    return(
        <div>
            {idioma=='spanish'?
                <h1>INICIO</h1>
                :<h1>Home</h1>
            }

        </div>
    )
}

export default Home;