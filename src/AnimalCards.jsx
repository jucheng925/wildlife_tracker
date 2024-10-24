import React from 'react'
import { animals } from './data/animal'
import AnimalCard from './AnimalCard'

const AnimalCards = () => {
  return (
    <div className='cards-container'>
      {animals.map(animal=> 
        <AnimalCard key={animal.name} animal={animal}/> 
      )}
    </div>
  )
}

export default AnimalCards
