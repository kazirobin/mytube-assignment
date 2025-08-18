import { Component } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoMdMic } from "react-icons/io";
import Suggestions from "./suggestions.component";
class Search extends Component {
  handleSearch = () => {
    const input = document.querySelector("#searchInput");
    input.value = "";
  };
  render() {
    const {
      handleSearchInput,
      handleSearchButton,
      handleVideoMedia,
      videoList,
      handleSuggestion,
      Suggestion,
      type,
      handleType,
    } = this.props;
    return (
      <>
        <div className="mx-auto flex flex-1 items-center gap-4 pe-1">
          <div className="flex w-full md:mx-auto  rounded-full border border-gray-500 relative">
            <input
              type="text"
              placeholder="Search here ...."
              className="focus:outline-none focus:text-gray-500 focus:font-semibold focus:ps-3 flex-1 p-1 placeholder:ps-3 placeholder:font-semibold placeholder:text-gray-500"
              id="searchInput"
              onClick={handleSuggestion}
              onChange={(e) => {
                handleSearchInput(e);
                handleSuggestion(true)
              }}
            />
            <button
              onClick={() => {
               
                handleSuggestion(false);
              }}
              className="w-12 flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white cursor-pointer rounded-e-2xl"
            >
              <HiOutlineMagnifyingGlass />
            </button>
            <button
              onClick={() => {
                handleSearchButton();
              }}
              className="px-4 ms-3 flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white cursor-pointer rounded-2xl"
            >
              <select
                name=""
                id=""
                value={type}
                className="bg-gray-700 hover:bg-gray-800 h-8 w-22"
                onChange={handleType}
              >
                <option value="video,channel,playlist">all</option>
                <option value="video">video</option>
                <option value="channel">channel</option>
                <option value="playlist">playlist</option>
              </select>
            </button>
            <div className="absolute text-white left-0 top-10 block">
              {Suggestion && (
                <Suggestions
                  handleVideoMedia={handleVideoMedia}
                  videoList={videoList}
                  handleSuggestion={handleSuggestion}
                />
              )}
            </div>
          </div>
          <div className=" bg-gray-700 cursor-pointer hover:bg-gray-800 flex items-center h-8 w-8 justify-center rounded-full">
            <IoMdMic className="text-white" />
          </div>
        </div>
      </>
    );
  }
}

export default Search;
