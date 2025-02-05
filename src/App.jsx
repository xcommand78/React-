// App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from "./components/Blog";
import LoginPage from "./components/Login";

const App = () => {
  return (
    <Router>
      <div className="main">
        <Navbar title="TextEd" />
        <Routes>
          <Route path="/aboutus" element={<Aboutus />} />
          {/* Add a default route if needed */}
          <Route path="/" element={<Home />} />
          <Route path='/blog' element ={<BlogPage/>}/>
          <Route path='/login' element ={<LoginPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;