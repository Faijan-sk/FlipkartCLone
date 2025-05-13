import React, { useEffect, useRef, useState } from 'react'
import './heroSection.css'

import BannerOne from '../../../../asessts/images/heroSection/banner-1.jpg'
import BannerTwo from '../../../../asessts/images/heroSection/banner-2.jpg'
import BannerThree from '../../../../asessts/images/heroSection/banner-3.jpg'
import BannerFour from '../../../../asessts/images/heroSection/banner-4.jpeg'
import BannerFive from '../../../../asessts/images/heroSection/banner-5.jpeg'
import BannerSix from '../../../../asessts/images/heroSection/banner-6.jpg'

const images = [
  BannerTwo,
  BannerThree,
  BannerFour,
  BannerFive,
  BannerOne,
  BannerSix,
]

const HeroCarousel = () => {
  const extendedImages = [images[images.length - 1], ...images, images[0]]
  const [currentIndex, setCurrentIndex] = useState(1) // Start at real first
  const [isTransitioning, setIsTransitioning] = useState(true)
  const trackRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
      setIsTransitioning(true)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Handle seamless looping
  useEffect(() => {
    if (!isTransitioning) return

    const handleTransitionEnd = () => {
      if (currentIndex === extendedImages.length - 1) {
        // Jump from fake last to real first
        setIsTransitioning(false)
        setCurrentIndex(1)
      } else if (currentIndex === 0) {
        // Jump from fake first to real last
        setIsTransitioning(false)
        setCurrentIndex(extendedImages.length - 2)
      }
    }

    const track = trackRef.current
    track.addEventListener('transitionend', handleTransitionEnd)

    return () => track.removeEventListener('transitionend', handleTransitionEnd)
  }, [currentIndex, extendedImages.length, isTransitioning])

  const goToIndex = (index) => {
    setCurrentIndex(index)
    setIsTransitioning(true)
  }

  const next = () => {
    setCurrentIndex((prev) => prev + 1)
    setIsTransitioning(true)
  }

  const prev = () => {
    setCurrentIndex((prev) => prev - 1)
    setIsTransitioning(true)
  }

  return (
    <div className="heroSection-div">
      <div className="carousel-container">
        <div
          className="carousel-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
          }}
        >
          {extendedImages.map((img, index) => (
            <img
              loading="lazy"
              src={img}
              key={index}
              alt={`slide ${index}`}
              className="carousel-image"
            />
          ))}
        </div>

        <button className="arrow left-arrow" onClick={prev}>
          &#10094;
        </button>
        <button className="arrow right-arrow" onClick={next}>
          &#10095;
        </button>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index + 1 ? 'active' : ''}`}
              onClick={() => goToIndex(index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel
