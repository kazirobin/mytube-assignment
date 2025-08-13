import {Component} from "react"
import VideoCard from "./video.card.component"
class VideoLists extends Component{
  render(){
    const {videoList} = this.props
    return(
      <>
        <h1 className="text-red-600 font-bold shadow-2xl border  p-2 m-2 rounded-xl bg-amber-100 lg:text-4xl text-center">
          List of suggested video
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-white">

          {videoList.length < 1 && <h1 className="text-white">Please search at first...</h1>}
          </h1>
          {videoList.map((video,index) => { return <div key={index}><VideoCard video={video}/></div> })}
          {/* <VideoCard/> */}
        </div>
      </>
      )
  }
} 

export default VideoLists;
