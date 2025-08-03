import NavBar from "./nav.component";  
import VideoWrapper from "./video.wrapper.component";  
import VideoLists from "./video.lists.component";  
import { Component } from "react";

class App extends Component{  
  render(){
    return (  
    <div className="min-h-screen bg-black">  
      <NavBar />  

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">  
        
        <div className="md:col-span-3">  
          <VideoWrapper />  
        </div>  

        <div className="md:col-span-2">  
      
        
          <VideoLists />  
        </div>  
      </div>  
    </div>  
  )
  }  
}  

export default App;