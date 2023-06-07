import React from "react";

import "./IngredientsList.css";
import { BiTrash } from "react-icons/bi";

const IngredientsList = (props) => {
  // Destructure onDeleteIngredient
  const onDeleteIngredient = (param1) => (event) => props.onDeleteIngredient(param1);
  
  return (
    <ul className="ingredients-list">
      {props.items.map((ingredient) => (
        <li className="ingredients-card">
            <div>{ingredient.title}</div>
            <BiTrash onClick={onDeleteIngredient(ingredient.id)} className="delete-ingredient">Delete</BiTrash>
        </li>
      ))}
    </ul>
  );
};

export default IngredientsList;
