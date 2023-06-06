import React, { useState } from "react";

import "./IngredientForm.css";

const IngredientForm = (props) => {

  const [enteredName, setEnteredName] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    const ingredientData = {
      title: enteredName,
    };
    // saveIngredientDataHandler from App.js
    props.onAddIngredient(ingredientData);
    console.log(ingredientData);
    setEnteredName("");
  };

  const clearHandler = (event) => {
    event.preventDefault();
    setEnteredName("");
  };

  return (
    <form onSubmit={addHandler}>
      <div className="new-ingredient__controls">
        <div className="new-ingredient__control">
          <label>Ingredient Name: </label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
      </div>
      <div className="new-ingredient__actions">
        <button type="button" onClick={clearHandler}>
          Clear
        </button>
        <button type="submit" onClick={addHandler}>
          Add Ingredient
        </button>
      </div>
    </form>
  );
};

export default IngredientForm;
