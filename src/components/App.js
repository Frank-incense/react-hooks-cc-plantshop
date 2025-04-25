import React, { useContext } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import PlantContextProvider, { PlantContext } from "./PlantContext";


function App() {
  return (
    <div className="app">
      <PlantContextProvider>
          <Header />
          <PlantPage />
      </PlantContextProvider>
    </div>
  );
}

export default App;
