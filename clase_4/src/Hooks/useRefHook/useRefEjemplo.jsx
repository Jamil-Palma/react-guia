import { useRef, useState, useEffect } from "react";

// Componente principal
function AppRef() {
  return (
    <div>
      <h1>Ejemplo de useRef</h1>
      <Formulario />
    </div>
  );
}

// Componente de formulario con useRef
function Formulario() {
  const inputRef = useRef(null); // Referencia al input
  const renderCount = useRef(0); // Contador de renders
  const [nombre, setNombre] = useState("");
    console.log("se carga formulario")
  // Enfocar el input cuando el componente se monta
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Contar cuántas veces se ha renderizado el componente
  useEffect(() => {
    renderCount.current += 1;
  });
  setNombre("")
  console.log("renderizado")
  return (
    <div>
      <input
        ref={inputRef} // Enlazamos el ref al input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p>Renderizaciones: {renderCount.current}</p>
      <button onClick={() => inputRef.current.focus()}>Enfocar Input</button>
    </div>
  );
}

export default AppRef;
