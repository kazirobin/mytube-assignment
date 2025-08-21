import { Component } from "react";
import Logo from "./logo.component";
import Search from "./search.component";
import UserIcon from "./user.icon.component";

class NavBar extends Component {
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
      <div className=" flex justify-center pt-3">
        <div className="p-2 mx-2 cursor-pointer" onMouseLeave={() => { handleSuggestion(false) }
        }>
          <div className=" flex flex-col md:flex-row md:items-center md:gap-2 gap-4 w-screen sm:w-auto">
            <div className=" flex items-center">
              <Logo />
              <div className="ms-auto md:hidden">
                <UserIcon />
              </div>
            </div>
            <div className=" md:px-6 lg:px-10">
              <Search
                handleSearchInput={handleSearchInput}
                handleSearchButton={handleSearchButton}
                handleVideoMedia={handleVideoMedia}
                videoList={videoList}
                handleSuggestion={handleSuggestion}
                Suggestion={Suggestion}
                type={type}
                handleType={handleType}
              />
            </div>
            <div className="hidden md:block">
              <UserIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
