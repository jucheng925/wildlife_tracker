import React from 'react'
import { animals } from './data/animal'

const AnimalCards = () => {
  return (
    <div>
      <p>Pick an animal for more info</p>
      {animals.map((animal)=>{
        return(
        <div>{animal.name}</div>)
      })}
    </div>
  )
}

export default AnimalCards
