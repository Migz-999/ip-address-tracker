import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useRef, useEffect } from 'react';

export default function Map(props) {
  const mapRef = useRef(null)
  const { response } = props;
  const { location } = response || {};
  const { lat, lng } = location;
  const position = [lat, lng];
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo([lat, lng]);
    }
  }, [lat, lng]);
  // --- (6) Create a custom marker ---
  const customIcon = new Icon({
    iconUrl: "../src/assets/icon-location.svg",
    iconSize: [20, 20],
  });

  return (
    <section className="map-component h-[70vh] z-0 absolute">
      {/* --- (5) Add leaflet map container --- */}
      <div className="map">
        <MapContainer ref={mapRef} center={position} zoom={6} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // --- (7) Alternative map style (attribution and url copied from the leaflet extras website) ---
            // attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            // url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            // --- -------------------------------------------------------------------------------------- ---
          />
          <Marker position={position} icon={customIcon}>
            <Popup>🐻🍻🎉</Popup>
          </Marker>
        </MapContainer>
        {/* --- ---------------------------- --- */}
      </div>
    </section>
  );
}
