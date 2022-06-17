import React from "react";
import Header from "../Header/Header";
import Keyboard from "../Keyboard/Keyboard";
import "./Calculator.css";

function Calculator() {
  return (
    <div
      id="calcWrapper"
      className="flex flex-col items-center justify-center h-screen"
    >
      <div id="calculator" className="flex flex-col items-center h-3/4">
        <Header />
        <Keyboard />
      </div>
    </div>
  );
}

export default Calculator;
