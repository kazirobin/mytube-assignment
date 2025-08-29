const VideoMedia = ({ activeVideo }) => {
  const { videoId } = activeVideo.id;
  if (activeVideo.id.kind === "youtube#video") {
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
  } else {
    return <></>;
  }
};

export default VideoMedia;
