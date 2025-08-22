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
        filterState: false,
    };

    handleFilterState = () => {
        this.setState((prevState) => ({
            filterState: !prevState.filterState,
        }));
    };

    handleType = ({ target: { value: type } }) => {
        this.setState({ type, filterState: false });
    };

    handleSuggestion = (currentSuggestionState) => {
        console.log("I'm here", currentSuggestionState);
        this.setState(() => ({
            suggestion: currentSuggestionState,
        }));
    };

    handleVideoMedia = (item) => {
        this.setState({ activeVideo: item });
        const prevList = this.state.videoList;
        const filter = prevList.filter((items) => items.id !== item.id);
        this.setState({ videoList: filter });
    };

    handleSearchInput = (event) => {
        this.setState({ searchText: event.target.value });
    };

    handleSearchButton = async () => {
        const baseUrl = process.env.VITE_BASE_URL;
        const { searchText, type } = this.state;
        const key = process.env.VITE_API_KEY;
        const part = "snippet";
        const maxResults = 10;

        const url = `${baseUrl}?key=${key}&q=${searchText}&part=${part}&maxResults=${maxResults}&type=${type}`;

        try {
            const response = await axios.get(url);
            this.setState({ videoList: response.data.items });
        } catch (error) {
            console.error(error.message);
        }
    };

    searchTimeout = null;
    componentDidMount() {
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
                    suggestion={this.state.suggestion}
                    type={this.state.type}
                    handleType={this.handleType}
                    filterState={this.state.filterState}
                    handleFilterState={this.handleFilterState}
                />
                <div className="grid grid-cols-1 md:grid-cols-5  p-4">
                    <div
                        className={`${
                            this.state.activeVideo ? "md:col-span-3" : ""
                        }`}
                    >
                        <VideoWrapper activeVideo={this.state.activeVideo} />
                    </div>
                    <div
                        className={` ${
                            this.state.activeVideo
                                ? "md:col-span-2"
                                : "col-span-5"
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
