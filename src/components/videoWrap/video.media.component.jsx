
const VideoMedia = ({ activeVideo }) => {
  if (!activeVideo) {
    return <h1 className="text-white">Please selext a Video </h1>;
  }
  const { videoId } = activeVideo.id;
  // console.log(activeVideo.id.kind)
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
  }else{
    return (
      <h1 className="text-white">this is a playlist</h1>
    )
  }
};

export default VideoMedia;
