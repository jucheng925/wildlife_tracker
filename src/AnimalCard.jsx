import React, {useState} from 'react'

const AnimalCard = ({animal, setShowMap, showMap, setSelectedMarkers}) => {
  
  const regionsLived = animal.region.join(", ")

  const handleClick = ()=> {
    setShowMap(!showMap)
    fetchMarkers();
  }

  async function fetchMarkers() {
    const speciesName = animal.name === "Pangolin" 
      ? "Manis" 
      : animal.species.replace(/ /g, "+");
    try {
      const response = await fetch(`https://api.gbif.org/v1/occurrence/search?scientificName=${speciesName}&limit=100`)
      const data = await response.json();
      setSelectedMarkers(data.results)
    } catch(error) {
      console.error('Error fetching locations:', error)
    }
  }

  return (
    <div className="card">
      <h3>{animal.name}</h3>
      <h5>{animal.species}</h5>
      <div className='imagecard'>
        <img src={animal.img} alt={animal.name} />
      </div>
      <p><span style={{color:"#de0a26", fontWeight:"bold"}}>{animal.conservation_status}</span></p>

      <p style={{fontSize: "0.8rem"}}>{regionsLived}</p>
      <button onClick={handleClick}>View Location Sighting</button>
    </div>
  )
}

export default AnimalCard
