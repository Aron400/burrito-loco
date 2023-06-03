import React, {useState} from "react";

import IngredientForm from "./components/Ingredients/IngredientForm";
import IngredientsList from "./components/Ingredients/IngredientsList";
import BurritoResult from "./components/Submission/BurritoResult";

// const DUMMY_ING = [
//   {
//     id: "i1",
//     title: "Steak",
//   },
//   {
//     id: "i2",
//     title: "Cheese",
//   },
// ];

const App = () => {

  const [ingredients, setIngredients] = useState([]);

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

  const deleteIngredientHandler = (id) => {
    const newArray = ingredients.filter(ingredient => ingredient.id !== id);
    console.log(newArray)
    setIngredients(newArray);
    console.log('delete')
  }


  return (
    <div className="App">
      <h1 className="Header">Burrito Loco</h1>
      <IngredientForm onAddIngredient={saveIngredientDataHandler} />
      <IngredientsList onDeleteIngredient={deleteIngredientHandler} items={ingredients} />
      <BurritoResult items={ingredients} />
    </div>
  );
}

export default App;
