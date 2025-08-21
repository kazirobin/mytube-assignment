import { Component } from "react";
import { BiPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

class UserIcon extends Component {
  render() {
    return (
      <div className="items-center text-xs flex gap-6 justify-center text-white px-2">
        <div className="font-bold py-2 pl-4 pr-5 rounded-full bg-gray-700 hover:bg-gray-800 cursor-pointer flex gap-2 justify-center items-center">
          <img
            src="../../../public/images/plus.png"
            className="w-3 h-3 "
            alt="plus icon"
          />
          Create
        </div>
        <button className="hidden sm:flex sm:items-center text-lg border rounded-full h-7 w-7 px-1  justify-center bg-gray-700 hover:bg-gray-800 cursor-pointer">
          <IoIosNotificationsOutline className="" />
        </button>
        <h1 className=" font-bold border h-8 w-8 px-3 rounded-full bg-gray-700 hover:bg-gray-800 flex items-center justify-center text-lg">
          R
        </h1>
      </div>
    );
  }
}

export default UserIcon;
