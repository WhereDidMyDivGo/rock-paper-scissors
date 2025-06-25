import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import { useState } from "react";

function App() {

  const [score, setScore] = useState(0);

  return (
    <>
      <div className="app">
        <Header score={score} />

        <Main setScore={setScore} />
      </div>
    </>
  );
}

export default App;
