import React, { MouseEventHandler, ReactNode } from 'react'; // Import ReactNode

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';

// Custom next arrow component
const NextArrow = ({ onClick }: { onClick: MouseEventHandler}) => (
  <button onClick={onClick} className='w-10 h-10 bg-wenge hover:scale-110 rounded-full p-2  flex items-center absolute right-0 top-44'>
    <HiChevronRight size={28} style={{ color: 'white' }} />
  </button>
);

// Custom previous arrow component
const PrevArrow = ({ onClick }: { onClick: MouseEventHandler}) => (
  <button onClick={onClick} className='w-10 h-10 bg-wenge hover:scale-110 rounded-full p-2  flex items-center absolute left-0 z-[100] top-44'>
    <HiChevronLeft size={28} style={{ color: 'white' }} />
  </button>
);

interface CarouselProps {
  settings: Record<string, any>;
  children: ReactNode; // Specify children as ReactNode
}

const Carousel = ({ settings, children }: CarouselProps) => {
  const customSettings = {
    ...settings,
    nextArrow: <NextArrow onClick={settings.nextArrow}/>,
    prevArrow: <PrevArrow onClick={settings.prevArrow} />,
  };

  return <Slider {...customSettings}>{children}</Slider>;
};

export default Carousel;
