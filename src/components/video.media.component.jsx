import { Component } from "react";

class VideoMedia extends Component {
  render() {
    return (
      <>
        <iframe
          className="w-full h-96 block border border-red-950"
          src="https://www.youtube.com/embed/XvOgmfLxj8w"
          title="3 MUST SEE Amazon Q CLI Vibe Coding Features!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </>
    );
  }
}

export default VideoMedia;
