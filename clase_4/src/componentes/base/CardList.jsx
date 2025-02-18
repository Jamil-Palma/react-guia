// CardList.jsx
// Este componente realiza una llamada a una API (JSONPlaceholder en este caso) para obtener datos
// y renderiza una lista de "cards" utilizando el componente Card.
// Se maneja el estado de carga y errores para una experiencia de usuario completa.

import React, { useState, useEffect } from 'react';
import Card from './Card';
import './CardList.css';

const CardList = () => {
  // Estados para almacenar los datos, el estado de carga y errores
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realiza la petición a la API para obtener 10 posts
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Muestra un mensaje mientras se cargan los datos
  if (loading) return <p>Cargando datos...</p>;
  // Muestra un mensaje de error si ocurre alguno
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="card-list">
      <h2>Lista de Publicaciones</h2>
      <div className="cards-container">
        {/* esto funciona para vectores, respuestas de la api https://api.thecatapi.com/v1/images/search?limit=10
        {items.map(item => (
          // Se utiliza el componente Card para cada elemento de la lista
          <Card
            key={items.id}
            title={items.name}
            description={item.body}
            imageUrl={item.url} // Imagen de ejemplo
          />
        ))}
        
        */}

          <Card
            key={items.id}
            title={items.name}
            description={items.body}
            imageUrl={items.sprites.front_default} // Imagen de ejemplo
          />
      </div>
    </div>
  );
};

export default CardList;
