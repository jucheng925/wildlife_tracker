import React from 'react'

const AnimalCard = ({animal}) => {
  const regionsLived = animal.region.join(", ")

  return (
    <div className='card'>
      <h3>{animal.name}</h3>
      <h5>{animal.species}</h5>
      <div className='imagecard'>
        <img src={animal.img} alt={animal.name} />
      </div>
      <p><span style={{color:"#de0a26", fontWeight:"bold"}}>{animal.conservation_status}</span></p>

      <p style={{fontSize: "0.8rem"}}>{regionsLived}</p>
      <button>View Location Sighting</button>
    </div>
  )
}

export default AnimalCard
