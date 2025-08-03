import {Component} from "react"
import VideoMedia from "./video.media.component"
import VideoDetails from "./video.details.component"

class VideoWrapper extends Component{
  render(){
    return(
      <div>
        <VideoMedia/>
        <VideoDetails/>
      </div>
      )
  }
} 

export default VideoWrapper;
