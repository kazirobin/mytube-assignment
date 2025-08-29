import { Component } from "react";
import NavBar from "./nav/nav.component";
import VideoWrapper from "./videoWrap/video.wrapper.component";
import VideoLists from "./videoList/video.lists.component";
import axios from "axios";

class App extends Component {
  state = {
    searchText: "Saiyaara Title Song",
    videoList: [],
    suggestion: false,
    activeVideo: null,
    type: "video",
    part: "snippet",
    filter: false,
    maxResults: 6,
    isPlaylistMode: false,
    count: 1,
  };
  // key = import.meta.env.VITE_API_KEY_1;

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
  handleMaxResults = () => {
    this.setState((prevState) => ({
      maxResults: prevState.maxResults + 3,
    }));
    // console.log("maxresults", this.state.maxResults);
  };
  handleSuggestion = (condition) => {
    this.setState(() => ({
      suggestion: condition,
    }));
  };
  handleVideoMedia = (item) => {
    console.log("handlevido media call");
    console.log(item);
    if (item.id.kind === "youtube#video") {
      this.setState({ activeVideo: item, isPlaylistMode: false });
      const prevList = this.state.videoList;
      const filter = prevList.filter((items) => items.id !== item.id);
      this.setState({ videoList: filter });
    } else {
      const playlistId = item.id.playlistId;
      this.fetchPlaylistVideos(playlistId);
    }
  };
  fetchPlaylistVideos = (playlistId) => {
    const { part, count } = this.state;
    const baseUrl = "https://www.googleapis.com/youtube/v3/playlistItems";
    const key = import.meta.env[`VITE_API_KEY_${count}`];
    const url = `${baseUrl}?key=${key}&playlistId=${playlistId}&part=${part}&maxResults=50`;
    const response = axios.get(url);
    response
      .then((response) => {
        const normalizeVideos = response.data.items.map((items) => ({
          id: {
            kind: "youtube#video",
            videoId: items.snippet.resourceId.videoId,
          },
          snippet: items.snippet,
        }));
        this.setState({
          videoList: normalizeVideos,
          type: "video",
          isPlaylistMode: true,
        });
        console.log("playlist now updated");
      })
      .catch((error) => {
        console.error("api Error Massage: ", error.message);
      });
  };
  handleSearchInput = (event) => {
    this.setState({ searchText: event.target.value });
  };
  handleSearchButton = () => {
    const baseUrl = `https://www.googleapis.com/youtube/v3/search`;
    const { searchText, type, part, maxResults, count } = this.state;
    const key = import.meta.env[`VITE_API_KEY_${count}`];
    const url = `${baseUrl}?key=${key}&q=${searchText}&part=${part}&maxResults=${maxResults}&type=${type}`;
    const response = axios.get(url);
    console.log(">>>>>",response)
    response
      .then((response) => {
        this.setState({
          videoList: response.data.items,
          activeVideo: null,
          isPlaylistMode: false,
        });
      })
      .catch((error) => {
        console.error("api Error Massage: ", error.message);
        this.setState(
          (prevState) => ({
            count: prevState.count < 6 ? prevState.count + 1 : 1,
          }),
          () => {
            this.handleSearchButton();
          }
        );
        console.log(this.state.count);
      });
    console.log("Api is calling... ");
    console.log(this.state.count);
  };
  searchTimeout = null;
  componentDidMount() {
    this.handleSearchButton();
  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.state.isPlaylistMode) {
      if (
        prevState.searchText !== this.state.searchText ||
        prevState.type !== this.state.type ||
        prevState.maxResults !== this.state.maxResults
      ) {
        if (this.searchTimeout) {
          clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(() => {
          this.handleSearchButton();
        }, 500);
      }
    }
  }
  render() {
    const {searchText,videoList,suggestion} = this.state
    return (
      <div className="min-h-screen bg-black">
        <NavBar
          searchText={this.state.searchText}
          handleSearchInput={this.handleSearchInput}
          handleSearchButton={this.handleSearchButton}
          handleVideoMedia={this.handleVideoMedia}
          videoList={this.state.videoList}
          handleSuggestion={this.handleSuggestion}
          suggestion={this.state.suggestion}
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
              handleMaxResults={this.handleMaxResults}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
