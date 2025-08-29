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
  };
  handleSuggestion = (condition) => {
    this.setState(() => ({
      suggestion: condition,
    }));
  };
  handleVideoMedia = (activeVideo) => {
    // console.log("handle Video Media call");
    if (activeVideo.id.kind === "youtube#video") {
      const videoList = this.state.videoList.filter(
        (item) => item.id !== activeVideo.id
      );
      this.setState({ activeVideo, isPlaylistMode: false, videoList });
    } else {
      const playlistId = activeVideo.id.playlistId;
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
        this.setState((prevState) => {
          if (prevState.count < 7 ) {
            return { count: prevState.count + 1 };
          }
          return null;
        });
      });
    console.log("Api is calling... The Key Number is: ",this.state.count);
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
        prevState.count !== this.state.count ||
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
    const { searchText, videoList, suggestion, type, filter, activeVideo,isPlaylistMode } =
      this.state;
    const {
      handleSearchInput,
      handleSearchButton,
      handleVideoMedia,
      handleSuggestion,
      handleType,
      handleFilter,
      handleMaxResults,
    } = this;
    return (
      <div className="min-h-screen bg-black">
        <NavBar
          searchText={searchText}
          handleSearchInput={handleSearchInput}
          handleSearchButton={handleSearchButton}
          handleVideoMedia={handleVideoMedia}
          videoList={videoList}
          handleSuggestion={handleSuggestion}
          suggestion={suggestion}
          type={type}
          handleType={handleType}
          filter={filter}
          handleFilter={handleFilter}
        />
        <div className="grid grid-cols-1 md:grid-cols-5  p-4">
          <div className={`${activeVideo ? "md:col-span-3" : ""}`}>
            <VideoWrapper activeVideo={activeVideo} />
          </div>
          <div className={` ${activeVideo ? "md:col-span-2" : "col-span-5"}`}>
            <VideoLists
              videoList={videoList}
              handleVideoMedia={handleVideoMedia}
              activeVideo={activeVideo}
              handleMaxResults={handleMaxResults}
              isPlaylistMode={isPlaylistMode}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
