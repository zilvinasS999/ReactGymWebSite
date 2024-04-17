import React from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, divIcon, point } from 'leaflet';
import mapPointer from '../assets/imgs/placeholder.png';
import MarkerClusterGroup from 'react-leaflet-cluster';

function MapSection() {
  const markers = [
    {
      geocode: [54.6872, 25.2797],
      popUp: 'Vilnius 1',
    },
    {
      geocode: [54.7232, 25.2797],
      popUp: 'Vilnius 2',
    },
    {
      geocode: [54.8985, 23.9036],
      popUp: 'Kaunas',
    },
    {
      geocode: [55.7033, 21.1443],
      popUp: 'Klaipėda',
    },
  ];

  const customIcon = new Icon({
    iconUrl: mapPointer,
    iconSize: [40, 40],
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class=cluster-icon>${cluster.getChildCount()}</div>`,
      className: 'custom-marker-cluster',
      iconSize: point(33, 33, true),
    });
  };

  return (
    <MapContainer
      center={[55.169438, 23.881275]}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>
              <h2>{marker.popUp}</h2>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default MapSection;
