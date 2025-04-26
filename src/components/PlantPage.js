import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {

  const [plantslist, setPlantsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plants => {
      setPlantsList(plants)
    })
  }, []);
  
  function handleUpdate(plant){
    setPlantsList([...plantslist,plant])
  }

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
    
  }
  const filtered = plantslist.filter((plant) => {
    if(plant.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
  });
  
  return (
    <main>
      <NewPlantForm updatePlants={handleUpdate}  />
      <Search onSearch={handleSearch}/>
      <PlantList plants={filtered}/>
    </main>
  );
}

export default PlantPage;
