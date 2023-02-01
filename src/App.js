import './App.css';
import {Routes, Route} from "react-router-dom";

/* Pages */
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"

/* Component */
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path="/about" element={< About />} />
        <Route path="*" element={< Home />} />
      </Routes>
    </div>
  );
}

export default App;
