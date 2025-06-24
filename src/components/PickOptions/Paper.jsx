import "./PickOptions.css";

import paper from "../../assets/images/icon-paper.svg";

function Paper({ onClick }) {
  return (
    <div className="paper option" onClick={onClick}>
      <div>
        <img src={paper} />
      </div>
    </div>
  );
}

export default Paper;
