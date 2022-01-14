import "./App.css";
import VideoViewer from "../VideoViewer";
import ReactPlayer from "react-player";
import {useState} from 'react'
// import Vimeo from "vimeo";

function App() {
  const [randomNumber, setrandomNumber] = useState(0);
  
  function getRandomNumber() {
    const number = Math.floor(Math.random() * 20 + 1);
    setrandomNumber(number);
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getRandomNumber}>Random Generator</button>
        <VideoViewer randomNumber={randomNumber}></VideoViewer>
        <VideoViewer randomNumber='5'></VideoViewer>
      </header>
    </div>
  );
}

export default App;
