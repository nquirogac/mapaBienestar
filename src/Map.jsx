import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  ImageOverlay,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";

const miSalud = new L.Icon({
  iconUrl: `src/assets/Markers/Salud.png`,
  iconSize: [35, 40],
  iconAnchor: [22, 41],
});
const miDeporte = new L.Icon({
  iconUrl: `src/assets/Markers/Deporte.png`,
  iconSize: [35, 40],
  iconAnchor: [22, 41],
});
const miCultura = new L.Icon({
  iconUrl: `src/assets/Markers/Cultura.png`,
  iconSize: [35, 40],
  iconAnchor: [22, 41],
});
const miBienestar = new L.Icon({
  iconUrl: `src/assets/Markers/Bienestar.png`,
  iconSize: [35, 40],
  iconAnchor: [22, 41],
});
const miAcademico = new L.Icon({
  iconUrl: `src/assets/Markers/Académico.png`,
  iconSize: [35, 40],
  iconAnchor: [22, 41],
});


const markers = [
  {
    id: 1,
    position: [100, 150],
    name: "Evento A",
    description: "Descripción del evento A",
    link: "https://bienestar.bogota.unal.edu.co/",
    type: "Deporte",
  },
  {
    id: 2,
    position: [300, 400],
    name: "Evento B",
    description: "Descripción del evento B",
    link: "https://bienestar.bogota.unal.edu.co/",
    type: "Salud",
  },
  {
    id: 3,
    position: [500, 600],
    name: "Evento C",
    description: "Descripción del evento C",
    link: "https://bienestar.bogota.unal.edu.co/",
    type: "Salud",
  },
  {
    id: 4,
    position: [600, 300],
    name: "Evento D",
    description: "Descripción del evento D",
    link: "https://bienestar.bogota.unal.edu.co/",
    type: "Salud",
  },
  {
    id: 5,
    position: [700, 200],
    name: "Evento E",
    description: "Descripción del evento E",
    link: "https://bienestar.bogota.unal.edu.co/",
    type: "Deporte",
  },
  {
    id: 6,
    position: [300, 150],
    name: "Evento A",
    description: "Descripción del evento A",
    link: "https://bienestar.bogota.unal.edu.co/",
    type: "Deporte",
  },
  {
    id: 7,
    position: [300, 300],
    name: "Evento B",
    description: "Descripción del evento B",
    link: "https://bienestar.bogota.unal.edu.co/",
    type: "Deporte",
  },
  {
    id: 8,
    position: [500, 600],
    name: "Evento C",
    description: "Descripción del evento C",
    link: "https://bienestar.bogota.unal.edu.co/",
    type: "Deporte",
  },
  {
    id: 9,
    position: [600, 300],
    name: "Evento D",
    description: "Descripción del evento D",
    link: "https://bienestar.bogota.unal.edu.co/",
    type: "Deporte",
  },
  {
    id: 10,
    position: [700, 200],
    name: "Evento E",
    description: "Descripción del evento E",
    link: "https://bienestar.bogota.unal.edu.co/",
    type: "Deporte",
  },
];

function Map() {
  return (
    <>
      <h2>Alo</h2>
      <MapContainer
        style={{ height: "800px", width: "100%" }}
        center={[377, 377]}
        zoom={1}
        minZoom={1}
        maxZoom={10}
        scrollWheelZoom={true}
        crs={L.CRS.Simple}
      >
        <ImageOverlay
          url="src/assets/mapa.jpg"
          bounds={[
            [0, 0],
            [700, 700],
          ]}
        />
        {markers.map((marker) => (
          //markerIcon.iconUrl = "src/assets/Markers/" + marker.type + ".png",
          <Marker key={marker.id} position={marker.position} icon={(marker.type == "Deporte")? miDeporte:(marker.type == "Salud")? miSalud: (marker.type == "Cultura")? miCultura: (marker.type == "Académico")? miAcademico:miBienestar}>
            <Popup>
              <h3>{marker.name}</h3>
              <p>{marker.description}</p>
              <a href="https://github.com/nquirogac">aloooo</a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default Map;
