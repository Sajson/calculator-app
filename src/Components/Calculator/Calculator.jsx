import React from "react";
import Header from "../Header/Header";
import Display from "../Display/Display";
import Keyboard from "../Keyboard/Keyboard";
import "./Calculator.css";

function Calculator() {
  return (
    <div
      id="calcWrapper"
      className="flex flex-col items-center justify-center h-screen"
    >
      <div id="calculator" className="w-1/3 flex flex-col items-center h-3/4">
        <Header />
        <Display />
        <Keyboard />
      </div>
    </div>
  );
}

export default Calculator;
