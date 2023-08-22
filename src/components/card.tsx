import React, { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { PiHeartLight } from 'react-icons/pi';

const ProductCard = ({ img, width, title, children, price, loading }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  const handleMouseEnter = () => {
    setOptionsVisible(true);
  };

  const handleMouseLeave = () => {
    setOptionsVisible(false);
  };

  return (
    <>
    <div className='flex flex-col'>
    <div
      className=" group w-full h-auto  overflow-hidden relative  shadow-md "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} width={width} className=" object-cover w-full h-full transition-transform duration-800 transform group-hover:scale-125" loading='lazy' />
      {isOptionsVisible && (
        <div className=" absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
          <button className="rounded-full bg-Charcoal p-4 mx-2"><CiShoppingCart size={30}/></button>
          <button className="bg-Charcoal p-4 rounded-full mx-2"><PiHeartLight size={30}/></button>
        </div>
      )}
     
    </div>
     <div className=" p-4 text-black">
     <h2>{title}</h2>
     <h2>{price}</h2>
     </div>
   </div>
   </>
  );
};

export default ProductCard;
