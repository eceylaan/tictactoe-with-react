import { useState } from "react";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(new Array(9).fill(null));

  return (
    <>
      <div className="container">
        <div className="app">
          <header>
            <img src="./XO.svg" alt="" />
            <button className="turn-btn"></button>
            <button className="restart-btn"></button>
          </header>
          <Squares squares={squares} />
        </div>
      </div>
    </>
  );
}

function Squares({ squares, setSquares }) {
  const [turn, setTurn] = useState("X");

  function handleClick(index) {
    squares[index] = turn;
    if (turn === "X") {
      setTurn("O");
    }
    setSquares([...squares]);
  }

  return (
    <div className="squares">
      {squares.map((square, index) => (
        <div onClick={() => handleClick(index)} className="square"></div>
      ))}
    </div>
  );
}

export default App;
