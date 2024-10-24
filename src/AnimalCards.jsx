import React from 'react'
import { animals } from './data/animal'
import AnimalCard from './AnimalCard'

const AnimalCards = ({setShowMap, showMap, setSelectedMarkers}) => {
  return (
    <div className='cards-container'>
      {animals.map(animal=> 
        <AnimalCard 
          key={animal.name} 
          animal={animal}
          showMap={showMap}
          setShowMap={setShowMap}
          setSelectedMarkers={setSelectedMarkers}
        /> 
      )}
    </div>
  )
}

export default AnimalCards
