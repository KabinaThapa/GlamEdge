import React, { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';
import {TfiGallery} from 'react-icons/tfi'
import Link from 'next/link'
import {CardProps} from './types/cardprops'
import Image from 'next/image';

const ProductCard: React.FC<CardProps>=({ img, title, children, price, loading, addtocart, savetowishlist, size, heartfill=false, href }) => {
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
      <div className='overflow-hidden relative h-80 aspect-w-80'>
       
      <Image src={img} alt='picture' width={2000} height={1800} className=" object-cover w-full h-full transition-transform duration-800 transform group-hover:scale-125" loading='lazy' />
      
      {isOptionsVisible && (
        <div className=" absolute inset-0 flex justify-around items-center bg-black bg-opacity-50 text-white">
          <div className='w-[80%] flex justify-around'>
          <button onClick={addtocart} className="rounded-full bg-Jet p-2 mx-2 hover:scale-110"><CiShoppingCart size={27}/></button>
          <button onClick={savetowishlist} className="bg-Jet p-2 rounded-full mx-2 hover:scale-110">
            { heartfill ? (
                      <PiHeartFill size={26} />
                    ) : (
                      <PiHeartLight size={26} />
                    )}
                    </button>
                   <Link href={href}>
                    
                 
                    <button className="bg-Jet p-3 rounded-full mx-2 hover:scale-110"> 
                    <TfiGallery size={20}/>
                    </button>
                    </Link>
</div>
                    
        </div>
       
      )}
      
      </div>
      <div className='p-2 text-lg font-roboto'>
    <h2>{title}</h2>
     <h2 className='font-serif'>${price}</h2>
     </div>
    </div>
    
     
   
   </>
  );
};

export default ProductCard;
