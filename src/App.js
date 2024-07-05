
import './App.css';
import Home from './components/home/Home';
import NewsComponent from './components/news/NewsComponent';
import Video from './components/video/Video';
import { BrowserRouter,Route,Routes} from "react-router-dom";


function App(props) {
  return (
    <div className="App">
      <h1>Hello Guys....,{props.name}</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video' element={<Video/>}/>
        <Route path='/news' element={<NewsComponent/>}/>
      </Routes>
      </BrowserRouter>
     <NewsComponent/>
      <Home/>
    </div>
  );
}

export default App;
