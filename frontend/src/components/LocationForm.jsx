import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LocationForm = () => {
  const state = {
    center: [19.197855, 72.972585],
    zoom: 13,
  };

  return (
    <div>
      <MapContainer center={state.center} zoom={state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={state.center}>
          <Popup>
            Jondhali Baug Rd, Dhobi Ali, Charai, Thane West, Thane, Maharashtra
            400601.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationForm;
