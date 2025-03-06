import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Gallery from "./pages/Gallery";
import './assets/css/main.css';

function App() {
  return (
    <Router>
      <div className="flex">
       
        <div className="flex-1">
        
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/" element={<Gallery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
