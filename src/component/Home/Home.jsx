import React from 'react'

// import component of home page
import HeroSectionOne from './heroSectionOne/HerosctionOne'
import HeroSectionTwo from './heroSectionTwo/HeroSectionTwo'
import HeroSectionThree from './heroSectionThree/HeroSectionThree'
import HeroSectionFour from './heroSectionFour/HeroSectionFour'
import HeroSectionFive from './hersectionFive/HeroSectionFive'
import Services from '../aboutServices/Services'

function index() {
  return (
    <div>
      {/* category Slider  */}
      <HeroSectionOne />

      {/* advertisement Slider */}
      <HeroSectionTwo />

      {/* specific offer */}
      <HeroSectionThree />

      {/* offer cards*/}
      <HeroSectionFour />

      {/* random picks */}
      <HeroSectionFive />

      {/* details about services  */}
      <Services />
    </div>
  )
}

export default index
