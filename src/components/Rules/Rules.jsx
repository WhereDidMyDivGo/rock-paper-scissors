import "./Rules.css";

import closeIcon from "../../assets/images/icon-close.svg";
import rulesImage from "../../assets/images/image-rules.svg";

import { useState, useRef } from "react";

function Rules() {
  const [openRules, setOpenRules] = useState(false);
  const modalRef = useRef(null);

  function clickHandler(e) {
    if (e.target === e.currentTarget) {
      setOpenRules(false);
    }
  }

  return (
    <div className="rulesDiv">
      <button className="rules-button" onClick={() => setOpenRules(true)}>
        <p>RULES</p>
      </button>

      <div className={`modal-wrapper ${openRules ? "" : "hidden"}`} onClick={clickHandler}>
        <div className="rules-modal" ref={modalRef}>
          <div className="rules-title">
            <h1>RULES</h1>
            <button onClick={() => setOpenRules(false)}>
              <img src={closeIcon} />
            </button>
          </div>
          <img className="rules-image" src={rulesImage} />
        </div>
      </div>
    </div>
  );
}

export default Rules;
