import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [isNext, setIsNext] = useState(true);
  const [squres, setSqures] = useState(Array(9).fill(null));

  function winner(squres) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squres[a] && squres[a] === squres[b] && squres[a] === squres[c]) {
        return squres[a];
      }
    }
    return null;
  }

  const handleClick = (i) => {
    if (squres[i]) return;
    if (winner(squres)) {
      isNext ? alert("O Won") : alert(" X Won");
      return;
    }
    const nextSqures = squres.slice();
    if (isNext) {
      nextSqures[i] = "X";
    } else {
      nextSqures[i] = "O";
    }

    setSqures(nextSqures);
    setIsNext(!isNext);
  };

  const resetGame = () => {
    setIsNext(true);
    setSqures(Array(9).fill(null));
  };
  return (
    <div className="squres">
      <Square value={squres[0]} onclickSqure={() => handleClick(0)} />
      <Square value={squres[1]} onclickSqure={() => handleClick(1)} />
      <Square value={squres[2]} onclickSqure={() => handleClick(2)} />
      <Square value={squres[3]} onclickSqure={() => handleClick(3)} />
      <Square value={squres[4]} onclickSqure={() => handleClick(4)} />
      <Square value={squres[5]} onclickSqure={() => handleClick(5)} />
      <Square value={squres[6]} onclickSqure={() => handleClick(6)} />
      <Square value={squres[7]} onclickSqure={() => handleClick(7)} />
      <Square value={squres[8]} onclickSqure={() => handleClick(8)} />
      <button className="btn-reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Board;
