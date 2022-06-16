import React, { useState } from "react";
import Button from "../Button/Button";
import "../Keyboard/Keyboard.css";

function Keyboard() {
  const [digit, setDigit] = useState(""); // hold state of display
  const [first, setFirst] = useState(""); // hold first typed value
  const [second, setSecond] = useState(""); // hold second typed value
  const [operation, setOperation] = useState(""); // state of operation
  const [lastOperation, setLastOperation] = useState(""); // state of last operation

  const handleClick = (e) => {
    // if our display shows 0, we don't want to display another 0 without .
    if (digit[0] === "0" && e.target.value === "0" && digit[1] === undefined) {
      setDigit("0");
    } else {
      setDigit(digit + e.target.value);
    }
  };

  // remove one character from display
  const handleDelete = () => {
    setDigit(digit.slice(0, -1));
  };

  // resest all states and display
  const handleReset = () => {
    setDigit("");
    setOperation("");
    setFirst("");
    setSecond("");
    setLastOperation("");
  };

  const handleSum = () => {
    // if operation is set to "+" we don't need to set the operation once again
    if (operation !== "+") {
      setFirst(parseFloat(digit));
      setOperation("+");
      setDigit("+ ");
    }
  };

  const handleSubstract = () => {
    if (operation !== "-") {
      setFirst(parseFloat(digit));
      setOperation("-");
      setDigit("- ");
    }
  };

  const handleDivide = () => {
    if (operation !== "/") {
      setFirst(parseFloat(digit));
      setOperation("/");
      setDigit("/ ");
    }
  };

  const handleMultiply = () => {
    if (operation !== "*") {
      setFirst(parseFloat(digit));
      setOperation("*");
      setDigit("* ");
    }
  };

  const handleEqual = () => {
    // checking for operation
    if (operation === "+" || lastOperation === "+") {
      if (operation === "+") {
        setLastOperation(operation);
        setOperation("");
      } else {
        setLastOperation("+");
      }
      // if we don't have in memory second argument passed to calculator, we need to pass it to our second state
      if (second === "") {
        setDigit((first + parseFloat(digit.slice(-2))).toString()); // slice method is used to delete operation character from string
        let temp = parseFloat(digit.slice(-2));
        setSecond(temp);
      } else {
        if (digit.includes("+ ")) {
          setSecond("");
          setDigit((first + parseFloat(digit.slice(-2))).toString());
          setSecond(parseFloat(digit.slice(-2)));
        } else {
          setDigit((parseFloat(digit) + second).toString());
        }
      }
    }
    if (operation === "-" || lastOperation === "-") {
      if (operation === "-") {
        setLastOperation(operation);
        setOperation("");
      } else {
        setLastOperation("-");
      }
      if (second === "") {
        setDigit((first - parseFloat(digit.slice(-2))).toString());
        let temp = parseFloat(digit.slice(-2));
        setSecond(temp);
      } else {
        if (digit.includes("- ")) {
          setSecond("");
          setDigit((first - parseFloat(digit.slice(-2))).toString());
          setSecond(parseFloat(digit.slice(-2)));
        } else {
          setDigit((parseFloat(digit) - parseFloat(second)).toString());
        }
      }
    }
    if (operation === "*" || lastOperation === "*") {
      if (operation === "*") {
        setLastOperation(operation);
        setOperation("");
      } else {
        setLastOperation("*");
      }
      if (second === "") {
        setDigit((first * parseFloat(digit.slice(-2))).toString()); // slice method is used to delete operation character from string
        let temp = parseFloat(digit.slice(-2));
        setSecond(temp);
      } else {
        if (digit.includes("* ")) {
          setSecond("");
          setDigit((first * parseFloat(digit.slice(-2))).toString());
          setSecond(parseFloat(digit.slice(-2)));
        } else {
          setDigit((parseFloat(digit) * second).toString());
        }
      }
    }
    if (operation === "/" || lastOperation === "/") {
      if (operation === "/") {
        setLastOperation(operation);
        setOperation("");
      } else {
        setLastOperation("/");
      }
      if (second === "") {
        setDigit((first / parseFloat(digit.slice(-2))).toString()); // slice method is used to delete operation character from string
        let temp = parseFloat(digit.slice(-2));
        setSecond(temp);
      } else {
        if (digit.includes("/ ")) {
          setSecond("");
          setDigit((first / parseFloat(digit.slice(-2))).toString());
          setSecond(parseFloat(digit.slice(-2)));
        } else {
          setDigit((parseFloat(digit) / second).toString());
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
