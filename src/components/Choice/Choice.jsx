import "./Choice.css";

import triangle from "../../assets/images/bg-triangle.svg";
import Rock from "../PickOptions/Rock";
import Paper from "../PickOptions/Paper";
import Scissors from "../PickOptions/Scissors";

function Choice({ className, handleClick }) {
  return (
    <div className={`choice-div ${className}`}>
      <img className="triangle" src={triangle} />
      <Paper onClick={() => handleClick(<Paper />)} />
      <Scissors onClick={() => handleClick(<Scissors />)} />
      <Rock onClick={() => handleClick(<Rock />)} />
    </div>
  );
}

export default Choice;
