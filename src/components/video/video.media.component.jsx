import { Component } from "react";

class VideoMedia extends Component {
  render() {
    const { activeVideo } = this.props;
    if (!activeVideo) {
      return <h1 className="text-white">Please selext a Video </h1>;
    }
    return (
      <>
        {activeVideo && activeVideo.id.videoId ? (
          <iframe
            className="w-full h-96 block border border-red-950"
            src={`https://www.youtube.com/embed/${activeVideo.id.videoId}`}
            title="3 MUST SEE Amazon Q CLI Vibe Coding Features!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ) : (
          "not fund"
        )}
      </>
    );
  }
}

export default VideoMedia;
