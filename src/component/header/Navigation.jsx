import React, { useState } from 'react'

import { Link } from 'react-router-dom'

// Icons
import { CiSearch } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { IoIosArrowUp } from 'react-icons/io'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { PiStorefront } from 'react-icons/pi'
import { SlOptionsVertical } from 'react-icons/sl'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { FaRegHeart } from 'react-icons/fa'
import { GoGift } from 'react-icons/go'
import { SlCreditCard } from 'react-icons/sl'

GiCardboardBoxClosed
// Image
import MainLogo from '../../assets/images/logo/MainLogo.svg' // check path spelling

function Navbar() {
  const [openDropDown, setOpenDropDown] = useState(false)

  const dropDown = [
    {
      id: '1',
      text: 'Profile',
      icon: <CgProfile size={20} />,
      link: '',
    },
    {
      id: '2',
      text: 'Flipkart Plus Zone',
      icon: <CgProfile size={20} />,
      link: '',
    },
    {
      id: '3',
      text: 'Orders',
      icon: <GiCardboardBoxClosed size={20} />,
      link: '',
    },
    {
      id: '4',
      text: 'Wishlist',
      icon: <FaRegHeart size={20} />,
      link: '',
    },
    {
      id: '5',
      text: 'Rewards',
      icon: <GoGift size={20} />,
      link: '',
    },
    {
      id: '6',
      text: 'Gift Cards',
      icon: <SlCreditCard size={20} />,
      link: '',
    },
  ]

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
      <div
        onMouseEnter={() => {
          setOpenDropDown(true)
        }}
        onMouseLeave={() => {
          setOpenDropDown(false)
        }}
        className="d-flex align-items-center px-2 py-2 rounded login-btn-hover"
      >
        <CgProfile size={20} className="d-flex mx-2 icon-color" />
        <Link
          to="/login"
          className="navbar-primary-text text-decoration-none icon-color"
        >
          Login
        </Link>
        <IoIosArrowUp size={16} className="d-flex mx-2 icon-color arrow-icon" />
      </div>
      {openDropDown && (
        <div className="Nav-drop-down px-3 py-3 text-start">
          <div
            className="d-flex mb-0"
            style={{ justifyContent: 'space-between' }}
          >
            <p className="text-start">New Customer ?</p>
            <Link to="/signup" className="text-decoration-none ms-2 fw-bold">
              Sign Up
            </Link>
          </div>
          <hr className="mt-0" />

          <ul className="mt-0">
            {dropDown.map((item, index) => (
              <li
                key={item.id || index}
                className="d-flex align-items-center mb-2 mt-0"
                style={{
                  lineHeight: '1.5',
                  paddingBlock: '4px',
                  paddingInline: '2px',
                  justifyContent: 'flex-start', // Ensures alignment to the left
                  textAlign: 'start', // Optional: aligns any text inside
                }}
              >
                <span className="me-2">{item.icon}</span>
                <h6 className="mb-0">{item.text}</h6>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="d-flex align-items-center px-2 py-2 rounded login-btn-hover">
        <HiOutlineShoppingCart size={20} className="d-flex mx-2 icon-color" />
        <Link
          to="/cart"
          className="navbar-primary-text text-decoration-none icon-color"
        >
          Cart
        </Link>
      </div>
      <div className="d-flex align-items-center px-2 py-2 rounded login-btn-hover">
        <PiStorefront size={20} className="d-flex mx-2 icon-color" />
        <Link
          to="/becomeSeller"
          className="navbar-primary-text text-decoration-none icon-color"
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
