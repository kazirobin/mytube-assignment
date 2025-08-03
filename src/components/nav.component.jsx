import { Component } from "react";
import Logo from "./logo.component";
import Search from "./nav.search.component";
import UserIcon from "./nav.user.icon.component";

class NavBar extends Component {
  render() {
    return (
      <div className="p-2 mx-2">
        {/* Small screen: two rows, md+: one row */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-2 gap-4">
          
          {/* First row: Logo and UserIcon on small, row-wise on md+ */}
          <div className="flex justify-between items-center">
            <Logo />
          <div className="md:hidden">
            
            <UserIcon />
          </div>
          </div>

          {/* Second row on small, middle item on md+ */}
          <div className="flex  md:flex-1   ">
            <Search />
          </div>
          <div className="hidden md:block">
            
            <UserIcon />
          </div>

        </div>
      </div>
    );
  }
}

export default NavBar;