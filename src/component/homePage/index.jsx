import React from 'react'

// import component of home page
import HeroSectionOne from './heroSections/heroSectionOne/index'
import HeroSectionTwo from './heroSections/heroSectionTwo/index'
import HeroSectionThree from './heroSections/heroSectionThree/index'
import HeroSectionFour from './heroSections/heroSectionFour/index'
import HeroSectionFive from './heroSections/hersectionFive/index'
import Footer from './../footer/index'
function index() {
  return (
    <>
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

      {/* Footer  */}
      <Footer />
    </>
  )
}

export default index
