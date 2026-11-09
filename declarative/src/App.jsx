import React from "react";
import { NavLink, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      
        <nav className=" flex justify-between p-4 bg-blue-200">
          <p>logo</p>
          <div className="flex gap-10">
           <NavLink to={"/home"}>Home</NavLink>
           <NavLink to={"/about"}>About</NavLink>
           <NavLink to={"/contact"}>Contact</NavLink>
          </div>
          <button>Login</button>
        </nav>
      
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

    </div>
  );
};

export default App;
