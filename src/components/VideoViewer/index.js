import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export function VideoViewer({randomNumber}) {
  const [video, setVideo] = useState("");
  
  console.log("VIDEO");
  console.log(video);

  async function fetchRandomVideos() {
    const response = await fetch(
      "https://v1.nocodeapi.com/bingbong1/vimeo/BYfvnfkIFBDxbljy/search?q=funny&page=1&perPage=5"
    );
    const data = await response.json();
    console.log("THIS IS OUR DATA",data);
    setVideo(data);
  }
  

  useEffect(
    function () {
      fetchRandomVideos();
    },
    []
  );

  return video ? (
    <div id="video-viewer">
      <p>
        This is the name of your video
        <b> {video.data[randomNumber].name}</b>
      </p>
      <ReactPlayer url={video.data[randomNumber].link} />
      {/* <ReactPlayer url={video.data[randomNumber].link} />
      <ReactPlayer url={video.data[randomNumber].link} /> */}
    </div>
  ) : (
    <></>
  );
}

export function VideoSearch({randomNumber, input}) {
  const [video, setVideo] = useState("");
  
  console.log("VIDEO");
  console.log(video);

  async function fetchRandomVideos() {
    const response = await fetch(
      `https://v1.nocodeapi.com/bingbong1/vimeo/BYfvnfkIFBDxbljy/search?q=${input}&page=1&perPage=5`
    );
    const data = await response.json();
    console.log("THIS IS OUR DATA",data);
    setVideo(data);
  }
  useEffect(
    function () {
      fetchRandomVideos();
    },
    []
  );

  return video ? (
    <div id="video-viewer">
      <p>
        This is the name of your video
        <b> {video.data[randomNumber].name}</b>
      </p>
      <ReactPlayer url={video.data[randomNumber].link} />
    </div>
  ) : (
    <></>
  );
}
