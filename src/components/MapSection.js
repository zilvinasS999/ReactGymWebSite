import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function MapSection() {
  return (
    <section>
      <MapContainer center={[55.169438, 23.881275]} zoom={8}>
        <TileLayer attribution='' />
      </MapContainer>
    </section>
  );
}

export default MapSection;
