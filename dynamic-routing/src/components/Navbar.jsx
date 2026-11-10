import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <nav className=" flex justify-between p-4 bg-blue-200">
          <p>logo</p>
          <div className="flex gap-10">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/cart"}>Cart</NavLink>
          </div>
          <button>Login</button>
        </nav>
    </div>
  )
}

export default Navbar