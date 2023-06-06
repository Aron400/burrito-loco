import React from "react";

import "./IngredientsList.css";

const IngredientsList = (props) => {
  // Destructure onDeleteIngredient
  const onDeleteIngredient = (param1) => (event) => props.onDeleteIngredient(param1);
  
  return (
    <ul className="ingredients-list">
      {props.items.map((ingredient) => (
        <li className="ingredients-card">
            <div>{ingredient.title}</div>
            <button onClick={onDeleteIngredient(ingredient.id)} className="delete-ingredient">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientsList;
