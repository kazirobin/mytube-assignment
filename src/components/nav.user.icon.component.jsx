import {Component} from "react"
import { BiPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

class UserIcon extends Component{
  render(){
    return(
      <div className="items-center text-xs flex gap-2 justify-center text-white px-2">
      <div className="font-bold shadow-2xl py-2 px-3 rounded-full bg-gray-700 hover:bg-gray-800 cursor-pointer flex gap-1 items-center justify-center"><BiPlus/> Create</div>
      <div className="hidden sm:flex items-center text-lg border rounded-full size-7 justify-center bg-gray-700 hover:bg-gray-800">
      <IoIosNotificationsOutline className=""/>
      </div>
      <h1 className=" font-bold shadow-2xl border size-7 rounded-full bg-gray-700 hover:bg-gray-800 flex items-center justify-center">
        R
      </h1>
      </div>
      )
  }
} 

export default UserIcon;
