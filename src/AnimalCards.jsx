import React from 'react'
import { animals } from './data/animal'
import AnimalCard from './AnimalCard'

const AnimalCards = () => {
  return (
    <div>
      <p>Pick an animal for more info</p>
      <div className='cards-container'>
      {animals.map(animal=> 
        <AnimalCard key={animal.name} animal={animal}/> 
      )}
      </div>
    </div>
  )
}

export default AnimalCards
