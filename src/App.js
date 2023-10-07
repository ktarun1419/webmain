import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
import video from './Sources/Movie_0082.mp4'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import { useState } from 'react';


function App() {
  const [openModel,setOpenModel]=useState(false)
  return (
    <div className="App">
       <ToastContainer />
      <video autoPlay loop muted playsInline className="video_player">
        <source src={video} type="video/mp4"></source>
      </video>
      
      <Navbar openModel={openModel} setOpenModel={setOpenModel} />
      <Home/>
      
    </div>
  );
}

export default App;
