import "./PickOptions.css";

import rock from "../../assets/images/icon-rock.svg";

function Rock({ onClick }) {
  return (
    <div className="rock option" onClick={onClick}>
      <div>
        <img src={rock} />
      </div>
    </div>
  );
}

export default Rock;
