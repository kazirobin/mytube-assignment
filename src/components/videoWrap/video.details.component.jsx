const VideoDetails = ({ activeVideo }) => {
  const { title, channelTitle, description ,publishTime} = activeVideo.snippet;
    const date = new Date(publishTime)
  const options = {
    timeZone: "Asia/Dhaka",
    year:"numeric",
    month:"long",
    day:"numeric",
    hour:"2-digit",
    minute:"2-digit"
  }
  const formattedTime = new Intl.DateTimeFormat("en-US",options).format(date)
  return (
    <>
      <div className="text-white ">
        <h1 className="font-bold text-xl pt-4">{title}</h1>
        <h1 className="font-bold text-sm text-gray-400 py-4">{channelTitle}</h1>
        <p className="bg-gray-800 p-2 my-2 rounded">{formattedTime}</p>
        <p className="bg-gray-800 p-2 my-2 rounded">{description}</p>
      </div>
    </>
  );
};

export default VideoDetails;
