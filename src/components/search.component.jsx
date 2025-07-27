import {Component} from "react"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
class Search extends Component{
    handleSearch= ()=>{
    const input = document.querySelector("#searchInput");
    input.value="";
    }
  render(){
    return(
      <>
      <div className="flex  w-full md:w-auto md:mx-auto overflow-hidden rounded-xl border border-red-400 lg:text-4xl px-2 mx-1 bg-white">
        <input type="text" placeholder="Search here ...." className="focus:outline-none flex-1  p-3" id="searchInput"/>
        <button onClick={this.handleSearch} className="w-12 flex items-center justify-center border-l-2 border-red-400 ">
        <HiOutlineMagnifyingGlass/>
        </button>
        
      </div>
      </>
      )
  }
} 

export default Search;
