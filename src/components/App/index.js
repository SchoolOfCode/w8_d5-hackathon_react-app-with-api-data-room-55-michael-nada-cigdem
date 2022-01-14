import "./App.css";
import VideoViewer from "../VideoViewer";
import ReactPlayer from "react-player";
// import Vimeo from "vimeo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoViewer></VideoViewer>
      </header>
    </div>
  );
}

export default App;
