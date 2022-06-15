import React from "react";
import "../Button/Button.css";

function Button(props) {
  return (
    <div
      className={`calcButton w-full h-3/5 rounded-2xl flex justify-center items-center ${props.className}`}
    >
      <input
        value={props.value}
        type="button"
        onClick={props.click}
        className="mt-1"
      />
    </div>
  );
}

export default Button;
