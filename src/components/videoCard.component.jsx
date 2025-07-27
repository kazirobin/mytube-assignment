import { Component } from "react";

class VideoCard extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 bg-white rounded-xl overflow-hidden shadow-md m-2">
    
        <img
<<<<<<< HEAD
          src="./images/you.jpeg"  
=======
          src="/images/you.jpeg"  
>>>>>>> aa0f206f2810d898ecef5941bb4803d0828b9b7b
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