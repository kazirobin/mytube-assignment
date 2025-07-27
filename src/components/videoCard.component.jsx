import { Component } from "react";

class VideoCard extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 bg-white rounded-xl overflow-hidden shadow-md m-2">
    
        <img
          src="src/images/you.jpeg"  
          alt="Video Thumbnail"
          className="w-full h-auto object-cover md:h-full"
        />

        
        <div className="col-span-2 p-4 flex items-center">
          <h1 className="text-lg font-semibold text-gray-800">
            This is a video title.
          </h1>
        </div>
      </div>
    );
  }
}

export default VideoCard;