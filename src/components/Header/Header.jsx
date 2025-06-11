import "./Header.css";

import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <>
      <div className="headerDiv">
        <main>
          <img src={logo} />

          <div>
            <p>SCORE</p>
            <h1>12</h1>
          </div>
        </main>
      </div>
    </>
  );
};

export default Header;
