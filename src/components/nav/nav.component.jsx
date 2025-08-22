import Logo from "./logo.component";
import Search from "./search.component";
import UserIcon from "./user.icon.component";

// class = syntactical sugar => generator function => object generate kore
// stateless functional component / functional component

function NavBar({
    handleSearchInput,
    handleSearchButton,
    handleVideoMedia,
    videoList,
    handleSuggestion,
    suggestion,
    type,
    handleType,
    filterState,
    handleFilterState,
    searchText,
}) {
    return (
        <div className="flex justify-center pt-3">
            <div className="p-2 mx-2 cursor-pointer">
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
                            suggestion={suggestion}
                            type={type}
                            handleType={handleType}
                            filterState={filterState}
                            handleFilterState={handleFilterState}
                            searchText={searchText}
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

export default NavBar;
