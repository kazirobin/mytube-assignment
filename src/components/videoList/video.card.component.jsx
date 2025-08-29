const VideoCard = ({ video, handleVideoMedia, activeVideo }) => {
  const {
    title,
    channelTitle,
    publishTime,
    thumbnails: {
      high: { url },
    },
  } = video.snippet;
  const date = new Date(publishTime)
  const options = {
    timeZone: "Asia/Dhaka",
    year:"numeric",
    month:"long",
    day:"numeric"
  }
  const formattedTime = new Intl.DateTimeFormat("en-US",options).format(date)
  // console.log(formattedTime)
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-md cursor-pointer ${
        activeVideo ? "md:grid md:grid-cols-5" : ""
      }`}
      onClick={() => {
        handleVideoMedia(video);
        console.log(video)
      }}
    >
      <img
        src={url}
        alt={title}
        className="w-full h-auto object-cover md:h-full col-span-2 "
      />
      <div className="text-white  flex flex-col col-span-3 pt-2 ps-2">
        <h1 className="text-xl line-clamp-2 font-semibold ">{title}</h1>
        <p className="text-gray-500 font-bold text-sm ">{channelTitle}</p>
        <p className="text-gray-500 font-bold text-sm ">{formattedTime}</p>

      </div>
    </div>
  );
};

export default VideoCard;
