import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import images from '@/static-data/images'

const carousel = ({images}) => {
  return (
    <Carousel showArrows={true} showStatus={false} showThumbs={false}>
    {images.map((image, index) => (
      <div key={index}>
        <img src={image.url} alt={image.caption} />
        <p className="legend">{image.caption}</p>
      </div>
    ))}
  </Carousel>
  )
}

export default carousel