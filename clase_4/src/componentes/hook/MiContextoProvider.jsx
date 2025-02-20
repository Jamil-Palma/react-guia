import MiContexto from "./MiContexto";
import React, { useState } from "react";

function MiContextoProvider({ children }) {
const [pokemonElegidoContexto, setPokemonElegidoContexto] = useState([]);
function casoEnvio(){
    console.log("hola!")
}  
return (
    <MiContexto.Provider value={{ pokemonElegidoContexto, setPokemonElegidoContexto, casoEnvio }}>
      {children}
    </MiContexto.Provider>
  );
}
export default MiContextoProvider;