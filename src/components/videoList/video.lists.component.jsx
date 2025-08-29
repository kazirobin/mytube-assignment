import VideoCard from "./video.card.component";
const VideoLists = ({ videoList, handleVideoMedia, activeVideo,handleMaxResults,isPlaylistMode }) => {
  return (
    <>
      <div className="text-white flex flex-wrap">
        {videoList.length < 1
          ? "Please search at first..."
          : videoList.map((video, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    activeVideo ? "md:w-full" : "w-full md:w-1/3"
                  } sm:w-1/2 p-2 `}
                >
                  <VideoCard
                    key={index}
                    video={video}
                    handleVideoMedia={handleVideoMedia}
                    activeVideo={activeVideo}
                  />
                </div>
              );
            })}
      </div>
{!isPlaylistMode &&

      <div className="pt-14 pb-12 flex justify-center">
        <button onClick={handleMaxResults} className="cursor-pointer text-white text-xl border-2 border-full border-red-300 hover:border-green-500 flex justify-center items-center rounded-full px-6 py-2 ">
          Load More...
        </button>
      </div>
}

    </>
  );
};

export default VideoLists;
