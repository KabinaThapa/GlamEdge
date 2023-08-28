import React from 'react'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

const carousel = ({images}) => {
  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000, 
    slidesToShow: 2, 
    slidesToScroll: 2, 
    
   
  }
  return (
    <div className=" w-[32%] h-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='relative w-full h-80'>
            <img className='object-cover w-full h-full' src={image.img} alt={image.caption} />
            <div className='absolute inset-0 flex items-center justify-center text-white'>
            <p className="legend">{image.caption}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default carousel