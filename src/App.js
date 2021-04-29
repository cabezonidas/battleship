import logo from "./logo.svg";
import "./App.css";
import { getRandomGrid } from "./ships";

const grid = getRandomGrid();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <code style={{ display: "grid", gridTemplateColumns: "repeat(10, 30px)" }}>
          {grid.map((row, i) => row.map((r, ii) => <div key={`${i}_${ii}`}>{r || "_"}</div>))}
        </code>
      </header>
    </div>
  );
}

export default App;
