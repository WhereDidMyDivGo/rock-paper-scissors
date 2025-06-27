import "./Game.css";

import Rock from "../PickOptions/Rock";
import Paper from "../PickOptions/Paper";
import Scissors from "../PickOptions/Scissors";
import { useState, useEffect, useRef } from "react";

import tickSound from "../../assets/audio/tick.mp3";
import winSound from "../../assets/audio/win.mp3";
import loseSound from "../../assets/audio/lose.mp3";

function Game({ className, chosenCard, setScore, setShowOptions }) {
  const cards = [<Rock />, <Paper />, <Scissors />];
  const [houseCard, setHouseCard] = useState(null);
  const [result, setResult] = useState(null);

  // refs for mutable values that persist across renders
  const countRef = useRef(0);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!chosenCard) return;
    countRef.current = 0;
    currentIndexRef.current = Math.floor(Math.random() * 3);
    function rollTheSlotMachine() {
      setHouseCard(cards[currentIndexRef.current]);

      countRef.current++;

      // stop at count 40 and determine the winner
      if (countRef.current >= 40) {
        clearTimeout(intervalRef.current);
        getWinner(chosenCard, cards[currentIndexRef.current]);
        // play tick sound
        const tick = new Audio(tickSound);
        tick.play();
        return;
      }

      // move to next index, wrap around
      currentIndexRef.current = (currentIndexRef.current + 1) % 3;

      // play tick sound
      const tick = new Audio(tickSound);
      tick.play();

      // increase delay exponentially as count increases
      const progress = countRef.current / 40;
      const delay = 30 + (400 - 30) * Math.pow(progress, 2.5);
      intervalRef.current = setTimeout(rollTheSlotMachine, delay);
    }
    setTimeout(rollTheSlotMachine, 3000);
    return () => clearTimeout(intervalRef.current);
  }, [chosenCard]);

  function getWinner(player, house) {
    if (player.type === house.type) {
      setResult("draw");
    } else if ((player.type === Rock && house.type === Scissors) || (player.type === Paper && house.type === Rock) || (player.type === Scissors && house.type === Paper)) {
      setResult("win");
      setScore((prev) => prev + 1);
      setTimeout(() => {
        const win = new Audio(winSound);
        win.play();
      }, 1000);
    } else {
      setResult("lose");
      setTimeout(() => {
        const lose = new Audio(loseSound);
        lose.play();
      }, 1000);
    }
  }

  function handleClick() {
    setShowOptions(true);
    setResult(null);
    setHouseCard(null);
  }

  return (
    <div className={`gameDiv ${className} ${!result ? "" : "done-game"}`}>
      <div className="you-picked">
        <h1>YOU PICKED</h1>
        <div className="circle">
          <div className={`picked-card ${result === "win" ? "winner" : ""}`}>{chosenCard}</div>
        </div>
      </div>

      <div className={`result-div ${!result ? "hidden" : ""}`}>
        <h1 className="result">
          {result === "win" && "YOU WIN"}
          {result === "lose" && "YOU LOSE"}
          {result === "draw" && "DRAW"}
        </h1>
        <button onClick={handleClick}>
          <p>PLAY AGAIN</p>
        </button>
      </div>

      <div className="house-picked">
        <h1>THE HOUSE PICKED</h1>
        <div className="circle">
          <div className={`picked-card ${result === "lose" ? "winner" : ""}`}>{houseCard}</div>
        </div>
      </div>
    </div>
  );
}

export default Game;
