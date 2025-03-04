import { useRef, useState, useEffect } from "react";

// Componente principal
function FormularioEjemplo1() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Formulario con useRef</h1>
      <Formulario />
    </div>
  );
}

// Componente de Formulario
function Formulario() {
  const nombreRef = useRef(null); // Referencia al primer input
  const apellido = useRef(null); // Referencia al primer input
  const formRef = useRef(null); // Referencia al formulario
  const [datos, setDatos] = useState([]); // Estado para guardar los datos enviados
  const [mensaje, setMensaje] = useState("");

  // Enfocar el input de "Nombre" al montar el componente
  useEffect(() => {
    apellido.current.focus();
  }, []);

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = nombreRef.current.value;
    const email = formRef.current.email.value;
    const telefono = formRef.current.telefono.value;

    if (!nombre || !email || !telefono) {
      setMensaje("❌ Todos los campos son obligatorios");
      return;
    }

    // Guardar datos en el estado
    const nuevoDato = { nombre, email, telefono };
    setDatos([...datos, nuevoDato]);

    // Resetear formulario
    formRef.current.reset();
    setMensaje("✅ Datos enviados correctamente");

    // Enfocar el input de "Nombre" nuevamente
    apellido.current.focus();
  };

  return (
    <div>
      <h2>Registro de Usuarios</h2>
      <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
        <label>Nombre:</label>
        <input ref={nombreRef} type="text" name="nombre" placeholder="Tu nombre" />
        <label>Apellido:</label>
        <input ref={apellido} type="text" name="nombre" placeholder="Tu nombre" />

        <label>Email:</label>
        <input type="email" name="email" placeholder="Tu email" />

        <label>Teléfono:</label>
        <input type="tel" name="telefono" placeholder="Tu teléfono" />

        <button type="submit">Guardar Datos</button>
      </form>

      {mensaje && <p>{mensaje}</p>}

      <h3>📌 Datos Guardados:</h3>
      <ul>
        {datos.map((dato, index) => (
          <li key={index}>
            <strong>{dato.nombre}</strong> - {dato.email} - {dato.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Estilos en JS
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "300px",
  },
};

export default FormularioEjemplo1;
