import React, { useState } from "react";
import Button from "../Button/Button";
import "../Keyboard/Keyboard.css";

function Keyboard() {
  const [digit, setDigit] = useState(""); // hold state of display
  const [memory, setMemory] = useState(""); // hold memory typed value
  const [operation, setOperation] = useState(""); // state of operation
  const [lastOperation, setLastOperation] = useState(""); // state of last operation
  const [char, setChar] = useState("");

  const handleClick = (e) => {
    // if our display shows 0, we don't want to display another 0 without .
    if (digit === "0" && e.target.value === "0" && digit[1] === undefined) {
      setDigit("0");
    } else {
      if (digit.length !== 25) {
        setDigit(digit + e.target.value);
      }
    }
  };

  // remove one character from display
  const handleDelete = () => {
    if (digit !== "Can't divide by zero!") {
      setDigit(digit.slice(0, -1));
    }
  };

  // resest all states and display
  const handleReset = () => {
    setDigit("");
    setOperation("");
    setMemory("");
    setChar("");
    setLastOperation("");
  };

  const handleSum = () => {
    // if operation is set to "+" we don't need to set the operation once again
    if (char !== "+") {
      setMemory(parseFloat(digit));
      setOperation("+");
      setChar("+");
      setDigit("");
    }
  };

  const handleSubstract = () => {
    if (char !== "-") {
      setMemory(parseFloat(digit));
      setOperation("-");
      setChar("-");
      setDigit("");
    }
  };

  const handleDivide = () => {
    if (char !== "/") {
      setMemory(parseFloat(digit));
      setOperation("/");
      setChar("/");
      setDigit("");
    }
  };

  const handleMultiply = () => {
    if (char !== "*") {
      setMemory(parseFloat(digit));
      setOperation("*");
      setChar("*");
      setDigit("");
    }
  };

  const handleEqual = () => {
    // checking for operation
    if (operation === "+") {
      setChar("");
      if (lastOperation === "+") {
        setDigit((memory + parseFloat(digit)).toString());
      } else {
        setDigit((memory + parseFloat(digit)).toString());
        setMemory(parseFloat(digit));
        setLastOperation(operation);
      }
    }
    if (operation === "-") {
      setChar("");
      if (lastOperation === "-") {
        setDigit((parseFloat(digit) - memory).toString());
      } else {
        setDigit((memory - parseFloat(digit)).toString());
        setMemory(parseFloat(digit));
        setLastOperation(operation);
      }
    }
    if (operation === "*") {
      setChar("");
      if (lastOperation === "*") {
        setDigit((memory * parseFloat(digit)).toString());
      } else {
        setDigit((memory * parseFloat(digit)).toString());
        setMemory(parseFloat(digit));
        setLastOperation(operation);
      }
    }
    if (operation === "/") {
      setChar("");
      if (parseFloat(digit) === 0 || digit === "Can't divide by zero!") {
        setDigit("Can't divide by zero!");
      } else {
        setDigit((memory / parseFloat(digit)).toString());
        if (lastOperation === "/") {
          setDigit((memory / parseFloat(digit)).toString());
        } else {
          setDigit((memory / parseFloat(digit)).toString());
          setMemory(parseFloat(digit));
          setLastOperation(operation);
        }
      }
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
        className="w-full h-1/6 rounded-3xl mb-4 flex justify-between items-center"
      >
        <p className="ml-3 text-3xl text-white">{char}</p>
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
