import { Component } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoMdMic } from "react-icons/io";
import Suggestions from "./suggestions.component";
import { BiFilter } from "react-icons/bi";
class Search extends Component {
  state = { filter: false };
  handleSearch = () => {
    const input = document.querySelector("#searchInput");
    input.value = "";
    this.setState(
      (prevState) => ({ filter: !prevState.filter }),
      () => {
        // console.log(this.state.filter);
      }
    );
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
        <div className="mx-auto flex justify-center items-center h-5 sm:h-10 px-2">
          <div className="flex w-full md:mx-auto  rounded-full relative">
            <input
              type="text"
              placeholder="Search here ...."
              className="lg:w-80 border border-gray-400 
              h-5 sm:h-full
              rounded-2xl focus:border-red-400 focus:outline-none focus:text-gray-500 focus:font-semibold focus:ps-3 p-1 placeholder:ps-3 placeholder:font-semibold placeholder:text-gray-500 "
              id="searchInput"
              onClick={handleSuggestion}
              onChange={(e) => {
                handleSearchInput(e);
                handleSuggestion(true);
              }}
            />
            <button
              onClick={() => {
                handleSearchButton();
                handleSuggestion(false);
              }}
              className="w-6 sm:w-10 text-xs flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white cursor-pointer rounded-2xl"
            >
              <HiOutlineMagnifyingGlass />
            </button>
            <button className="px-1 mx-2 sm:px-4 sm:ms-3  items-center justify-center bg-gray-700 hover:bg-gray-800 text-white cursor-pointer rounded-2xl relative  flex">
              <div
                onClick={() => {
                  handleSearchButton();
                  this.handleSearch();
                }}
              >
                <BiFilter />
              </div>
              {this.state.filter && (
                <>
                  <select
                    name=""
                    id=""
                    value={type}
                    className="bg-gray-700 hover:bg-gray-800 h-8 w-22 absolute left-0 top-7 rounded-xl  "
                    onChange={(e) => {
                      handleType(e);
                      this.setState({ filter: false }, () => {
                        handleSearchButton();
                        handleSuggestion(false);
                      });
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <option value="video,channel,playlist">All</option>
                    <option value="video">video</option>
                    <option value="channel">channel</option>
                    <option value="playlist">playlist</option>
                  </select>
                </>
              )}
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
          <div className=" bg-gray-700 cursor-pointer hover:bg-gray-800 flex items-center h-5 px-1 sm:h-8 sm:w-8 justify-center rounded-full">
            <IoMdMic className="text-white" />
          </div>
        </div>
      </>
    );
  }
}

export default Search;
