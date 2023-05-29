import React, { useState } from "react";

const BurritoResult = (props) => {

    

  const resultArray = props.items.map((ingredient) => (
    <div>{ingredient.title}</div>
  ))

  var random = resultArray[Math.floor(Math.random() * resultArray.length)];
console.log(random, resultArray[random]);

  return (
    <div>
      <h2>Your Result</h2>
      <div>
      {resultArray}
      {random}
      </div>
    </div>
  );
};

export default BurritoResult;
