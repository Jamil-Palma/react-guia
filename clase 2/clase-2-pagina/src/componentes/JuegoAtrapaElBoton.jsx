import React, { useState, useEffect } from 'react';

function JuegoAtrapaElBoton() {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  // useEffect para mover el botón cada 10 segundos
  useEffect(() => {
    const moverBoton = () => {
      const top = Math.floor(Math.random() * 80) + 10; // 10% a 90%
      const left = Math.floor(Math.random() * 80) + 10;
      setPosition({ top: `${top}%`, left: `${left}%` });
    };

    moverBoton(); // Mover inmediatamente al iniciar

    const timer = setInterval(moverBoton, 1500); // Mover cada 10 segundos

    // Cleanup: limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setScore(prevScore => prevScore + 1);
  };

  return (
    <div style={{ position: 'relative', height: '300px', border: '1px solid #ccc', margin: '1rem 0' }}>
      <button
        onClick={handleClick}
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          padding: '0.5rem 1rem',
        }}
      >
        ¡Atrápame!
      </button>
      <div style={{ marginTop: '1rem' }}>
        <strong>Puntaje:</strong> {score}
      </div>
    </div>
  );
}

export default JuegoAtrapaElBoton;
