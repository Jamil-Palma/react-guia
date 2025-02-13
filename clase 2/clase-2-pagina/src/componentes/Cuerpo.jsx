import React, { useState } from 'react';

function Cuerpo() {
    const [contador, setContador] = useState(0);
    console.log("contador"  , contador)
  return (
    <div>
        <button
            onClick={() => {
                console.log("click antes", contador)
                setContador(contador + 1)
                console.log("click despues", contador)
            }}
        >click</button>
        <div>Tu valor es: { contador }</div>
    </div>
  );
}
export default Cuerpo;