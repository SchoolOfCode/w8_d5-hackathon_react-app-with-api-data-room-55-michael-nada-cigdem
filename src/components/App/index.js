import "./App.css";
import VideoViewer from "../VideoViewer";
import { useState } from "react";
import Logo from "../Logo";

function App() {
  const [randomNumber, setrandomNumber] = useState(
    Math.floor(Math.random() * 20 + 1)
  );

  function getRandomNumber() {
    const number = Math.floor(Math.random() * 20 + 1);
    setrandomNumber(number);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Logo></Logo>
        </div>
        <button className="Button" onClick={getRandomNumber}>
          Random Generator
        </button>
        <VideoViewer randomNumber={randomNumber}></VideoViewer>
        <VideoViewer randomNumber="5"></VideoViewer>
      </header>
    </div>
  );
}

export default App;
