import React from "react";

function Display(props) {
  return (
    <div
      id="calcDisplay"
      className="w-full h-1/6 rounded-3xl mb-4 flex justify-end items-center"
    >
      <p className="mr-3 text-3xl text-white">{props.numbers}</p>
    </div>
  );
}

export default Display;
