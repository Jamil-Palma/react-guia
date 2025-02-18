// Card.jsx
// Este componente muestra una "card" genérica que puede incluir una imagen, un título y una descripción.
// Se utiliza PropTypes para asegurar que se reciban las propiedades correctas.

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl && (
        // Contenedor de la imagen: se usa padding-bottom para mantener una proporción (16:9)
        <div className="card__image-container">
          <img src={imageUrl} alt={title} className="card__image" />
        </div>
      )}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {description && <p className="card__description">{description}</p>}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Card;
