import "./Game.css";

import Rock from "../PickOptions/Rock";
import Paper from "../PickOptions/Paper";
import Scissors from "../PickOptions/Scissors";
import { useState, useEffect } from "react";

function Game({ className, chosenCard }) {
  const cards = [<Rock />, <Paper />, <Scissors />];
  const [randomCard, setRandomCard] = useState(null);

  useEffect(() => {
    if (!chosenCard) return;
    setTimeout(() => {
      let count = 0;
      let interval;
      function rollTheSlotMachine() {
        randomShuffle();
        count++;
        if (count >= 40) {
          clearTimeout(interval);
          return;
        }
        // increase delay exponentially as count increases
        const progress = count / 40;
        const delay = 30 + (400 - 30) * Math.pow(progress, 2.5);
        interval = setTimeout(rollTheSlotMachine, delay);
      }
      rollTheSlotMachine();
    }, 1000);

    return () => clearInterval(interval);
  }, [chosenCard]);

  function randomShuffle() {
    const rand = Math.floor(Math.random() * cards.length);
    setRandomCard(cards[rand]);
  }

  const winner = getWinner(chosenCard, randomCard);

  return (
    <div className={`gameDiv ${className}`}>
      <div className="you-picked">
        <h1>YOU PICKED</h1>
        <div className="circle">{chosenCard}</div>
      </div>

      <div className="house-picked">
        <h1>THE HOUSE PICKED</h1>
        <div className="circle">{randomCard}</div>
      </div>
    </div>
  );
}

export default Game;
