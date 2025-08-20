import { Component } from "react";
import VideoCard from "./video.card.component";
class VideoLists extends Component {
  render() {
    const { videoList, handleVideoMedia,activeVideo } = this.props;
    return (
      <>
        <div className="text-white flex flex-wrap">
          {videoList.length < 1
            ? "Please search at first..."
            : videoList.map((video, index) => {
                return (
                  <div key={index} className={`${activeVideo ? "md:w-full":"w-full md:w-1/3 lg:w-1/4"} sm:w-1/2 p-2 `}>
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
      </>
    );
  }
}

export default VideoLists;
