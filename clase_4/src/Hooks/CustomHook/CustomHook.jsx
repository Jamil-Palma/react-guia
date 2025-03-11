import { useState, useEffect } from "react";

// 1️⃣ Custom Hook: useLocalStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    // Obtener valor de localStorage si existe, si no, usar el valor inicial
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error leyendo localStorage", error);
      return initialValue;
    }
  });

  // Función para actualizar el estado y guardar en localStorage
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error guardando en localStorage", error);
    }
  };

  return [storedValue, setValue];
}

// 2️⃣ Componente principal que usa el hook personalizado
function HookStorage() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🌟 Custom Hook: useLocalStorage</h1>
      <ThemeSwitcher />
      <UserForm />
    </div>
  );
}

// 3️⃣ Componente para cambiar el tema (modo claro/oscuro)
function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.style.background = theme === "light" ? "#fff" : "#333";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }, [theme]);

  return (
    <div>
      <h2>🎨 Cambiar Tema</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Cambiar a {theme === "light" ? "Oscuro" : "Claro"}
      </button>
    </div>
  );
}

// 4️⃣ Componente para guardar y recuperar nombre de usuario
function UserForm() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <h2>👤 Guardar Nombre de Usuario</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre..."
      />
      <p>👋 Hola, {name || "Usuario"}</p>
    </div>
  );
}

export default HookStorage;
