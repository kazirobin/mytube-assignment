import { Component } from "react";

class VideoDetails extends Component {
  render() {
    const { activeVideo } = this.props;
    if (!activeVideo) {
      return <h1 className="text-white">Please selext a Video </h1>;
    }
    return (
      <>
        <h1 className="text-red-600 font-bold shadow-2xl border   p-2 m-2 rounded-xl bg-amber-100 lg:text-4xl">
          Here this video details
        </h1>
        <div>
          <h1 className="text-white font-bold text-5xl">
            {activeVideo.snippet.title}
          </h1>
        </div>
      </>
    );
  }
}

export default VideoDetails;
