import { Component } from "react";

class VideoCard extends Component {
  render() {
    const { video, handleVideoMedia } = this.props;
    const title = video.snippet.title;
    const channelTitle = video.snippet.channelTitle;
    const thumbnails = video.snippet.thumbnails.high.url;
    // console.log(video.snippet.title)
    return (
      <div
        className="rounded-xl overflow-hidden shadow-md m-2 cursor-pointer"
        onClick={() => {
          handleVideoMedia(video);
        }}
      >
        <img
          src={thumbnails}
          alt={title}
          className="w-full h-auto object-cover md:h-full "
        />
        <div className="text-white  flex flex-col">
          <h1 className="text-sm line-clamp-2 font-semibold ">{title}</h1>
          <p>{channelTitle}</p>
        </div>
      </div>
    );
  }
}

export default VideoCard;
