import Logo from "./logo.component";
import Search from "./search.component";
import UserIcon from "./user.icon.component";

const NavBar = ({
  handleSearchInput,
  handleSearchButton,
  handleVideoMedia,
  videoList,
  handleSuggestion,
  suggestion,
  type,
  handleType,
  filter,
  handleFilter,
  searchText,
}) => {
  return (
    <div className=" flex justify-center pt-3 px-5">
      <div
        className="p-2 mx-2 cursor-pointer"
        onMouseLeave={() => {
          handleSuggestion(false);
        }}
      >
        <div className=" flex flex-col md:flex-row md:items-center md:gap-2 gap-4 w-screen sm:w-auto px-5">
          <div className=" flex items-center">
            <Logo />
            <div className="ms-auto md:hidden">
              <UserIcon />
            </div>
          </div>
          <div className=" md:px-6 lg:px-10">
            <Search
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
          </div>
          <div className="hidden md:block">
            <UserIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
