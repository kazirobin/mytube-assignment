import { Component } from "react";
import { FaYoutube } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
class Logo extends Component {
  render() {
    return (
      <div className="bg-black text-red-600 text-xl shadow-2xl flex items-center ">
        <HiBars3 className="text-white me-3" />
        <FaYoutube className="bg-[radial-gradient(circle,_white_0%,black_40%)]" />
        <button className="text-white font-bold text-sm ps-1">YouTube</button>
      </div>
    );
  }
}

export default Logo;
