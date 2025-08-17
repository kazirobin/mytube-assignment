import { Component } from "react";
import VideoCard from "./video.card.component";
class VideoLists extends Component {
  render() {
    const { videoList, handleVideoMedia } = this.props;
    return (
      <>
        <h1 className="text-red-600 font-bold shadow-2xl border  p-2 m-2 rounded-xl bg-amber-100 lg:text-xl text-center">
          List of suggested video
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-white">
            {videoList.length < 1
              ? "Please search at first..."
              : videoList.map((video, index) => {
                  return (
                    <div key={index}>
                      <VideoCard
                        video={video}
                        handleVideoMedia={handleVideoMedia}
                      />
                    </div>
                  );
                })}
          </h1>
        </div>
      </>
    );
  }
}

export default VideoLists;
