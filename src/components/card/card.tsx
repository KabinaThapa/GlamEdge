import React, { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';
import {TfiGallery} from 'react-icons/tfi'
import Link from 'next/link'
import {CardProps} from './types/cardprops'
import Image from 'next/image';

const ProductCard: React.FC<CardProps>=({ img, title, children, price, loading, addtocart, savetowishlist, size, heartfill, href }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
 

  const handleMouseEnter = () => {
    setOptionsVisible(true);
  };

  const handleMouseLeave = () => {
    setOptionsVisible(false);
  };

  return (
    <>
    
    <div className=' group relative w-full'
      
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='overflow-hidden relative md:h-80 h-56 '>
       
      <Image src={img} alt='picture' width={2000} height={1800} className=" object-cover w-full h-full transition-transform duration-800 transform group-hover:scale-125" loading='lazy' />
      
      {isOptionsVisible && (
        <div className=" absolute inset-0 flex justify-around items-center bg-black bg-opacity-50 text-white">
          <div className='md:w-[80%] h-[9rem] md:h-auto flex md:flex-row flex-col md:justify-around justify-between items-center '>
          <div onClick={addtocart} className="rounded-full md:w-12 md:h-12 md:p-3 w-10 h-10 flex items-center justify-center bg-Jet  mx-2 hover:scale-110"><CiShoppingCart  size={27}/></div>
          <div onClick={savetowishlist} className="bg-Jet md:w-12 md:h-12 md:p-3 w-10 h-10 flex items-center justify-center  rounded-full mx-2 hover:scale-110">
            { heartfill ? (
                      <PiHeartFill className='mx-auto ' size={26} />
                    ) : (
                      <PiHeartLight size={26} />
                    )}
                    </div>
                   <Link href={href}>
                    
                 
                    <div className="bg-Jet flex items-center justify-center  rounded-full md:w-12 md:h-12 md:p-3 w-10 h-10  mx-2 hover:scale-110"> 
                    <TfiGallery  size={20}/>
                    </div>
                    </Link>
</div>
                    
        </div>
       
      )}
      
      </div>
      <div className='p-2 md:text-lg text-sm font-roboto'>
    <h2>{title}</h2>
     <h2 className='font-serif'>${price}</h2>
     </div>
    </div>
    
     
   
   </>
  );
};

export default ProductCard;
