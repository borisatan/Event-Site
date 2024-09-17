import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import See from "./See";
function App() {
  return (
    <Router>
      <div>
        <Navbar brandName="Events Sofia" />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/see" element={<See />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
