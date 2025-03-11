import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Polygon, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [modo, setModo] = useState(""); // "ubicacion", "distancia", "perimetro"
  const [ubicacion, setUbicacion] = useState(null);
  const [puntos, setPuntos] = useState([]);
  const [distancia, setDistancia] = useState(null);
  const [perimetro, setPerimetro] = useState(null);

  // Obtiene la ubicación actual del usuario
  const obtenerUbicacionActual = () => {
    if (!navigator.geolocation) {
      alert("La geolocalización no es soportada en tu navegador");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("ubicacion ", latitude,longitude)
        setUbicacion([latitude, longitude]);
      },
      () => {
        alert("No se pudo obtener la ubicación");
      }
    );
  };

  // Calcula la distancia entre dos puntos
  const calcularDistancia = () => {
    if (puntos.length !== 2) {
      alert("Selecciona exactamente dos puntos en el mapa");
      return;
    }

    const [lat1, lon1] = puntos[0];
    const [lat2, lon2] = puntos[1];

    const R = 6371e3; // Radio de la Tierra en metros
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanciaCalculada = (R * c) / 1000; // Convertimos a km

    setDistancia(distanciaCalculada.toFixed(2));
  };

  // Calcula el perímetro cuando hay más de 2 puntos
  const calcularPerimetro = () => {
    if (puntos.length < 3) {
      alert("Selecciona al menos tres puntos para calcular el perímetro");
      return;
    }
    let total = 0;
    for (let i = 0; i < puntos.length; i++) {
      const [lat1, lon1] = puntos[i];
      const [lat2, lon2] = puntos[(i + 1) % puntos.length];

      const R = 6371e3;
      const φ1 = (lat1 * Math.PI) / 180;
      const φ2 = (lat2 * Math.PI) / 180;
      const Δφ = ((lat2 - lat1) * Math.PI) / 180;
      const Δλ = ((lon2 - lon1) * Math.PI) / 180;

      const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      total += R * c;
    }
    setPerimetro((total / 1000).toFixed(2));
  };

  // Evento de clic en el mapa para agregar puntos
  const SeleccionadorPuntos = () => {
    useMapEvents({
      click(e) { 
        const { lat, lng } = e.latlng;

        // Modo distancia: Solo permite seleccionar 2 puntos
        if (modo === "distancia" && puntos.length >= 2) return;

        setPuntos([...puntos, [lat, lng]]);
      },
    });
    return null;
  };
  const EliminarPunto = ()=>{
    console.log("puntos son: ", puntos)
    console.log("puntos size: ", puntos.length)
    if (puntos.length <= 0) {
        alert("ningun punto selecionado");
        return;
      }
      const nuevosPuntos = puntos.slice(0,-1);
      let nuevosPuntos2 = []
      for(let i = 0; i < puntos.length-1; i++){
        nuevosPuntos2 = [...nuevosPuntos2, puntos[i]]
      }
      console.log("nuevos puntos ", nuevosPuntos)
      console.log("nuevos puntos 2", nuevosPuntos2)
      setPuntos(nuevosPuntos)
  }
  console.log("putnos ", puntos)
  return (
    <div>
      <h2>Mapa Interactivo</h2>
      <button onClick={() => setModo("ubicacion")}>Obtener Ubicación</button>
      <button onClick={() => setModo("distancia")}>Medir Distancia</button>
      <button onClick={() => setModo("perimetro")}>Medir Perímetro</button>
      <button onClick={() => setPuntos([])}>Resetear</button>
        <button onClick={EliminarPunto}>Eliminar ultimo punto</button>
      {modo === "ubicacion" && (
        <button onClick={obtenerUbicacionActual}>Obtener Mi Ubicación</button>
      )}
      {modo === "distancia" && (
        <button onClick={calcularDistancia}>Calcular Distancia</button>
      )}
      {modo === "perimetro" && (
        <button onClick={calcularPerimetro}>Calcular Perímetro</button>
      )}

      {distancia && <p>Distancia: {distancia} km</p>}
      {perimetro && <p>Perímetro: {perimetro} km</p>}
      Numero puntos es: {puntos.length}
      {puntos && puntos.map((p)=>{
        return <p> [latitud: {p[0]}, lontigud: {p[1]}]</p>
      })}
      <MapContainer center={[20, -100]} zoom={5} style={{ height: "500px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {modo !== "" && <SeleccionadorPuntos />}
        {ubicacion && <Marker position={ubicacion} />}
        {puntos.map((pos, idx) => (
          <Marker key={idx} position={pos} />
        ))}
        {puntos.length === 2 && <Polyline positions={puntos} color="blue" />}
        {puntos.length >= 3 && <Polygon positions={puntos} color="green" />}
      </MapContainer>

    </div>
  );
};

export default MapComponent;
