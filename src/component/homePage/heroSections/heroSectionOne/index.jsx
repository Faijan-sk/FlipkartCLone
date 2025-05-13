import React from 'react'
import './index.css'

// static images import
import TopOffers from './../../../../asessts/images/heroSection/TopOffers.png'
import MobileTablet from './../../../../asessts/images/heroSection/Mobile & Tablets.webp'
import Electronics from './../../../../asessts/images/heroSection/Electronics.png'
import Grocery from './../../../../asessts/images/heroSection/Grocery.webp'
import TvLaptops from './../../../../asessts/images/heroSection/TV &  Laptops.webp'
import KidsSection from './../../../../asessts/images/heroSection/Kids Section.webp'
import Furniture from './../../../../asessts/images/heroSection/Furniture.webp'
import Fashion from './../../../../asessts/images/heroSection/Clothing.webp'
import FlightTickets from './../../../../asessts/images/heroSection/Flight & tickets.webp'
import HomeDecore from './../../../../asessts/images/heroSection/Home Decore.png'

function index() {
  return (
    <div className="parent-div">
      <div>
        <img src={TopOffers} alt="Top Offers" />
        <h6>Top Offers</h6>
      </div>
      <div>
        <img src={MobileTablet} alt="Mobile & Tablets" />
        <h6>Mobile & Tablets</h6>
      </div>
      <div>
        <img src={Electronics} alt="Appliances" />
        <h6>Appliances</h6>
      </div>
      <div>
        <img src={Grocery} alt="Top Offers" />
        <h6>Grocery</h6>
      </div>
      <div>
        <img src={TvLaptops} alt="Electronics" />
        <h6>Electronics</h6>
      </div>
      <div>
        <img src={KidsSection} alt="Top Offers" />
        <h6>Kids Section</h6>
      </div>
      <div>
        <img src={Furniture} alt="Furniture" />
        <h6>Furniture</h6>
      </div>
      <div>
        <img src={FlightTickets} alt="Flight & Tickets" />
        <h6>Flight Boooking</h6>
      </div>
      <div>
        <img src={Fashion} alt="Fashion" />
        <h6>Fashion</h6>
      </div>
      <div>
        <img src={HomeDecore} alt="Home Decore" />
        <h6>Home Decore</h6>
      </div>
    </div>
  )
}

export default index
