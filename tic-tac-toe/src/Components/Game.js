import React from "react";
import Board from "./Board";
import { useState } from "react";

const Game = () => {
  const [turn, setTurn] = useState({ player: false, color: "" });

  const change = () => {
    if (turn.player === false) {
      setTurn({...turn, color: "blacks" });
    } else {
        setTurn({...turn, color: "reds"})
    }
  };
  let handleClick = () => {
      console.log("clicked");
  }

  return (
    <div>
      <h1>{turn.color} "turn" </h1>
      <Board onClick={handleClick}/>
      <button className="restart" onClick={change}>
        restart
      </button>
    </div>
  );
};

export default Game;
