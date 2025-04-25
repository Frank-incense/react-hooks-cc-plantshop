import React, { useContext, useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import { PlantContext } from "./PlantContext";


function PlantList() {
  const plants = useContext(PlantContext)
  
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
