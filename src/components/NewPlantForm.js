import React, { useState } from "react";

function NewPlantForm({updatePlants }) {
 
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: 0.0
  })

  function handleChange(e){
    const {name, value}= e.target
    console.log(newPlant);
    setNewPlant({
      ...newPlant,
      [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(newPlant);
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then(plant => {
      updatePlants(plant);
    }).catch((error) => {
      console.error("Error:", error);
    }
    )
    setNewPlant({
      name: "",
      image: "",
      price: 0.0
    })
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
        value={newPlant.price}
        onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
