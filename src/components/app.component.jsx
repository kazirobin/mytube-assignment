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
      "AIzaSyCEpcuYMTLgHKqgR01H7RRCVhPX4Qs12gc"
    ],
  };
  handleType = (event) => {
    this.setState({ type: event.target.value });
  };
  handleSuggestion = (condition) => {
    this.setState(() => ({
      Suggestion: condition,
    }));
  };
  handleVideoMedia = (item) => {
    this.setState({ activeVideo: item });
    // console.log(item)
    const prevList = this.state.videoList
    const filter = prevList.filter(items => items.id !== item.id)
    this.setState({videoList:filter})
  };
  handleSearchInput = (event) => {
    this.setState({ searchText: event.target.value });
  };
 handleSearchButton = async () => {
  const baseUrl = "https://www.googleapis.com/youtube/v3/search";
  const videoUrl = "https://www.googleapis.com/youtube/v3/videos";
  const { searchText, type, keys } = this.state;
  const part = "snippet";
  const maxResults = 10;

  let workingKey = null;
  let aliveKeys = [];
  let deadKeys = [];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const url = `${baseUrl}?key=${key}&q=${searchText}&part=${part}&maxResults=${maxResults}&type=${type}`;

    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        workingKey = key;
        aliveKeys.push(key);
        const videoIds = response.data.items
        .map(item => item.id.videoId)
        .filter(id=>id)
        .join(",")
        // console.log(videoIds)
        const detailsUrl = `${videoUrl}?key=${key}&id=${videoIds}&part=snippet,statistics,contentDetails`
        const detailsResponse = await axios.get(detailsUrl)
        this.setState({ videoList: response.data.items });
        console.log(`✅ Working API Key: ${key.slice(-4)}`);
        break; // Stop after finding the first working key
      }
    } catch (error) {
      deadKeys.push(key);
      console.log(`❌ Failed API Key: ${key.slice(-4)}`);
    }
  }

  if (!workingKey) {
    console.log("🚫 No working API key found.");
  }

  console.log(`🔢 Total Keys: ${keys.length}`);
  console.log(`🟢 Alive Keys: ${keys.length - deadKeys.length}`);
  console.log(`🔴 Dead Keys: ${deadKeys.length}`);
};

  searchTimeout = null;
  componentDidMount(){
    this.handleSearchButton()
  }
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
      }, 1000);
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
          type={this.state.type}
          handleType={this.handleType}
        />
        <div className="grid grid-cols-1 md:grid-cols-5  p-4">
          <div className={`${this.state.activeVideo ? "md:col-span-3" : ""}`}>
            <VideoWrapper activeVideo={this.state.activeVideo} />
          </div>
          <div className={` ${this.state.activeVideo ? "md:col-span-2" : "col-span-5"}`}>
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
