import React from "react";
import { useState } from "react";
import Map from "./Map"; 
import "./App.css"; 
import SideMenu from "./SideMenu";
import { markers } from "./data";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([
    "Académico",
    "Cultural",
    "Deportivo",
    "Recreativo",
    "Bienestar",
  ]);

  const updateCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  return (
    <div className="App">
      <SideMenu
        selectedCategories={selectedCategories}
        updateCategory={updateCategory}
      />
      <Map selectedCategories={selectedCategories} markers={markers} />
    </div>
  );
}

export default App;
