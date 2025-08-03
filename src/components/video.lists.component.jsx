import {Component} from "react"
import VideoCard from "./video.card.component"
class VideoLists extends Component{
  render(){
    return(
      <>
        <h1 className="text-red-600 font-bold shadow-2xl border  p-2 m-2 rounded-xl shadow bg-amber-100 lg:text-4xl text-center">
          
          List of suggested video
        </h1>
        <div className="flex flex-col gap-2">
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
        </div>
  
      </>
      )
  }
} 

export default VideoLists;
