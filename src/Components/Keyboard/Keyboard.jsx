import React, { useState } from "react";
import Button from "../Button/Button";
import "../Keyboard/Keyboard.css";

function Keyboard(props) {
  const [digit, setDigit] = useState("");
  const [first, setFirst] = useState();
  const [result, setResult] = useState();

  const handleClick = (e) => {
    if (digit[0] === "0" && e.target.value === "0") {
      setDigit("0");
    } else if (digit[0] === "0") {
      setDigit(digit.slice(0, 0));
      setDigit(digit + e.target.value);
    } else {
      setDigit(digit + e.target.value);
    }
  };

  const handleDelete = () => {
    setDigit(digit.slice(0, -1));
  };

  const handleReset = () => {
    setDigit("");
  };

  const handleSum = () => {
    setFirst(Number(digit));
    setDigit("+ ");
  };

  const handleEqual = () => {
    setDigit();
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
        <Button click={handleSum} value="=" className="col-span-2 equalsBg" />
      </div>
    </React.Fragment>
  );
}

export default Keyboard;
