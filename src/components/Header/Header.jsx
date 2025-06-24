import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="headerDiv">
        <main>
          <h1 className="title">ROCK PAPER SCISSORS</h1>

          <div>
            <p>SCORE</p>
            <h1 className="score">0</h1>
          </div>
        </main>
      </div>
    </>
  );
};

export default Header;
