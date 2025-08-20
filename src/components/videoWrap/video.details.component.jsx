import { Component } from "react";

class VideoDetails extends Component {
  render() {
    const { activeVideo } = this.props;
    if (!activeVideo) {
      return <h1 className="text-white">Please selext a Video </h1>;
    }
    return (
      <>
       
        <div className="text-white ">
          <h1 className="font-bold text-xl pt-4">
            {activeVideo.snippet.title}
          </h1>
          <h1 className="font-bold text-sm text-gray-400 py-4">
            {activeVideo.snippet.channelTitle}
          </h1>
          <p className="bg-gray-800 p-2 my-2 rounded">{activeVideo.snippet.description}</p>
        </div>
      </>
    );
  }
}

export default VideoDetails;
