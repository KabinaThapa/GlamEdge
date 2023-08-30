import React from 'react'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import {HiChevronRight} from 'react-icons/hi2'

const NextArrow=({onClick})=>(
  <button onClick ={onClick} className='w-10 h-10 bg-wenge hover:scale-110 rounded-full p-2  flex items-center absolute right-0 top-44'>
  <HiChevronRight size={28} style={{color:'white'}}/>
  </button>
)

const carousel = ({items, settings, children}) => {
  const customSettings={
    ...settings,
    nextArrow:<NextArrow/> as any
  }
 

  
  
  return (
    
      <Slider {...customSettings}>
       {children}
      </Slider>
    
  )
}

export default carousel