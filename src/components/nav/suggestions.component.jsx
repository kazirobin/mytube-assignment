import { Component } from "react";

export default class Suggestions extends Component {
  render() {
    const { handleVideoMedia, videoList, handleSuggestion } = this.props;
    return (
      <ul
        className="bg-black"
        onClick={() => {
          handleSuggestion(false);
        }}
      >
        {/* Suggestions */}
        {videoList.map((video, index) => {
          return (
            <li key={index}>
              <h1
                className="border p-1 m-2 hover:border-red-600 cursor-pointer"
                onClick={() => {
                  handleVideoMedia(video);
                }}
              >
                {video.snippet.title}
              </h1>
            </li>
          );
        })}
      </ul>
    );
  }
}
