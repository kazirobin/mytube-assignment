import { Component } from "react";

class VideoDetails extends Component {
  render() {
    const { activeVideo } = this.props;
    if (!activeVideo) {
      return <h1 className="text-white">Please selext a Video </h1>;
    }
    return (
      <>
       
        <div>
          <h1 className="text-white font-bold text-xl pt-4">
            {activeVideo.snippet.title}
          </h1>
        </div>
      </>
    );
  }
}

export default VideoDetails;
