import React, { useEffect, useState } from "react";
import patternDivider from "./assets/images/pattern-divider-desktop.svg";
import diceIcon from "./assets/images/icon-dice.svg";
import axios from "axios";
import "./App.scss";

const App = () => {
  const [advice, setAdvice] = useState();

  const clickHandler = () => {
    axios.get(`https://api.adviceslip.com/advice`).then((res) => {
      setAdvice(res.data.slip)
    });
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="items-center px-5 rounded-xl py-5 w-1/3 text-center mt-20">
        <p className="mt-10 text-small uppercase tracking-widest">
        {advice ? `"advice #${advice.id}"` : "Loading..."}
        </p>
        <h1 className="text-3xl my-10">
        {advice ? `"${advice.advice}"` : "Loading..."}
        </h1>
        <img className="m-auto my-10" src={patternDivider} alt="" />
        <button onClick={clickHandler} className="rounded-full flex justify-center mx-auto items-center w-12 h-12">
          <img className="m-0 p-0" src={diceIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default App;
