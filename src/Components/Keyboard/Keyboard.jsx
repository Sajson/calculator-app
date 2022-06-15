import React, { useState } from "react";
import Button from "../Button/Button";
import "../Keyboard/Keyboard.css";

function Keyboard(props) {
  const [digit, setDigit] = useState("");
  const [first, setFirst] = useState();
  const [operation, setOperation] = useState("");

  const handleClick = (e) => {
    if (digit[0] === "0" && e.target.value === "0" && digit[1] === undefined) {
      setDigit("0");
    } else {
      setDigit(digit + e.target.value);
    }
  };

  const handleDelete = () => {
    setDigit(digit.slice(0, -1));
  };

  const handleReset = () => {
    setDigit("");
    setOperation("");
    setFirst("");
  };

  const handleSum = () => {
    setFirst(Number(digit));
    setOperation("+");
    setDigit("+ ");
  };

  const handleSubstract = () => {
    setFirst(Number(digit));
    setOperation("-");
    setDigit("- ");
  };

  const handleDivide = () => {
    setFirst(Number(digit));
    setOperation("/");
    setDigit("/ ");
  };

  const handleMultiply = () => {
    setFirst(Number(digit));
    setOperation("*");
    setDigit("* ");
  };

  const handleEqual = () => {
    if (operation === "+") {
      setDigit((first + Number(digit.slice(-2))).toString());
    }
    if (operation === "-") {
      setDigit((first - Number(digit.slice(-2))).toString());
    }
    if (operation === "*") {
      setDigit((first * Number(digit.slice(-2))).toString());
    }
    if (operation === "/") {
      setDigit((first / Number(digit.slice(-2))).toString());
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "X",
  ];

  const generated = [];

  buttons.forEach((e, i) => {
    if (i === 3) {
      generated.push(
        <Button
          click={handleDelete}
          key={i}
          value={e}
          className="buttonBackground delBg"
        />
      );
    } else if (i === 7) {
      generated.push(
        <Button
          click={handleSum}
          key={i}
          value={e}
          className="buttonBackground"
        />
      );
    } else if (i === 11) {
      generated.push(
        <Button
          click={handleSubstract}
          key={i}
          value={e}
          className="buttonBackground"
        />
      );
    } else if (i === 14) {
      generated.push(
        <Button
          click={handleDivide}
          key={i}
          value={e}
          className="buttonBackground"
        />
      );
    } else if (i === 15) {
      generated.push(
        <Button
          click={handleMultiply}
          key={i}
          value={e}
          className="buttonBackground"
        />
      );
    } else {
      generated.push(
        <Button
          click={handleClick}
          key={i}
          value={e}
          className="buttonBackground"
        />
      );
    }
  });

  return (
    <React.Fragment>
      <div
        id="calcDisplay"
        className="w-full h-1/6 rounded-3xl mb-4 flex justify-end items-center"
      >
        <p className="mr-3 text-3xl text-white">{digit}</p>
      </div>
      <div
        id="keyboard"
        className="grid grid-cols-4 grid-rows-5 h-full gap-4 gap-y-0 w-full items-center text-center rounded-3xl text-white p-4 text-3xl"
      >
        {generated}
        <Button
          click={handleReset}
          value="RESET"
          className="col-span-2 resetBg"
        />
        <Button click={handleEqual} value="=" className="col-span-2 equalsBg" />
      </div>
    </React.Fragment>
  );
}

export default Keyboard;
