import React from 'react'

// import css
import './../heroSectionThree/heroSection.css'

// Import static images
import one from './../../../assets/images/homeSectionFour/one.jpg'
import two from './../../../assets/images/homeSectionFour/two.jpg'
import three from './../../../assets/images/homeSectionFour/three.jpg'
import four from './../../../assets/images/homeSectionFour/four.jpg'
import five from './../../../assets/images/homeSectionFour/five.jpg'
import six from './../../../assets/images/homeSectionFour/six.jpg'
import seven from './../../../assets/images/homeSectionFour/seven.jpg'
import eight from './../../../assets/images/homeSectionFour/eight.jpg'
import nine from './../../../assets/images/homeSectionFour/nine.jpg'
import ten from './../../../assets/images/homeSectionFour/ten.jpg'
import eleven from './../../../assets/images/homeSectionFour/eleven.jpg'
import twelve from './../../../assets/images/homeSectionFour/tweleve.jpg' // ✅ fixed typo from "tweleve" to "twelve" (filename dependent)

// Functional component
function Index() {
  const Cards = [
    { id: 1, img: one },
    { id: 2, img: two },
    { id: 3, img: three },
    { id: 4, img: four },
    { id: 5, img: five },
    { id: 6, img: six },
    { id: 7, img: seven },
    { id: 8, img: eight },
    { id: 9, img: nine },
    { id: 10, img: ten },
    { id: 11, img: eleven },
    { id: 12, img: twelve },
  ]

  return (
    <div className="mt-5 mx-4 d-flex  py-2">
      <div className="row">
        {Cards.map((img) => (
          <div key={img.id} className="col-6 col-md-4 col-lg-4 mb-4">
            <img
              src={img.img}
              alt={`Card ${img.id}`}
              className="img-fluid rounded shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
