import { Component } from "react";
import NavBar from "./nav/nav.component";
import VideoWrapper from "./video/video.wrapper.component";
import VideoLists from "./list/video.lists.component";
import axios from "axios";

class App extends Component {
  state = {
    searchText: "",
    videoList: [],
    Suggestion: false,
    activeVideo: null,
  };
  handleSuggestion = () => {
    this.setState((prevState) => ({
      Suggestion: !prevState.Suggestion,
    }));
  };
  handleVideoMedia = (item) => {
    const newState = this.setState({ activeVideo: item });
  };
  handleSearchInput = (event) => {
    this.setState({ searchText: event.target.value });
  };
  handleSearchButton = () => {
    const baseUrl = "https://www.googleapis.com/youtube/v3/search";
    const key = "AIzaSyDioJFhL2Lm3Z-udOf6mJgqsO7LsEoAMvQ";
    const q = this.state.searchText;
    const part = "snippet";
    const type = "video";
    const maxResults = 5;
    const url = `${baseUrl}?key=${key}&q=${q}&part=${part}&type=${type}&maxResults=${maxResults}`;
    const promise = axios.get(url);
    const success = (resolve) => {
      this.setState({ videoList: resolve.data.items });
      console.log("success");
    };
    const error = (reject) => {
      console.log("error");
    };
    promise.then(success).catch(error);
  };
  searchTimeout = null;
  componentDidUpdate(prevProps, prevState) {
    // Only run debounce if searchTerm has changed
    if (prevState.searchText !== this.state.searchText) {
      // Clear previous timeout
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      // Set new timeout
      this.searchTimeout = setTimeout(() => {
        this.handleSearchButton();
      }, 5000);
    }
  }
  render() {
    return (
      <div className="min-h-screen bg-black">
        <NavBar
          handleSearchInput={this.handleSearchInput}
          handleSearchButton={this.handleSearchButton}
          handleVideoMedia={this.handleVideoMedia}
          videoList={this.state.videoList}
          handleSuggestion={this.handleSuggestion}
          Suggestion={this.state.Suggestion}
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
          <div className="md:col-span-3">
            <VideoWrapper activeVideo={this.state.activeVideo} />
          </div>
          <div className="md:col-span-2">
            <VideoLists
              videoList={this.state.videoList}
              handleVideoMedia={this.handleVideoMedia}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
