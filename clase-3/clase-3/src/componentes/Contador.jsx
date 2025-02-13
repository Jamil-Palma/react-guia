import { useEffect, useState } from "react";


function Contador(){
    const [segundero, setSegundero] = useState(1);
    const [minutero, setMinutero] = useState(0);
    //console.log('Contador componenete');
   // console.log("contador es: ", contador)
    useEffect(() => {
        console.log('useEffect');
        //console.log("contador paso 2 es: ", contador)
        const timer = setInterval(() => {
            setSegundero(prev => {
                if(prev === 10){
                    console.log("igualdad")
                    setMinutero(prevMinuto => prevMinuto + 1)
                    return 1
                }
                return prev + 1                    
            })
        }, 1000)
        //console.log("contador paso 3 es: ", contador)
        return () => clearInterval(timer);
    },[])
    
    //console.log('Contador componenete 2');
    return (
        <div>

            <p>Reloj {minutero} : {segundero}</p>
        </div>
    )
}
export default Contador;