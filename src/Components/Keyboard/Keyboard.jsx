import React, { useState } from "react";
import Button from "../Button/Button";
import "../Keyboard/Keyboard.css";

function Keyboard() {
  const [digit, setDigit] = useState(""); // hold state of display
  const [memory, setMemory] = useState(""); // hold memory typed value
  const [operation, setOperation] = useState(""); // state of operation
  const [lastOperation, setLastOperation] = useState(""); // state of last operation
  const [char, setChar] = useState(""); // state of visible operation character

  const handleClick = (e) => {
    // if our display shows 0, we don't want to display another 0 without .
    if (digit === "0" && e.target.value === "0" && digit[1] === undefined) {
      setDigit(digit);
    } else {
      // we don't want to display to much numbers and get out of the bound of number type
      if (digit.length !== 16) {
        // if we have one dot on display we don't want to display another dot
        if (digit.includes(".") === true && e.target.value === ".") {
          setDigit(digit);
        } else {
          // if we click dot on blank dispay we should get "0." instead of "."
          if (digit === "" && e.target.value === ".") {
            setDigit("0.");
          } else {
            setDigit(digit + e.target.value);
          }
        }
      }
    }
  };

  // remove one character from display
  const handleDelete = () => {
    // We can't use delete when we displays a error
    if (digit !== "Can't divide by zero!") {
      setDigit(digit.slice(0, -1));
    }
  };

  const handleOperations = (e) => {
    // if operation is not set and digit is not empty and target value is the same as the operation requested
    if (char !== "+" && digit !== "" && e.target.value === "+") {
      setMemory(parseFloat(digit));
      setOperation("+");
      setChar("+");
      setDigit("");
    }
    if (char !== "-" && digit !== "" && e.target.value === "-") {
      setMemory(parseFloat(digit));
      setOperation("-");
      setChar("-");
      setDigit("");
    }
    if (char !== "/" && digit !== "" && e.target.value === "/") {
      setMemory(parseFloat(digit));
      setOperation("/");
      setChar("/");
      setDigit("");
    }
    if (char !== "*" && digit !== "" && e.target.value === "X") {
      setMemory(parseFloat(digit));
      setOperation("*");
      setChar("*");
      setDigit("");
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

  const handleEqual = () => {
    // checking for operation
    if (operation === "+") {
      // after we click equal we don't have to display the operation character
      setChar("");
      if (lastOperation === "+") {
        // if we click equal once again we use number form memory
        setDigit((memory + parseFloat(digit)).toString());
      } else {
        setDigit((memory + parseFloat(digit)).toString());
        // setting memory after equal
        setMemory(parseFloat(digit));
        // setting last operation after equal to perform correctly once again equal click
        setLastOperation(operation);
      }
    }
    if (operation === "-") {
      setChar("");
      if (lastOperation === "-") {
        setDigit((parseFloat(digit) - memory).toString());
      } else {
        // we need to swap subtraction values because subtraction is not alternates
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
        if (lastOperation === "/") {
          setDigit((parseFloat(digit) / memory).toString());
        } else {
          setDigit((memory / parseFloat(digit)).toString());
          setMemory(parseFloat(digit));
          setLastOperation(operation);
        }
      }
    }
  };

  // array of buttons to generate it on keyboard
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

  // array of generated buttons with clasess, clicks etc.
  const generated = [];

  buttons.forEach((e, i) => {
    // if index of buttons is 3 we need to add special click event for delete button
    if (i === 3) {
      generated.push(
        <Button
          click={handleDelete}
          key={i}
          value={e}
          className="buttonBackground delBg"
        />
      );
    }
    // if index of buttons is 7, 11, 14, 15 we need to add special click event for operations buttons
    else if (i === 7 || i === 11 || i === 14 || i === 15) {
      generated.push(
        <Button
          click={handleOperations}
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
        className="w-full h-1/6 rounded-md mb-4 flex justify-between items-center"
      >
        <p className="ml-3 text-3xl text-white">{char}</p>
        <p className="mr-3 text-3xl text-white">{digit}</p>
      </div>
      <div
        id="keyboard"
        className="grid grid-cols-4 grid-rows-5 h-full gap-4 gap-y-0 w-full items-center text-center rounded-md text-white py-5 px-6 text-3xl"
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
