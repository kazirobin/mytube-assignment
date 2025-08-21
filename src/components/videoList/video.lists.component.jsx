import { Component } from "react";
import VideoCard from "./video.card.component";
class VideoLists extends Component {
  render() {
    const { videoList, handleVideoMedia, activeVideo } = this.props;
    return (
      <>
        <div className="text-white grid grid-cols-3 gap-9 px-3 scroll-smooth">
          {videoList.length < 1
            ? "Please search at first."
            : videoList.map((video, index) => {
                return (
                  <div
                    key={index}
                    className={`${activeVideo ? "md:w-full" : "w-full"}  p-2 `}
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
        <div className="pt-14 pb-12 flex justify-center">
          <button className="text-white text-xl border-2 border-full border-red-300 hover:border-green-500 flex justify-center items-center rounded-full px-8 py-3 ">
            Load More...
          </button>
        </div>
      </>
    );
  }
}

export default VideoLists;
