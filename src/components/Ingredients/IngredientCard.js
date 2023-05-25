import React from "react";

import './IngredientCard.css';

const IngredientCard = (props) => {
    return <div className="ingredients-card">
        <li>
            <div>{props.title}</div>
            <button>Delete</button>
        </li>
    </div>
};

export default IngredientCard;