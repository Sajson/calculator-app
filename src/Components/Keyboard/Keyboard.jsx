import React from "react";
import Button from "../Button/Button";

function Keyboard() {
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
    generated.push(<Button key={i} value={e} />);
  });

  return (
    <div
      id="keyboard"
      className="grid grid-cols-4 grid-rows-5 gap-4 h-full w-full items-center text-center"
    >
      {generated}
      <Button value="RESET" className="col-span-2" />
      <Button value="=" className="col-span-2" />
    </div>
  );
}

export default Keyboard;
