import "./PickOptions.css";

import scissors from "../../assets/images/icon-scissors.svg";

function Scissors({ onClick }) {
  return (
    <div className="scissors option" onClick={onClick}>
      <div>
        <img src={scissors} />
      </div>
    </div>
  );
}

export default Scissors;
