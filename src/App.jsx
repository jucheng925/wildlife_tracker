import { useState } from 'react'
import location from './assets/location.png'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { Icon, divIcon, point } from 'leaflet'

import 'leaflet/dist/leaflet.css'
import './App.css'
import AnimalCards from './AnimalCards'

function App() {
  const [selectedMarkers, setSelectedMarkers] = useState([])


  const customIcon = new Icon({
    iconUrl: location, 
    iconSize: [38, 38] //size of the icon
  })

  // const createCustomClusterIcon = (cluster) => {
  //   return new divIcon({
  //     html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
  //     iconSize: point(33, 33, true)
  //   })
  // }

  return (
    <>
      <div className='heading'>
        <h1>WildLife Tracker</h1>
        <h2>The 10 Rarest and Most Elusive Wild Animals</h2>
      </div>

      <div className='container'>
      <AnimalCards 
        setSelectedMarkers={setSelectedMarkers}
      />

      <MapContainer center={[0, 0]} zoom={3}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          // iconCreateFunction={createCustomClusterIcon}
        >

        {selectedMarkers.length > 0 && (
          selectedMarkers.map((result, index) => {
            const {decimalLatitude, decimalLongitude, eventDate } = result;

            if (decimalLatitude !== undefined && decimalLongitude !== undefined) {
              return (
                <Marker 
                  key={index}
                  position={[decimalLatitude, decimalLongitude]}
                  icon={customIcon}
                >
                  <Popup>
                    <p>Sighted on {eventDate || "Unknown date"}</p>
                  </Popup>
                </Marker>
              );
            } else {
              console.warn(`Invalid coordinates for marker at index ${index}`);
              return null; // Skip rendering this marker if coordinates are invalid
            }
          })
        )}
        </MarkerClusterGroup>
      </MapContainer>
      </div>
    </>
  )
}

export default App
