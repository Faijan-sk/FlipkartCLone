import React from 'react'
import './../App.css'
import Navbar from './header/Navigation'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default Layout
