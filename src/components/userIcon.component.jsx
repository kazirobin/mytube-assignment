import {Component} from "react"
import { IoIosNotificationsOutline } from "react-icons/io";

class UserIcon extends Component{
  render(){
    return(
      <div className="items-center  flex px-2">
      
      <div className="text-5xl hidden sm:flex items-center">
      <IoIosNotificationsOutline/>
      </div>
        <h1 className="text-white text-2xl font-bold shadow-2xl border  p-1 size-11 rounded-full shadow bg-red-400 flex items-center justify-center">
          
          R 
  
        </h1>
      </div>
      )
  }
} 

export default UserIcon;
