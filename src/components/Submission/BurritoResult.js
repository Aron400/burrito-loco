import React, { useState } from "react";

const BurritoResult = (props) => {
    const [newResult, setNewResult] = useState('')
    // const [resultDisplay, setResultDisplay] = useState(false)
  const [enteredNumber, setEnteredNumber] = useState("");

  const resultArray = props.items.map((ingredient) => (
    <li>{ingredient.title}</li>
  ));
  const result = resultArray.slice(0, enteredNumber).map(function () {
    return this.splice(Math.floor(Math.random() * this.length), 1)[0];
  }, resultArray.slice());

  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  const generateBurrito = (event) => {
    event.preventDefault()
setNewResult(result)

  }
  
  console.log(result);
  console.log(enteredNumber)


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
        <button onClick={generateBurrito}>Generate Burrito</button>
      </form>

      <h2>Your Result</h2>
      <div>
        {newResult}
      </div>
    </div>
  );
};

export default BurritoResult;
