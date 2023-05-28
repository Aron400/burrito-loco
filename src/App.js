import React, {useState} from "react";

import IngredientForm from "./components/Ingredients/IngredientForm";
import IngredientCard from "./components/Ingredients/IngredientCard";

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

  const saveIngredientDataHandler = (enteredIngredientData) => {
    const ingredientData = {
        ...enteredIngredientData,
        id: Math.random().toString()
    };
    addIngredientHandler(ingredientData);
};
console.log(ingredients)

  return (
    <div className="App">
      <h1 className="Header">Burrito Loco</h1>
      <IngredientForm onAddIngredient={saveIngredientDataHandler} />
      <IngredientsList items={ingredients} />
    </div>
  );
}

export default App;
