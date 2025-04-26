import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {

  const [plantslist, setPlantsList] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState(plantslist)

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plants => {
      setPlantsList(plants)
      setFilteredPlants(plants)
    })
  }, []);
  
  function handleUpdate(plant){
    setPlantsList([...plantslist,plant])
    setFilteredPlants([...plantslist,plant])
  }

  function handleSearch(searchTerm) {
    console.log("Searching for:", searchTerm);
    const filtered = plantslist.filter((plant) => {
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    setFilteredPlants(filtered);
  }
  
  return (
    <main>
      <NewPlantForm updatePlants={handleUpdate}  />
      <Search onSearch={handleSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
