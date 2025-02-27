"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayer = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
      width="100%"
      height="100%"
    />
  );
};

export default VideoPlayer;
