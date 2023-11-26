import React from 'react'
import { NavLink } from 'react-router-dom'
import { navbarList } from '../../data/data'
import './Navbar.scss'
const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <ul className="navbarList">
          {
            navbarList.map((navbar, index)=> {
              return (
                <li key={index}>
                  <NavLink to={navbar.route}>{navbar.name}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}

export default Navbar