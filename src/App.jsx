import { useState } from 'react'
import location from './assets/location.png'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { Icon, divIcon, point } from 'leaflet'

import 'leaflet/dist/leaflet.css'
import './App.css'
import AnimalCards from './AnimalCards'

function App() {
  const markers = [
    {
      geocode: [48.06, 2.3522],
      popUp: "Hello, I am popup 1"
    },
    {
      geocode: [48.16, 2.3422],
      popUp: "Hello, I am popup 2"
    },
    {
      geocode: [48.22, 2.3312],
      popUp: "Hello, I am popup 3"
    }
  ]

  const customIcon = new Icon({
    iconUrl: location, 
    iconSize: [38, 38] //size of the icon
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      // className: "custom-maker-cluster",
      iconSize: point(33, 33, true)
    })
  }

  return (
    <>
      <h1>WildLife Tracker</h1>
      <AnimalCards/>
      <MapContainer center={[48, 2.35]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
        {markers.map(marker => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>
              {marker.popUp}
            </Popup>
          </Marker>
        ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  )
}

export default App
