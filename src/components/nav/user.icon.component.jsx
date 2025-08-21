import { Component } from "react";
import { BiPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

class UserIcon extends Component {
  render() {
    return (
      <div className="items-center text-xs flex gap-3 justify-center text-white">
        <div className="font-bold ps-2 py-1 pe-4 sm:py-2 sm:pl-4 sm:pr-5 rounded-full bg-gray-700 hover:bg-gray-800 cursor-pointer flex gap-2 justify-center items-center">
          <img
            src="../../../public/images/plus.png"
            className="size-3 sm:w-3 sm:h-3 "
            alt="plus icon"
          />
          Create
        </div>
        <button className="hidden sm:flex sm:items-center text-lg border rounded-full h-7 w-7 px-1  justify-center bg-gray-700 hover:bg-gray-800 cursor-pointer">
          <IoIosNotificationsOutline className="" />
        </button>
        <h1 className="px-2 py-1 text-xs font-bold border sm:h-8 sm:w-8 sm:px-3 rounded-full bg-gray-700 hover:bg-gray-800 flex items-center justify-center sm:text-lg ">
          R
        </h1>
      </div>
    );
  }
}

export default UserIcon;
