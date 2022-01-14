import "./App.css";
import {VideoViewer} from "../VideoViewer";
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
      </header>

      <div>
       <div id="video-div"><VideoViewer randomNumber={randomNumber}></VideoViewer>
        <button className="Button" onClick={getRandomNumber}>
          Random Generator
        </button></div> 
        <div ><VideoViewer randomNumber="5"></VideoViewer>
        <button className="Button" onClick={getRandomNumber}>
          Random Generator
        </button></div> 
      </div>
      </div>
  )}
     



export default App;
