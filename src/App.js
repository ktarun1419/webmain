import logo from './logo.svg';
import './App.css';
import video from './Sources/Movie_0081.mp4'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted className="video_player">
        <source src={video} type="video/mp4"></source>
      </video>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
