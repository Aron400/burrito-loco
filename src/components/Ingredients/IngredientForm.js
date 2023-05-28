import React, { useState } from "react";

import "./IngredientForm.css";

const IngredientForm = (props) => {
  
    const [enteredName, setEnteredName] = useState("");

    const saveIngredientDataHandler = (enteredIngredientData) => {
        const expenseData = {
            ...enteredIngredientData,
            id: Math.random().toString()
        };
        props.onAddIngredient(expenseData);
    };

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
      };

      const addHandler = (event) => {
        event.preventDefault();
    
        const ingredientData = {
          title: enteredName,
          };
        saveIngredientDataHandler(ingredientData);
        console.log(ingredientData);
        setEnteredName('');     
      };

  return (
    <form onSubmit={addHandler}>
      <div className="new-expense__controls">
        <div className="new=expense__control">
          <label>Ingredient Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button">Clear</button>
        <button type="submit" onClick={addHandler}>Add Ingredient</button>
      </div>
    </form>
  );
};

export default IngredientForm;
