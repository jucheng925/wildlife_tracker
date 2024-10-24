import React from 'react'
import { animals } from './data/animal'
import AnimalCard from './AnimalCard'

const AnimalCards = ({setSelectedMarkers}) => {
  return (
    <div className="cards-container">
      {animals.map(animal=> 
        <AnimalCard 
          key={animal.name} 
          animal={animal}
          setSelectedMarkers={setSelectedMarkers}
        /> 
      )}
    </div>
  )
}

export default AnimalCards
