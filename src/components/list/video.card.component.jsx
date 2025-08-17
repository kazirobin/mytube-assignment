import { Component } from "react";

class VideoCard extends Component {
  render() {
    const { video, handleVideoMedia } = this.props;
    const title = video.snippet.title;
    const thumbnails = video.snippet.thumbnails.high.url;
    // console.log(video.snippet.title)
    return (
      <div
        className="grid grid-cols-3 bg-white rounded-xl overflow-hidden shadow-md m-2 cursor-pointer"
        onClick={() => {
          handleVideoMedia(video);
        }}
      >
        <img
          src={thumbnails}
          alt={title}
          className="w-full h-auto object-cover md:h-full"
        />
        <div className="col-span-2 p-4 flex items-center">
          <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
        </div>
      </div>
    );
  }
}

export default VideoCard;
