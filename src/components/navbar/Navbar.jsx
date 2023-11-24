import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <ul className="navbarList">
          <li>
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={"/tvandaudio"}>Tv&Audio</NavLink>
          </li>
          <li>
            <NavLink to={"/smartphones"}>Smartphones</NavLink>
          </li>
          <li>
            <NavLink to={"/laptopandpcs"}>Laptop&Pcs</NavLink>
          </li>
          <li>
            <NavLink to={"/gadgets"}>Gadgets</NavLink>
          </li>
          <li>
            <NavLink to={"/accessory"}>Accessory</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar