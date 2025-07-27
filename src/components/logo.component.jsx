import {Component} from "react"
import { IoLogoYoutube } from "react-icons/io5";
class Logo extends Component{
  render(){
    return(
      <div className="text-red-600 font-bold shadow-2xl border  flex  rounded-xl shadow bg-amber-100 lg:text-4xl flex items-center gap-4 ps-2 pe-6">
      
      <div className="text-5xl">
      <IoLogoYoutube/>
      </div>
        <h1>
          
          YouTube 
  
        </h1>
      </div>
      )
  }
} 

export default Logo;
