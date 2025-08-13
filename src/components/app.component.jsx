import { Component } from "react";
import NavBar from "./nav/nav.component";
import VideoWrapper from "./video/video.wrapper.component";
import VideoLists from "./list/video.lists.component";
import axios from "axios";

class App extends Component {
  state = {
    searchText: "",
    videoList: [],
    activeVideo: null,
  };
  handleVideoMedia = (item) => {
    const newState = this.setState({ activeVideo: item });
    // console.log(item)
  };
  handleSearchInput = (event) => {
    this.setState({ searchText: event.target.value });
  };
  handleSearchButton = () => {
    const baseUrl = "https://www.googleapis.com/youtube/v3/search";
    const key = "AIzaSyCyO8v_hLa0RujrhX2iM-NsMpA29Tgaa1c";
    // const q = this.state.searchText;
    const q = this.state.searchText;
    const part = "snippet";
    const type = "video"
    const maxResults = 5;
    const url = `${baseUrl}?key=${key}&q=${q}&part=${part}&type=${type}&maxResults=${maxResults}`
    const promise = axios.get(url)
    const success = (resolve) => { 
      
      this.setState({videoList: resolve.data.items})
      // console.log("success",resolve.data.items)
      // console.log(newList)
     }
    const error = (reject) => { console.log("error") }
    promise.then(success).catch(error)
  };
  render() {
    return (
      <div className="min-h-screen bg-black">
        <NavBar handleSearchInput={this.handleSearchInput} handleSearchButton={this.handleSearchButton}/>
        <div>
          <h1 className="text-white">searched Text : {this.state.searchText}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
          <div className="md:col-span-3">
            <VideoWrapper activeVideo={this.state.activeVideo}/>
          </div>
          <div className="md:col-span-2">
            <VideoLists videoList={this.state.videoList} handleVideoMedia={this.handleVideoMedia}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
