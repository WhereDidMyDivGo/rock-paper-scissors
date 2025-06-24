import "./Game.css";

import Rock from "../PickOptions/Rock";
import Paper from "../PickOptions/Paper";
import Scissors from "../PickOptions/Scissors";
import { useState, useEffect } from "react";

function Game({ className, chosenCard }) {
  const cards = [<Rock />, <Paper />, <Scissors />];
  const [houseCard, setHouseCard] = useState(null);

  useEffect(() => {
    if (!chosenCard) return;
    setTimeout(() => {
      let count = 0;
      let interval;

      function rollTheSlotMachine() {
        // randomly select a card from the cards array
        const randIndex = Math.floor(Math.random() * 3);
        const randomCard = cards[randIndex];
        setHouseCard(randomCard);

        count++;

        // stop at count 40 and determine the winner
        if (count >= 40) {
          clearTimeout(interval);
          getWinner(chosenCard, randomCard);
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

  function getWinner(player, house) {
    if (player.type === house.type) {
      console.log("draw");
    } else if ((player.type === Rock && house.type === Scissors) || (player.type === Paper && house.type === Rock) || (player.type === Scissors && house.type === Paper)) {
      console.log("win");
    } else {
      console.log("lose");
    }
  }

  return (
    <div className={`gameDiv ${className}`}>
      <div className="you-picked">
        <h1>YOU PICKED</h1>
        <div className="circle">{chosenCard}</div>
      </div>

      <div className="house-picked">
        <h1>THE HOUSE PICKED</h1>
        <div className="circle">{houseCard}</div>
      </div>
    </div>
  );
}

export default Game;
