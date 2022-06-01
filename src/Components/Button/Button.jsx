import React from "react";
import "../Button/Button.css";

function Button(props) {
  return <div className={`calcButton ${props.className}`}>{props.value}</div>;
}

export default Button;
