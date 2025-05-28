import React from 'react'

// Import CSS
import './../hersectionFive/heroSection.css'

// Image imports
import Shirt from './../../../assets/images/heroSectionFive/shirt.jpeg'
import DryFruit from './../../../assets/images/heroSectionFive/dry-fruits.jpeg'
import Fan from './../../../assets/images/heroSectionFive/fan.jpeg'
import Saree from './../../../assets/images/heroSectionFive/saree.jpeg'
import Shoes from './../../../assets/images/heroSectionFive/shoes.jpeg'
import Slippers from './../../../assets/images/heroSectionFive/slipper.jpeg'
import Bag from './../../../assets/images/heroSectionFive/bag.jpeg'
import Shorts from './../../../assets/images/heroSectionFive/shorts.jpeg'

// import banners
import bannerTwo from './../../../assets/images/heroSectionFive/banner-vertical-two.jpg'
import HorizontalBanner from './../../../assets/images/heroSectionFive/banner-horizontal.jpg'

function Index() {
  const products = [
    {
      id: 1,
      image: Shirt,
      description: 'Casual Shirts',
      offer: 'Min. 50% Off',
    },
    {
      id: 2,
      image: DryFruit,
      description: 'Premium Dry Fruits',
      offer: 'Up to 40% Off',
    },
    {
      id: 3,
      image: Fan,
      description: 'Cooling Fans',
      offer: 'Flat 30% Off',
    },
    {
      id: 4,
      image: Saree,
      description: 'Designer Sarees',
      offer: 'Min. 60% Off',
    },
  ]

  const summerProducts = [
    {
      id: 1,
      image: Shoes,
      description: 'Trendy Shoes',
      offer: 'Min. 40% Off',
    },
    {
      id: 2,
      image: Slippers,
      description: 'Comfort Slippers',
      offer: 'Up to 30% Off',
    },
    {
      id: 3,
      image: Bag,
      description: 'Stylish Bags',
      offer: 'Flat 35% Off',
    },
    {
      id: 4,
      image: Shorts,
      description: 'Summer Shorts',
      offer: 'Min. 25% Off',
    },
  ]

  return (
    <div className="hero-section">
      <div>
        {/* Use d-flex and align-stretch to equalize column height */}
        <div className="row g-3 d-flex align-items-stretch">
          {/* First Box */}
          <div className="col-12 col-md-4 d-flex">
            <div className="child-div text-dark p-3 border w-100 d-flex flex-column">
              <div className="text-start fs-5 mt-2 ms-3">
                Season's Top Picks
              </div>
              <div className="row mt-3 g-3">
                {products.map((product, i) => (
                  <div className="col-6" key={i}>
                    <div className="p-2 border h-100 text-center">
                      <img
                        src={product.image}
                        style={{
                          objectFit: 'contain',
                          width: '100%',
                          height: '200px',
                        }}
                        alt={product.description}
                        className="img-fluid mb-2"
                      />
                      <p className="mb-1">{product.description}</p>
                      <p className="text-success mb-0">{product.offer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div className="col-12 col-md-4 d-flex">
            <div className="child-div text-dark p-3 border w-100 d-flex flex-column">
              <div className="text-start fs-5 mt-2 ms-3">Summer Fashion</div>
              <div className="row mt-3 g-3">
                {summerProducts.map((product, i) => (
                  <div className="col-6" key={i}>
                    <div className="p-2 border h-100 text-center">
                      <img
                        src={product.image}
                        style={{
                          objectFit: 'contain',
                          width: '100%',
                          height: '200px',
                        }}
                        alt={product.description}
                        className="img-fluid mb-2"
                      />
                      <p className="mb-1">{product.description}</p>
                      <p className="text-success mb-0">{product.offer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Third Box */}
          <div className="col-12 col-md-4 d-flex">
            <div className="child-div w-100 h-100 border">
              <img
                src={bannerTwo}
                alt="Vertical Banner"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
                className="img-fluid h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 py-3">
        <img
          src={HorizontalBanner}
          style={{ width: '100%', objectFit: 'contain' }}
          alt="banner"
        />
      </div>
    </div>
  )
}

export default Index
