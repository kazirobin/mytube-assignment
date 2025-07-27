import NavBar from "./navbar.component";  
import VideoWraper from "./videoWraper.component";  
import VideoLists from "./videoLists.component";  

function App() {  
  return (  
    <div className="min-h-screen ">  
      <NavBar />  

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">  
        
        <div className="md:col-span-3">  
          <VideoWraper />  
        </div>  

        <div className="md:col-span-2">  
      
        
          <VideoLists />  
        </div>  
      </div>  
    </div>  
  );  
}  

export default App;