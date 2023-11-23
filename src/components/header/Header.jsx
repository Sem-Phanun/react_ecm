import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaUser,FaHeart, FaShoppingBag} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa6'
import Logo from '../../assets/logo/logo.png'
import './Header.scss'
const Header = () => {
  return (
    <>
      <header className="header-container">
        <nav className="top-header">
          <li className='icons'>
            <FaBars />
          </li>
          <figure className="logo-box">
            <img src={Logo}/>
          </figure>
          <div className="search___filed">
            <input type="search" 
              className='input-box'
              placeholder='Search for product'
            />
            <span>
              <AiOutlineSearch className='icon-search' />
            </span>
          </div>
          <li className="icons"><FaUser/></li>
          <li className="icons"><FaHeart/></li>
          <li className="icons"><FaShoppingBag /></li>
        </nav>
      </header>
    </>
  )
}

export default Header