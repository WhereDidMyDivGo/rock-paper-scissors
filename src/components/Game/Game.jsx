import "./Game.css";

function Game({ className, chosenCard }) {
  return (
    <div className={`gameDiv ${className}`}>
      <div className="you-picked">
        <h1>YOU PICKED</h1>
        <div className="circle">{chosenCard}</div>
      </div>

      <div className="house-picked">
        <h1>THE HOUSE PICKED</h1>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Game;
