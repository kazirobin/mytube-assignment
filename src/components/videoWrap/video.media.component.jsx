import { Component } from "react";

const VideoMedia = ({ activeVideo }) => {
  if (!activeVideo) {
    return <h1 className="text-white">Please selext a Video </h1>;
  }
  const { videoId } = activeVideo.id;
  return (
    <>
      <iframe
        className="w-full h-96 block"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="3 MUST SEE Amazon Q CLI Vibe Coding Features!"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default VideoMedia;
