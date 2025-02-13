import { useEffect, useState } from "react";


function ItemLista({nombre, edad, eliminar, id, posicion}){
    const [tiempoVida, settiempoVida] = useState(0);
    useEffect(() => {
        console.log('useEffect');
        const timer = setInterval(() => {
            settiempoVida(prev => prev + 1)
        }, 1000)
        return () => clearInterval(timer);
    },[])
    
    return (
        <div>

            <p>{posicion+1}: {nombre} {tiempoVida} - {edad}
                <button
                    onClick={eliminar}
                >Eliminar</button>
            </p>
            
        </div>
    )
}
export default ItemLista;