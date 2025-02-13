import { useState } from "react";
import ItemLista from "./ItemLista";


function Lista(){
    const [input, setInput] = useState('');
    const [inputEdad, setInputEdad] = useState('');
    const [inputNombre, setInputNombre] = useState('');
    const [lista, setLista] = useState([]);
    const [contador, setContador] = useState(1);
    console.log("Lista componenete");
    function agregar(){

        setLista([...lista, 
            {
                id: contador,
                nombre: inputNombre, 
                edad: inputEdad
            }])
        setContador(contador + 1)
    }
    function leerInputNombre(e){
        setInputNombre(e.target.value)
    }
    function leerInputEdad(e){
        setInputEdad(e.target.value)
    }
    function eliminarElemento(id){
        console.log("eliminarElemento")
        const nuevaLista = lista.filter(dato => dato.id !== id)
        setLista(nuevaLista)
    }
    return (
        <div>
            nombre
            <input 
                type="text"     
                value={inputNombre} 
                onChange={leerInputNombre}
            />

            <br/>
            edad
            <input 
                type="text"     
                value={inputEdad} 
                onChange={leerInputEdad}
            />
            <button
                onClick={agregar}
            >Agregar
            </button>

            <p>{lista.map((dato,index)=>{
                console.log("dato es: ", dato)
                return <ItemLista 
                        nombre={dato.nombre}
                        edad={dato.edad}
                        id={dato.id}
                        eliminar={() => eliminarElemento(dato.id)}
                        posicion={index}
                        />
            })}</p>
        </div>
    )
}
export default Lista;