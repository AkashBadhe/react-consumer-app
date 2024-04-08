import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";

function App() {
  // Add this in your component file
  require("react-dom");
  window.React2 = require("react");
  console.log(window.React1 === window.React2);
  return (
    <Router>
      <div className="App">
      <h1 className="header">React Consumer App Header</h1>
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
        <h1 className="footer">React Consumer App Footer</h1>
      </div>
    </Router>
  );
}

export default App;
