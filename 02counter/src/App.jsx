import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function addValue() {
    setCounter(counter + 1);
  }

  // function reduceValue() {
  //   setCounter(counter - 1);    // No control on the reduction of counter
  // }

  function reduceValue() {
    counter = counter && counter - 1; // limit after zero it will not reduce further
    setCounter(counter);
  }

  return (
    <>
      <h1>React Counter</h1>
      <h2>Current Value : {counter}</h2>
      <div className="btn-container">
        <button onClick={reduceValue}>-1</button>
        <button onClick={addValue}>+1</button>
      </div>
    </>
  );
}

export default App;
