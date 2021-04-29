import logo from "./logo.svg";
import "./App.css";
import { getRandomGrid } from "./ships";
import React from "react";

function App() {
  const [grid, setGrid] = React.useState(getRandomGrid());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <code style={{ display: "grid", gridTemplateColumns: "repeat(10, 30px)" }}>
          {grid.map((row, i) => row.map((r, ii) => <div key={`${i}_${ii}`}>{r || "_"}</div>))}
        </code>
        <button onClick={() => setGrid(getRandomGrid())}>Shuffle</button>
      </header>
    </div>
  );
}

export default App;
