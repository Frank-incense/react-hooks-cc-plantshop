import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
const apiUrl = "http://localhost:6001/plants"

function PlantList() {
  const [plants, setPlants] = useState([])
  useEffect(()=>{
    fetch(apiUrl)
    .then(r => r.json())
    .then(plants => setPlants(plants))
  }, [])
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {
        plants.map(plant => {
          return <PlantCard key={plant.id} plant={plant}/>
        })
      }
    </ul>
  );
}

export default PlantList;
