import "./App.css";
import {VideoViewer ,VideoSearch} from "../VideoViewer";
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
  const [randomNumber1, setrandomNumber1] = useState(
    Math.floor(Math.random() * 20 + 1)
  );

  function getRandomNumber() {
    const number1 = Math.floor(Math.random() * 20 + 1);
    setrandomNumber(number1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Logo></Logo>
        </div>
      </header>

      <div>
       <div id="video-div"><VideoViewer randomNumber={randomNumber}></VideoViewer>
        <button className="Button" onClick={getRandomNumber}>
          Random Generator
        </button></div> 
        <div ><VideoViewer randomNumber="5"></VideoViewer>
        <button className="Button" onClick={getRandomNumber1}>
          Random Generator
        </button></div> 
      </div>
      <VideoSearch randomNumber = {randomNumber1} />
      </div>
      
  )}
     



export default App;
