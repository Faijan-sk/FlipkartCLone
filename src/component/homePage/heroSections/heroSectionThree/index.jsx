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

// ✅ Use PascalCase for component name to avoid ESLint hook error
function HeroSectionThree() {
  const scrollRef = useRef(null)

  // ✅ Corrected scrollRight logic - was incorrectly using scrollRight instead of scrollLeft
  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= 400
  }

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += 400
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

  return (
    <div className="hero-Section mt-3">
      <div className="row">
        <div className="col-12 d-flex">
          {/* ✅ Use position-relative for the parent if child is absolutely positioned */}
          <div
            className="col-12 col-md-10 position-relative"
            style={{ backgroundColor: 'lightgrey' }}
          >
            <div className="text-start px-3 py-2 fw-2 d-flex align-items-center">
              <h4>499 Only!</h4>
            </div>

            <div
              ref={scrollRef}
              className="d-flex overflow-auto px-5 gap-3 custom-scroll"
              style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}
            >
              <button
                onClick={scrollLeft}
                className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-3"
              >
                &#8249;
              </button>
              <button
                onClick={scrollRight}
                className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-3"
              >
                &#8250;
              </button>

              {category.map((item) => (
                <div
                  key={item.id}
                  className="text-center gap-5"
                  style={{ width: '150px', flex: '0 0 auto' }} // ✅ Consistent width, no Bootstrap grid needed inside scroller
                >
                  <img
                    src={item.img}
                    alt={item.description}
                    className="img-fluid mb-2"
                    style={{
                      height: '180px',
                      width: '100%',
                      objectFit: 'cover',
                    }} // ✅ Uniform size
                  />
                  <p className="mb-1">{item.description}</p>
                  <h6>{item.offer}</h6>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Flight Booking ad stays fixed on the side */}
          <div className="col-12 col-md-2 p-3">
            <img
              src={FlightBooking}
              alt="Flight Booking"
              className="img-fluid"
            />
          </div>
        </div>
        {/* this is must take full width */}
        <div className="col-12 d-flex flex-wrap justify-content-center gap-3">
          {category.map((item) => (
            <div
              key={item.id}
              style={{ width: '150px' }}
              className="text-center"
            >
              <img
                src={item.img}
                alt={item.description}
                className="img-fluid"
                style={{
                  height: '180px',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
              <p className="mb-0">{item.description}</p>
              <h6>{item.offer}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSectionThree
