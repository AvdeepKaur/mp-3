import React from "react";
import useCalculator from "../hooks/useCalculator.ts";

export default function Calculator({}: {}) {
  const {
    first,
    second,
    result,
    setFirst,
    setSecond,
    add,
    subtract,
    multiply,
    divide,
    power,
    clear,
  } = useCalculator();

  return (
    <main>
      <div className="calculator-container">
        <h3>Let's Calculate!</h3>
        <input
          type="number"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <input
          type="number"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
        <div className="calculator-buttons">
          <button onClick={add}>+</button>
          <button onClick={subtract}>−</button>
          <button onClick={multiply}>×</button>
          <button onClick={divide}>÷</button>
          <button onClick={power}>^</button>
          <button className="clear-button" onClick={clear}>
            C
          </button>
        </div>
        <div
          className={`calculator-output ${
            typeof result === "number" && result < 0 ? "negative-result" : ""
          }`}
        >
          {result !== null ? result : ""}
        </div>
      </div>
    </main>
  );
}
