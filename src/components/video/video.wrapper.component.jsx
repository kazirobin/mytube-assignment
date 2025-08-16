import { Component } from "react";
import VideoMedia from "./video.media.component";
import VideoDetails from "./video.details.component";

class VideoWrapper extends Component {
  render() {
    const { activeVideo } = this.props;
    return (
      <div>
        <VideoMedia activeVideo={activeVideo} />
        <VideoDetails activeVideo={activeVideo} />
      </div>
    );
  }
}

export default VideoWrapper;
