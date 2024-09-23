import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import{ useState} from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import See from "./See";



function App() {
  const [darkMode, setDarkMode] = useState(false); 

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router>
      <div className="body">
        <Navbar brandName="Events Sofia" />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/see" element={<See />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'} 
        </button>
      </div>
    </Router>
  );
}

export default App;
