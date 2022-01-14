import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function VideoViewer() {
  const [video, setVideo] = useState("");
  console.log("VIDEO");
  console.log(video);

  async function fetchRandomVideos() {
    console.log("FATCH RANDOM VIDEOS");
    console.log({ video });

    const response = await fetch(
      "https://v1.nocodeapi.com/bingbong/vimeo/DKRJHhGNcGRIluxb/search?q=funny&page=2&perPage=300"
    );
    const data = await response.json();
    console.log(data);
    setVideo(data);
  }

  const fetch = fetchRandomVideos();
  console.log(fetch);

  useEffect(
    function () {
      setVideo();
    },
    [video]
  );

  return video ? (
    <div id="video-viewer">
      <p>
        This is the name of your video
        <b> {video.data[0].name}</b>
      </p>
      <ReactPlayer url={video.data[0].link} />
    </div>
  ) : (
    <></>
  );
}
export default VideoViewer;
