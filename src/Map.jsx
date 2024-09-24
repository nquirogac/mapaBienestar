/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
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


function Map({ selectedCategories, markers }) {
    const filteredMarkers = markers.filter(marker =>
        selectedCategories.includes(marker.type)
    );

    useEffect(() => {
        console.log("Marcadores visibles:", filteredMarkers);
    }, [selectedCategories]);

  return (
    <div className="mainContent">
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
        {filteredMarkers.map((marker) => (
          <Marker 
          key={marker.id} 
          position={marker.position} 
          icon={marker.type === "Deporte" ? miDeporte
            : marker.type === "Salud" ? miSalud
                : marker.type === "Cultura" ? miCultura
                    : marker.type === "Académico" ? miAcademico
                        : miBienestar}>
            <Popup>
              <h3>{marker.name}</h3>
              <p>{marker.description}</p>
              <a target="_blank" href={marker.link}>Link al evento</a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
