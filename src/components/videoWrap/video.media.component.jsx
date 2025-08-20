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
            className="w-full h-96 block"
            src={`https://www.youtube.com/embed/${activeVideo.id.videoId}`}
            title="3 MUST SEE Amazon Q CLI Vibe Coding Features!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          "not fund"
        )}
      </>
    );
  }
}

export default VideoMedia;
