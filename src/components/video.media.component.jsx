import { Component } from "react";

class VideoMedia extends Component {
  render() {
    return (
      <>
        <iframe
          width="670"
          height="377"
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
