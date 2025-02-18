import axios from 'axios'
import { useEffect, useState } from 'react'

function MiPrimerLlamadaAPI() {
  const [datos, setDatos] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        if(!response){
          console.log('error')
          return ;
        }
        console.log("respuesta es : ", response)
        const data = await response.json()
        console.log("data es : ", data)
        setDatos(data)
      }
      catch(errores){
        console.log("errores", errores)
        setError(errores.message)
      }

    }
    //fetchData()
    async function getDataAxios() {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
        console.log("-- ", response);
        setDatos(response.data)
      } catch (error) {
        console.error(error);
        setError(errores.message)
      }
    }
    getDataAxios()
    console.log("datos es : ", datos)
  },[])
  const ejemplo = 5
  if(ejemplo === 5){
    console.log("caso 1")
    if(ejemplo === 5){
      console.log("caso 1")
    } else {
      console.log("caso 2")
    } 
  } else {
    console.log("caso 2")
  } 

  ejemplo == 5 ? 
    (console.log("caso 3"), console.log("caso 3.5")) 
    : console.log("caso 4");
  return (
    <>
    hola mundo!
    {error?(<p>Error: {error}</p>)
      :datos ?
        datos.map((dato) => {
          return <img src={dato.url} alt="gato" />
        })
        :<p>Cargando datos...</p>
    } 
    </>
  )
}

export default MiPrimerLlamadaAPI
