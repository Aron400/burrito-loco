import React, { useState, useRef } from "react";

import "./BurritoResult.css";

const BurritoResult = (props) => {
  const [newResult, setNewResult] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");

  const resultArray = props.items.map((ingredient) => (
    <li className="result-card">{ingredient.title}</li>
  ));
  const result = resultArray.slice(0, enteredNumber).map(function () {
    return this.splice(Math.floor(Math.random() * this.length), 1)[0];
  }, resultArray.slice());

  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  const generateBurrito = (event) => {
    event.preventDefault();
    setNewResult(result);
    scrollToElement();
  };

  const testRef = useRef(null);

  const scrollToElement = () => {
    testRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  console.log(result);
  console.log(enteredNumber);

  return (
    <div>
      <form>
        <div>
          <label>Amount of final items:</label>
          <input
            type="number"
            value={enteredNumber}
            onChange={numberChangeHandler}
          ></input>
        </div>
        <button className="burrito-randomizer" onClick={generateBurrito}>
          Generate Burrito
        </button>
      </form>

      <h2>Your Burrito Result</h2>
      <div>Your Burrito Contains</div>
      <div className="result-list">
        <ul>{newResult}</ul>
        
      </div>
      <div ref={testRef} />
    </div>
  );
};

export default BurritoResult;
