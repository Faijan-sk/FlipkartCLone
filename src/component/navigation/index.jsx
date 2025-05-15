import React from 'react'
import './../navigation/navbar.css'

import { Link } from 'react-router-dom'

// Icons
import { CiSearch } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { IoIosArrowUp } from 'react-icons/io'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { PiStorefront } from 'react-icons/pi'
import { SlOptionsVertical } from 'react-icons/sl'

// Image
import MainLogo from '../../asessts/images/logo/MainLogo.svg' // check path spelling

function Navbar() {
  return (
    <div className="navbar shadow-md">
      <div className="navbarLogo">
        <img src={MainLogo} alt="company_logo" />
      </div>
      <div className="input-primary d-flex align-items-center px-2">
        <CiSearch size={20} className="text-secondary d-flex" />
        <input
          className="form-control border-0 shadow-none bg-transparent"
          type="text"
          placeholder="Search for Products, Brands and More"
        />
      </div>

      {/* Login Button with Hover Effect */}
      <div className="d-flex align-items-center px-2 py-2 rounded login-btn-hover">
        <CgProfile size={20} className="d-flex mx-2 icon-color" />
        <Link
          to="/login"
          className="navbar-primary-text text-decoration-none icon-color"
        >
          Login
        </Link>
        <IoIosArrowUp size={16} className="d-flex mx-2 icon-color" />
      </div>

      <div className="d-flex align-items-center cursor-pointer">
        <HiOutlineShoppingCart size={20} className="text-dark d-flex mx-2" />
        <Link
          to="/cart"
          className="navbar-primary-text text-decoration-none text-dark"
        >
          Cart
        </Link>
      </div>
      <div className="d-flex align-items-center cursor-pointer">
        <PiStorefront size={20} className="text-dark d-flex mx-2" />
        <Link
          to="/becomeSeller"
          className="navbar-primary-text text-decoration-none text-dark"
        >
          Become Seller
        </Link>
      </div>
      <div className="d-flex align-items-center cursor-pointer">
        <SlOptionsVertical size={20} className="text-dark d-flex mx-2" />
      </div>
    </div>
  )
}

export default Navbar
