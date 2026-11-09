import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
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
    </div>
  )
}

export default Navbar