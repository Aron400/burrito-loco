import React, {useState} from "react";

import IngredientCard from "./components/Ingredients/IngredientCard";
import "./App.css";
import IngredientsList from "./components/Ingredients/IngredientsList";

const DUMMY_ING = [
  {
    id: "i1",
    title: "Steak",
  },
  {
    id: "i2",
    title: "Cheese",
  },
];

const App = () => {

  const [ingredients, setIngredients] = useState(DUMMY_ING);

  const addIngredientHandler = ingredient => {
    setIngredients((prevIngredients) => {
      return [ingredient, ...prevIngredients]
    })
  }

  return (
    <div className="App">
      <h1 className="Header">Burrito Loco</h1>
      <IngredientsList items={DUMMY_ING} />
    </div>
  );
}

export default App;
