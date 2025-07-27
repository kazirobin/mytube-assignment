import {Component} from "react"
import VideoMedia from "./videoMedia.component"
import VideoDetails from "./videoDetails.component"

class VideoWraper extends Component{
  render(){
    return(
      <div>
        <VideoMedia/>
        <VideoDetails/>
      </div>
      )
  }
} 

export default VideoWraper;
