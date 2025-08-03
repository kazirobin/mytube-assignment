import {Component} from "react"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoMdMic } from "react-icons/io";
class Search extends Component{
    handleSearch= ()=>{
    const input = document.querySelector("#searchInput");
    input.value="";
    }
  render(){
    return(
      <>
<div className="mx-auto flex flex-1 items-center gap-4">
        <div className="flex w-full md:mx-auto overflow-hidden rounded-full border border-gray-500  ">
        <input type="text" placeholder="Search here ...." className="focus:outline-none focus:text-gray-500 focus:font-semibold focus:ps-3 flex-1 p-1 placeholder:ps-3 placeholder:font-semibold placeholder:text-gray-500" id="searchInput"/>
        <button onClick={this.handleSearch} className="w-12 flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white cursor-pointer">
        <HiOutlineMagnifyingGlass/>
        </button>
        
      </div>
      <div className=" bg-gray-700 cursor-pointer hover:bg-gray-800 flex items-center h-8 w-8 justify-center rounded-full">
        <IoMdMic className="text-white"/> 
      </div>
</div>
      </>
      )
  }
} 

export default Search;
