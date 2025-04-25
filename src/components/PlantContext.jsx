import { createContext, useState } from "react"

const PlantContext = createContext()

function PlantContextProvider({children}){
    const [plants, setPlants] = useState([])
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