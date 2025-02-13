import React, { useState } from "react";
import Card from '@mui/material/Card';

function Card_propio({ title, url, description }) {
    const [meGusta, setMeGusta] = useState(0)
    const [noMeGusta, setNoMeGusta] = useState(0)
  return (
    <div>
            <h2>{title}</h2>
            <Card sx={{ minWidth: 275, maxHeight: 275, maxWidth: 275 }}>
                <img src={url} alt="imagen" />
            </Card  >
            <p>
                    <button onClick={() => setMeGusta(meGusta + 1)}>
                        Me gusta
                    </button>
                    Me gusta: {meGusta}
            </p>
            <p>
                <button onClick={() => setNoMeGusta(noMeGusta + 1)}>No me gusta</button>
                No me gusta: {noMeGusta}
            </p>
            <p>{description}</p>
    </div>
  );
}
export default Card_propio;