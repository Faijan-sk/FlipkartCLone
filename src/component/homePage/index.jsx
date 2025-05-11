import React from 'react'

// import component of home page
import HeroSectionOne from './heroSections/heroSectionOne/index'
import HeroSectionTwo from './heroSections/heroSectionTwo/index'
import HeroSectionThree from './heroSections/heroSectionThree/index'
function index() {
  return (
    <>
      {/* category Slider  */}
      <HeroSectionOne />

      {/* advertisement Slider */}
      <HeroSectionTwo />

      {/* specific offer */}
      <HeroSectionThree />
    </>
  )
}

export default index
