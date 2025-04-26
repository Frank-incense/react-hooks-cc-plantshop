import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
  const [plantslist, setPlantsList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plants => setPlantsList(plants))
  }, []);
  
  function handleUpdate(plant){
    setPlantsList([...plantslist,plant])
    console.log(plantslist);
  }
  return (
    <main>
      <NewPlantForm plants={plantslist} updatePlants={handleUpdate}  />
      <Search plants={plantslist}/>
      <PlantList plants={plantslist}/>
    </main>
  );
}

export default PlantPage;
