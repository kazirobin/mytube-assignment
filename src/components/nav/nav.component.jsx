import { Component } from "react";
import Logo from "./logo.component";
import Search from "./nav.search.component";
import UserIcon from "./nav.user.icon.component";

class NavBar extends Component {
  render() {
    const {handleSearchInput,handleSearchButton} = this.props
    return (
      <div className="p-2 mx-2">
        <div className="flex flex-col md:flex-row md:items-center md:gap-2 gap-4">
          <div className="flex justify-between items-center">
            <Logo />
          <div className="md:hidden"><UserIcon /></div>
          </div>
          <div className="flex flex-1 md:px-20 lg:px-30">
            <Search handleSearchInput={handleSearchInput} handleSearchButton={handleSearchButton}/>
          </div>

          <div className="hidden md:block"><UserIcon /></div>
        </div>
      </div>
    );
  }
}

export default NavBar;