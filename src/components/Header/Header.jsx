import "./Header.css";

const Header = ({ score }) => {
  return (
    <>
      <div className="headerDiv">
        <main>
          <h1 className="title">ROCK PAPER SCISSORS</h1>

          <div>
            <p>SCORE</p>
            <h1 className="score">{score}</h1>
          </div>
        </main>
      </div>
    </>
  );
};

export default Header;
