import React, { useState } from "react";

import IngredientForm from "./components/Ingredients/IngredientForm";
import IngredientsList from "./components/Ingredients/IngredientsList";
import BurritoResult from "./components/Submission/BurritoResult";

const App = () => {
  // State for added ingredients
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    setIngredients((prevIngredients) => {
      return [ingredient, ...prevIngredients];
    });
  };
  // Add id to ingredients when added
  const saveIngredientDataHandler = (enteredIngredientData) => {
    const ingredientData = {
      ...enteredIngredientData,
      id: Math.random().toString(),
    };
    addIngredientHandler(ingredientData);
  };
  console.log(ingredients);
  // Remove ingredient by id and return newArray of ingredients
  const deleteIngredientHandler = (id) => {
    const newArray = ingredients.filter((ingredient) => ingredient.id !== id);
    setIngredients(newArray);
  };

  return (
    <div className="App">
      <h1 className="Header">Burrito Loco</h1>
      <IngredientForm onAddIngredient={saveIngredientDataHandler} />
      <IngredientsList
        onDeleteIngredient={deleteIngredientHandler}
        items={ingredients}
      />
      <BurritoResult items={ingredients} />
    </div>
  );
};

export default App;
