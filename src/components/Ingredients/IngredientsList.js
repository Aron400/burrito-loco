import React from "react";

import IngredientCard from "./IngredientCard";
import "./IngredientsList.css";

const IngredientsList = (props) => {
  return (
    <ul className="ingredients-list">
      {props.items.map((ingredient) => (
        <IngredientCard key={ingredient.id} title={ingredient.title} />
      ))}
    </ul>
  );
};

export default IngredientsList;
