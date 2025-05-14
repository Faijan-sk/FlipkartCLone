import React, { useRef } from 'react'

// import css
import './heroSection.css'

// images import
import FlightBooking from './../../../../asessts/images/heroSEctionThree/flight-booking-add.jpg'
import TopRatedStyle from './../../../../asessts/images/heroSEctionThree/Top-rated-style-under-499.jpeg'
import SareeSelling from './../../../../asessts/images/heroSEctionThree/best-selling-sarees-under-499.jpeg'
import kidsDressTshirt from './../../../../asessts/images/heroSEctionThree/kids-dresses-tshirt.jpeg'
import KurtaSets from './../../../../asessts/images/heroSEctionThree/kurta-sets-unser-499.jpeg'
import SunnyShades from './../../../../asessts/images/heroSEctionThree/sunny-shades-under-499.jpeg'
import RebookHrx from './../../../../asessts/images/heroSEctionThree/Reebok,-Hrx.jpeg'
import UspaWrogn from './../../../../asessts/images/heroSEctionThree/uspa-wrogn-50-80%off.jpeg'
import TopDealsSpoyl from './../../../../asessts/images/heroSEctionThree/Top-deals-under-499.jpg'

// phone images
import MotoG35 from './../../../../asessts/images/heroSEctionThree/moto-g35-5g.jpeg'
import GalaxyS24 from './../../../../asessts/images/heroSEctionThree/galaxy-s24-fe.jpeg'
import MotoEdge60 from './../../../../asessts/images/heroSEctionThree/Motorola-edge-60-pro.jpeg'
import NothingPhone from './../../../../asessts/images/heroSEctionThree/nothing-phone-3A.jpeg'
import OppoK12 from './../../../../asessts/images/heroSEctionThree/Oppo-k12x-5g.jpeg'
import PocoC75 from './../../../../asessts/images/heroSEctionThree/poco-c75-5g.jpeg'
import PocoX7 from './../../../../asessts/images/heroSEctionThree/poco-x7-5g.jpeg'
import RealMeP1 from './../../../../asessts/images/heroSEctionThree/realme-p1-5g.jpeg'

function HeroSectionThree() {
  const scrollRefOne = useRef(null)
  const scrollRefTwo = useRef(null)

  const scrollLeft = (ref) => {
    if (ref.current) ref.current.scrollLeft -= 400
  }

  const scrollRight = (ref) => {
    if (ref.current) ref.current.scrollLeft += 400
  }

  const category = [
    {
      id: 1,
      img: TopRatedStyle,
      description: 'Top Rated Styles!',
      offer: 'Under 499',
    },
    {
      id: 2,
      img: SareeSelling,
      description: 'Bestselling sarees',
      offer: 'Under 499',
    },
    {
      id: 3,
      img: kidsDressTshirt,
      description: 'Kids dresses t-shirt...',
      offer: 'Under 499',
    },
    {
      id: 4,
      img: KurtaSets,
      description: 'Kurta Sets',
      offer: 'Under 499',
    },
    {
      id: 5,
      img: SunnyShades,
      description: 'Sunny Shades',
      offer: 'Under 499',
    },
    {
      id: 6,
      img: RebookHrx,
      description: 'Rebook, Hrx...',
      offer: 'Min. 70% off',
    },
    {
      id: 7,
      img: UspaWrogn,
      description: 'Uspa, Wrogn...',
      offer: '55-70% off',
    },
    {
      id: 8,
      img: TopDealsSpoyl,
      description: 'Top deals ',
      offer: 'Under 499',
    },
  ]

  const phones = [
    {
      id: 1,
      img: MotoG35,
      description: 'Top Rated Styles!',
      offer: 'Under ₹499',
    },
    {
      id: 2,
      img: GalaxyS24,
      description: 'Flagship Experience!',
      offer: 'Under ₹99999',
    },
    {
      id: 3,
      img: MotoEdge60,
      description: 'Premium Performance!',
      offer: 'Under ₹28999',
    },
    {
      id: 4,
      img: NothingPhone,
      description: 'Sleek & Unique!',
      offer: 'Under ₹39999',
    },
    {
      id: 5,
      img: OppoK12,
      description: 'All-Rounder Pick!',
      offer: 'Under ₹18999',
    },
    {
      id: 6,
      img: PocoC75,
      description: 'Budget Powerhouse!',
      offer: 'Under ₹9999',
    },
    {
      id: 7,
      img: PocoX7,
      description: 'Gaming Beast!',
      offer: 'Under ₹21999',
    },
    {
      id: 8,
      img: RealMeP1,
      description: 'Stylish Performer!',
      offer: 'Under ₹15999',
    },
  ]

  return (
    <div className="hero-Section mt-3">
      <div className="row">
        <div className="col-12 d-flex">
          <div className="col-12 col-md-10 position-relative pe-5">
            <div className="text-start px-3 py-2 fw-2 d-flex align-items-center">
              <h4>499 Only!</h4>
            </div>

            <div
              ref={scrollRefOne}
              className="d-flex overflow-auto px-5 custom-scroll"
              style={{
                scrollBehavior: 'smooth',
                whiteSpace: 'nowrap',
                gap: '1rem',
              }}
            >
              <button
                onClick={() => scrollLeft(scrollRefOne)}
                className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-3"
              >
                &#8249;
              </button>
              <button
                onClick={() => scrollRight(scrollRefOne)}
                className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-3"
              >
                &#8250;
              </button>

              {category.map((item) => (
                <div
                  key={item.id}
                  className="text-center"
                  style={{ width: '150px', flex: '0 0 auto' }}
                >
                  <img
                    src={item.img}
                    alt={item.description}
                    className="img-fluid mb-2"
                    style={{
                      height: '180px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <p className="mb-1">{item.description}</p>
                  <h6>{item.offer}</h6>
                </div>
              ))}
            </div>
          </div>

          <div
            className="col-12 col-md-2"
            style={{ backgroundColor: 'rgb(237, 232, 232)' }}
          >
            <img
              src={FlightBooking}
              alt="Flight Booking"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Spacer between carousels */}
        <div className="col-12 d-flex my-4">
          <div className="col-12 col-md-12 position-relative">
            <div className="text-start px-3 py-2 fw-2 mb-2 d-flex align-items-center">
              <h4>Best Deals on Smartphones</h4>
            </div>

            <div
              ref={scrollRefTwo}
              className="d-flex overflow-auto px-5 custom-scroll"
              style={{
                scrollBehavior: 'smooth',
                whiteSpace: 'nowrap',
                gap: '1rem',
              }}
            >
              <button
                onClick={() => scrollLeft(scrollRefTwo)}
                className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-3"
              >
                &#8249;
              </button>
              <button
                onClick={() => scrollRight(scrollRefTwo)}
                className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-3"
              >
                &#8250;
              </button>

              {phones.map((item) => (
                <div
                  key={item.id}
                  className="text-center me-4"
                  style={{ width: '150px', flex: '0 0 auto' }}
                >
                  <img
                    src={item.img}
                    alt={item.description}
                    className="img-fluid mb-2"
                    style={{
                      height: '180px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <p className="mb-1">{item.description}</p>
                  <h6>{item.offer}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionThree
