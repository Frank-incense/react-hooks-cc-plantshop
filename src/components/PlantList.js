import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {
        plants.length > 0 ?
        plants.map(plant => {
          return <PlantCard key={plant.id} plant={plant}/>
        })
        :
        <h1>Loading...</h1>
      }
    </ul>
  );
}

export default PlantList;
