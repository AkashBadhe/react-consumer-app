import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { Header, Link } from "my-lib";

const App = () => {
  const headerLinks: Link[] = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
  ];
  return (
    <Router>
      <div className="App">
        <Header logoText={"Consumer App"} links={headerLinks} />
        <div className="content container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <h1 className="footer">React Consumer App Footer</h1>
      </div>
    </Router>
  );
};

export default App;
