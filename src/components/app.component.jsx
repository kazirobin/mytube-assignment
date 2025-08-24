import { Component } from "react";
import NavBar from "./nav/nav.component";
import VideoWrapper from "./videoWrap/video.wrapper.component";
import VideoLists from "./videoList/video.lists.component";
import axios from "axios";

class App extends Component {
  state = {
    searchText: "Saiyaara Title Song",
    videoList: [],
    Suggestion: false,
    activeVideo: null,
    type: "video",
    keys: [
      "AIzaSyDioJFhL2Lm3Z-udOf6mJgqsO7LsEoAMvQ",
      "AIzaSyDOIHU2vBG2SWDaQ52f3zCULOk1k3eOaWI",
      "AIzaSyAH3CmZfNRE-yvcaxpRr0Fz-TRMbOCN_NU",
      "AIzaSyDp5lGpGkdbrUY_WlcZit6sC_UILcwBlVA",
      "AIzaSyCDU0Gq4N7eHESbqGnVww4qEF_YGvxV7kQ",
      "AIzaSyCEpcuYMTLgHKqgR01H7RRCVhPX4Qs12gc",
    ],
    filter: false,
  };
  handleFilter = () => {
    this.setState((prevState) => ({
      filter: !prevState.filter,
    }));
  };
  handleType = ({ target: { value } }) => {
    this.setState({ type: value }, () => {
      this.handleFilter();
    });
  };
  handleSuggestion = (condition) => {
    this.setState(() => ({
      Suggestion: condition,
    }));
  };
  handleVideoMedia = (item) => {
    this.setState({ activeVideo: item });
    // console.log(item)
    const prevList = this.state.videoList;
    const filter = prevList.filter((items) => items.id !== item.id);
    this.setState({ videoList: filter });
  };
  handleSearchInput = (event) => {
    this.setState({ searchText: event.target.value });
  };
  handleSearchButton = () => {
    const baseUrl = "https://www.googleapis.com/youtube/v3/search";
    const { searchText, type, keys } = this.state;
    const part = "snippet";
    const maxResults = 10;

    const key = keys[3];
    const url = `${baseUrl}?key=${key}&q=${searchText}&part=${part}&maxResults=${maxResults}&type=${type}`;
    const response = axios.get(url);
    response
      .then((response) => {
        this.setState({ videoList: response.data.items });
      })
      .catch((error) => {
        console.error("api Error Massage: ", error.message);
      });
    console.log(" api call");
  };
  searchTimeout = null;
  componentWillUnmount() {
    this.handleSearchButton();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.type !== this.state.type
    ) {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.handleSearchButton();
      }, 1000);
    }
  }
  render() {
    return (
      <div className="min-h-screen bg-black">
        <NavBar
          searchText={this.state.searchText}
          handleSearchInput={this.handleSearchInput}
          handleSearchButton={this.handleSearchButton}
          handleVideoMedia={this.handleVideoMedia}
          videoList={this.state.videoList}
          handleSuggestion={this.handleSuggestion}
          Suggestion={this.state.Suggestion}
          type={this.state.type}
          handleType={this.handleType}
          filter={this.state.filter}
          handleFilter={this.handleFilter}
        />
        <div className="grid grid-cols-1 md:grid-cols-5  p-4">
          <div className={`${this.state.activeVideo ? "md:col-span-3" : ""}`}>
            <VideoWrapper activeVideo={this.state.activeVideo} />
          </div>
          <div
            className={` ${
              this.state.activeVideo ? "md:col-span-2" : "col-span-5"
            }`}
          >
            <VideoLists
              videoList={this.state.videoList}
              handleVideoMedia={this.handleVideoMedia}
              activeVideo={this.state.activeVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
