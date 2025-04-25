import { createContext, useEffect, useState } from "react"

export const PlantContext = createContext();
const apiUrl = "http://localhost:6001/plants";

function PlantContextProvider({children}){
    const [plants, setPlants] = useState([]);

    useEffect(()=>{
        fetch(apiUrl)
        .then(r => r.json())
        .then(plants => setPlants(plants))
      }, [])
    return (
        <PlantContext.Provider value={plants}>
            {children}
        </PlantContext.Provider>
    )
}

export default PlantContextProvider