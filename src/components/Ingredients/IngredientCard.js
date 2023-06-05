import React from "react";

import './IngredientCard.css';

const IngredientCard = (props) => {
    return <div className="ingredients-card">
        <li>
            <div>{props.title}</div>
            <div>{props.id}</div>
            <button onClick={props.onDeleteIngredient} className="delete-ingredient">Delete</button>
        </li>
    </div>
};

export default IngredientCard;