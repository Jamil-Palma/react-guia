// Card.jsx
// Este componente muestra una "card" genérica que puede incluir una imagen, un título y una descripción.
// Se utiliza PropTypes para asegurar que se reciban las propiedades correctas.

import React from 'react';
import PropTypes, { func } from 'prop-types';
import './Card.css';
import axios from 'axios';

const Card = ({ title, description, url, guardar, opcionGuardar=true}) => {
  //console.log("title es : ", title)
  //console.log("description es : ", description)
  //console.log("imageUrl es : ", url)
  const [imagen, setImagen] = React.useState(null)
  function handleClick() {
    console.log("click")
    async function getDataAxios() {
      try {
        console.log("entra get data axios", url)
        const response = await axios.get(url);
        console.log("-- ", response.data);
        setImagen(response.data.sprites.front_default)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(errores.message)
        setLoading(false);
      }
    }
    getDataAxios()

    //setImagen(url)
  }
  function guardarPokemon() {
    console.log("guardar pokemon")
    guardar(title, url)
  }
  return (
    <div className="card">
      {imagen && (
        // Contenedor de la imagen: se usa padding-bottom para mantener una proporción (16:9)
        <div className="card__image-container">
          <img src={imagen} alt={title} className="card__image" />
        </div>
      )}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {description && <p className="card__description">{description}</p>}
      </div>
      <button onClick={handleClick}>
        Mostrar imagen</button>
      { opcionGuardar && 
        <button onClick={guardarPokemon}>
          Elegir pokemon</button> }

    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  guardar: PropTypes.func,
  opcionGuardar: PropTypes.bool
};

export default Card;
