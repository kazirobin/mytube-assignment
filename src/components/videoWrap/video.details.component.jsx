
const VideoDetails = ({ activeVideo }) => {
  if (!activeVideo) {
    return <h1 className="text-white">Please selext a Video </h1>;
  }
  const { title, channelTitle, description } = activeVideo.snippet;
  return (
    <>
      <div className="text-white ">
        <h1 className="font-bold text-xl pt-4">{title}</h1>
        <h1 className="font-bold text-sm text-gray-400 py-4">{channelTitle}</h1>
        <p className="bg-gray-800 p-2 my-2 rounded">{description}</p>
      </div>
    </>
  );
};

export default VideoDetails;
