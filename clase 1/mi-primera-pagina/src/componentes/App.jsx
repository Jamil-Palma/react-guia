// importaciones

import { App2 } from "./App2"
//import "../App.css"
function saludame(){
  console.log(
    "hola mundo"
  )
}


function App() {
  
  console.log("mi componente app se esta ejecutando")


  return (
    <>
      <div>
        prueba uno
      </div>
      <button onClick={saludame}>click</button>
      <button onClick={()=>{console.log("hola mundo 2")}}>click 2</button>
    </>
  )
}

export default App
