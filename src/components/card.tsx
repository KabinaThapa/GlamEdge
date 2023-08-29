import React, { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';


const ProductCard = ({ img, width, title, children, price, loading, addtocart, savetowishlist, size, heartfill, }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
 

  const handleMouseEnter = () => {
    setOptionsVisible(true);
  };

  const handleMouseLeave = () => {
    setOptionsVisible(false);
  };

  return (
    <>
    
    <div className=' group  overflow-hidden relative '
      
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='overflow-hidden relative w-full h-80'>
       
      <img src={img} width={width} className=" object-cover w-full h-full transition-transform duration-800 transform group-hover:scale-125" loading='lazy' />
      
      {isOptionsVisible && (
        <div className=" absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
          <button onClick={addtocart} className="rounded-full bg-Charcoal p-4 mx-2"><CiShoppingCart size={30}/></button>
          <button onClick={savetowishlist} className="bg-Charcoal p-4 rounded-full mx-2">
            {heartfill ? (
                      <PiHeartFill size={28} />
                    ) : (
                      <PiHeartLight size={28} />
                    )}</button>
        </div>
       
      )}
      
      </div>
      <div className='p-2 text-lg font-serif'>
    <h2>{title}</h2>
     <h2>${price}</h2>
     </div>
    </div>
    
     
   
   </>
  );
};

export default ProductCard;
