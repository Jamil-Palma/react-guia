import { useContext } from "react";
import Card from "../base/Card";
import MiContexto from "../hook/MiContexto";

function Equipo(){
    const {pokemonElegidoContexto} = useContext(MiContexto)
    return(
        <>
            {pokemonElegidoContexto.map(item => 
                <Card
                    key={item.id}
                    title={item.nombre}
                    url={item.url} // Imagen de ejemplo
                    guardar={()=>{}}
                    opcionGuardar={false}
                    datos={item}
                />
            )}
        </>
    )
}
export default Equipo;