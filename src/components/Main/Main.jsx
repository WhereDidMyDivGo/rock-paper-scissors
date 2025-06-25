import "./Main.css";

import { useState } from "react";
import Choice from "../Choice/Choice";
import Game from "../Game/Game";
import Rules from "../Rules/Rules";

function Main({ setScore }) {
  const [showOptions, setShowOptions] = useState(true);
  const [chosenCard, setChosenCard] = useState(null);

  const handleClick = (card) => {
    setShowOptions(false);
    setChosenCard(card);
  };

  return (
    <>
      <div className="main-container">
        <Choice className={`${showOptions ? "" : "hidden"}`} handleClick={handleClick} />
        <Game className={`${showOptions ? "hidden" : ""}`} chosenCard={chosenCard} setScore={setScore} setShowOptions={setShowOptions} />
        <Rules />
      </div>
    </>
  );
}

export default Main;
