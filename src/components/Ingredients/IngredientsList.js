import React from "react";

import IngredientCard from "./IngredientCard";
import "./IngredientsList.css";

const IngredientsList = (props) => {
  
  const onDeleteIngredient = (param1) => (event) => props.onDeleteIngredient(param1);
  console.log(props);
  return (
    <ul className="ingredients-list">
      {props.items.map((ingredient) => (
        // <IngredientCard onDeleteIngredient={props.onDeleteIngredient} id={ingredient.id} key={ingredient.id} title={ingredient.title} />
        <li>
            <div>{ingredient.title}</div>
            <button onClick={onDeleteIngredient(ingredient.id)} className="delete-ingredient">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientsList;
