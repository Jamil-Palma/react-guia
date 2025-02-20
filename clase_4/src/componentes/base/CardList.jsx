// CardList.jsx
// Este componente realiza una llamada a una API (JSONPlaceholder en este caso) para obtener datos
// y renderiza una lista de "cards" utilizando el componente Card.
// Se maneja el estado de carga y errores para una experiencia de usuario completa.

import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import './CardList.css';
import axios from 'axios';
import MiContexto from '../hook/MiContexto';

//const [pokemonElegido, setPokemonElegido] = useState([]);
const CardList = () => {
  // Estados para almacenar los datos, el estado de carga y errores
  console.log("entra card list")
  console.log("------")
  const {pokemonElegidoContexto, setPokemonElegidoContexto} = useContext(MiContexto)
  console.log("--- contexto datos: ", pokemonElegidoContexto)
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);

  const [mostrarLista, setMostrarLista] = useState(true);
  async function getDataAxios(url) {
    try {
      console.log("entra get data axios")
      const response = await axios.get(url);
      console.log("-- ", response.data);
      setItems(response.data)
      setLoading(false);
    } catch (error) {
      console.log("error es : ", error);
      setErrorStatus(true)
      setError(error.message)
      setLoading(false);
    }
  }
  useEffect(() => {
    console.log("use effect")
    // Realiza la petición a la API para obtener 10 posts
    function llamadaAPIFetch() {
      fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response =>   {
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
    }
    getDataAxios("https://pokeapi.co/api/v2/pokemon/")
    return (
      console.log("use effect terminado")
    )
  }, []);
  if (errorStatus) return <p>Error: {error}</p>;

  if (loading) return <p>Cargando datos...</p>;

  console.log("items es : ", items)
  console.log("items es : ", items.results)
  function handleClick() {
    console.log("click")
    setLoading(true);
    getDataAxios(items.next)
  }
  function guardarPokemon(nombre, url) {
    console.log("guardar pokemon")
    console.log("pokemon elegido es : ", pokemonElegidoContexto)
    setPokemonElegidoContexto([...pokemonElegidoContexto, {nombre, url}])
    localStorage.setItem("pokemons",[...pokemonElegidoContexto, {nombre, url}])
  }
  console.log("pokemon elegido es 2: ", pokemonElegidoContexto)
  return (
    <div className="card-list">
      <h2>Lista de Publicaciones</h2>
      <button onClick={handleClick}>Siguiente</button>
      <button onClick={() => setMostrarLista(!mostrarLista)}>
        {mostrarLista ? 'Ocultar' : 'Mostrar'} lista
      </button>
      <div className="cards-container">
        {mostrarLista && items.results.map(item => (<Card
            key={item.id}
            title={item.name}
            description={item.name}
            url={item.url} // Imagen de ejemplo
            guardar={guardarPokemon}
          />
        ))}


          {/*<Card
            key={items.id}
            title={items.name}
            description={items.body}
            imageUrl={items.sprites.front_default} // Imagen de ejemplo
          />*/}
      </div>
      <h2>Seleccionados:</h2>
      <div className="cards-container">
        {pokemonElegidoContexto.map(item => (<Card
            key={item.id}
            title={item.nombre}
            url={item.url} // Imagen de ejemplo
            guardar={guardarPokemon}
            opcionGuardar={false}
            datos={item}
          />
        ))}
        </div>
    </div>
  );
};

export default CardList;
