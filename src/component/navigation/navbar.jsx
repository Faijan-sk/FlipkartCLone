import React from 'react'
import './../../App.css'

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

function navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbarLogo">
          <img src={MainLogo} alt="comony_logo" />
        </div>
        <div className="input-primary d-flex align-items-center px-2">
          <CiSearch size={20} className="text-secondary d-flex" />
          <input
            className="form-control border-0 shadow-none bg-transparent "
            type="text"
            placeholder="Search for Products, Brands and More"
          />
        </div>
        <div className="d-flex align-items-center">
          <CgProfile size={20} className="text-dark d-flex mx-2" />
          <Link
            to="/login"
            className="navbar-primary-text text-decoration-none text-dark"
          >
            Login
          </Link>
          <IoIosArrowUp size={16} className="text-dark d-flex mx-2" />
        </div>
        <div className="d-flex align-items-center">
          <HiOutlineShoppingCart size={20} className="text-dark d-flex mx-2" />
          <Link
            to="/cart"
            className="navbar-primary-text text-decoration-none text-dark"
          >
            Cart
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <PiStorefront size={20} className="text-dark d-flex mx-2" />
          <Link
            to="/becomeSeller"
            className="navbar-primary-text text-decoration-none text-dark"
          >
            Become Seller
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <SlOptionsVertical size={20} className="text-dark d-flex mx-2" />
        </div>
      </div>
    </>
  )
}

export default navbar
