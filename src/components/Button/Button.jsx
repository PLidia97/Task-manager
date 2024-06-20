import React from "react";
import "./Button.css";

const Button = (props) => {
  return <button className="primaryBtn">{props.text}</button>;
};

export default Button;
