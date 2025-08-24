import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoMdMic } from "react-icons/io";
import Suggestions from "./suggestions.component";
import { BiFilter } from "react-icons/bi";
const Search = ({
  searchText,
  handleSearchInput,
  handleSearchButton,
  handleVideoMedia,
  videoList,
  handleSuggestion,
  Suggestion,
  type,
  handleType,
  filter,
  handleFilter,
}) => {
  return (
    <>
      <div className="mx-auto flex justify-between items-center">
        <div className="flex flex-1 pe-0 sm:pe-25 lg:pe-0 md:mx-auto  rounded-full relative ">
          <input
          value={searchText}
            type="text"
            placeholder="Search here ...."
            className="flex-1 sm:w-80 border border-gray-400 
              h-full text-white
              rounded-2xl focus:border-red-400 focus:outline-none 
             font-semibold px-3 focus:ps-3 p-1 placeholder:ps-3 placeholder:font-semibold placeholder:text-gray-500 "
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
            className="ms-2 px-2 text-xs flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white cursor-pointer rounded-2xl"
          >
            <HiOutlineMagnifyingGlass />
          </button>
          <button className="mx-2 px-2 sm:ms-3  items-center justify-center bg-gray-700 hover:bg-gray-800 text-white cursor-pointer rounded-2xl relative  flex">
            <div
              onClick={() => {
                handleFilter();
              }}
            >
              <BiFilter />
            </div>
            {filter && (
              <>
                <select
                  name=""
                  id=""
                  value={type}
                  className="bg-gray-700 hover:bg-gray-800 h-8 w-22 absolute left-0 top-7 rounded-xl  "
                  onChange={handleType}
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
        <div className=" bg-gray-700 cursor-pointer hover:bg-gray-800 flex items-center p-2  justify-center rounded-full">
          <IoMdMic className="text-white" />
        </div>
      </div>
    </>
  );
};

export default Search;
