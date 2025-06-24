import "./Main.css";

import triangle from "../../assets/images/bg-triangle.svg";

import Rock from "../PickOptions/Rock";
import Paper from "../PickOptions/Paper";
import Scissors from "../PickOptions/Scissors";
import Rules from "../Rules/Rules";

function Main() {
  return (
    <>
      <div className="main-container">
        <div className="wrapper">
          <img className="triangle" src={triangle} />
          <Paper />
          <Scissors />
          <Rock />
        </div>

        <Rules />
      </div>
    </>
  );
}

export default Main;
