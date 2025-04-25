import React, { useContext, useState } from "react";
import { PlantContext } from "./PlantContext";

function NewPlantForm() {
  const plants = useContext(PlantContext);
  const id = plants.length;
  const [newPlant, setNewPlant] = useState({
    id: 0,
    name: "",
    image: "",
    price: 0.0
  })

  function handleChange(e){
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(e)
    fetch()
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name"
        value={newPlant.name} 
        onChange={handleChange}
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={newPlant.image}
        onChange={handleChange}
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value={newPlant.image}
        onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
