'use client'
import { RootState } from '@/redux/store';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CiShoppingCart, CiHeart } from 'react-icons/ci';
import { PiHeartLight } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import Searchbar from './searchbar';
import { subcategory } from './../redux/features/subcategoryslice';

const Navbar = () => {
  const [isloggedin, setIsloggedin] = useState(false);
  const [useremail, setUseremail] = useState('');
  const [open, setOpen]=useState(false)

  useEffect(() => {
    const sessionToken = localStorage.getItem('session-token');
    const email = localStorage.getItem('email');
    if (sessionToken && email) {
      setIsloggedin(true);
      setUseremail(email);
    }
    else{
      setIsloggedin(false)
      
    }
  }, [isloggedin, useremail]);
 

  const handleLogout = () => {
    localStorage.removeItem('session-token');
    localStorage.removeItem('email');
    setUseremail('');
    setIsloggedin(false);
    setOpen(false)
  };
  const handleOpen=()=>{
    setOpen(!open)
  }

  const { item, status, error } = useSelector((state: RootState) => state.category);
  const totalItems = useSelector((state: RootState) => state.cart.cartQuantity);

  return (
    <>
    <nav className='w-full flex  justify-between p-2 items-center mt-6'>
     
      <ul>
        <div className='text-3xl flex items-baseline'>
          <h1>Glam </h1><h1 className='text-4xl'>Edge</h1>
        </div>
      </ul>
      <div>
        <Searchbar/>
      </div>
      <div className='w-[40%] flex justify-center items-center'>
        <ul className='flex w-full justify-between text-lg items-center'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <div className='relative group'>
            <span className='group-hover:scale-125 cursor-pointer'>
              Shop
              <div className='hidden group-hover:block absolute left-0 mt-2 py-2 bg-white border rounded shadow-lg'>
                {item.map((item) => (
                  <div key={item.id}>
                    <Link href={`/product/${item.id}`} className='block px-4 py-2'>
                      {item.id}
                    </Link>
                  </div>
                ))}
              </div>
            </span>
          </div>
          <li>
            <Link href='/'>Sale</Link>
          </li>

          <div className='relative'>
            <Link href='/shoppingcart'>
              <CiShoppingCart size={30} />
            </Link>
            <div className='absolute bottom-4 left-6 bg-khaki rounded-full w-6 h-6 text-white p-2 flex items-center justify-center'>
              {totalItems}
            </div>
          </div>

          <li>
            <Link href='/wishlist'>
              <PiHeartLight size={30} />{' '}
            </Link>
          </li>
          {isloggedin ? (
            <div className=' flex items-center'>
              <div onClick={handleOpen} className='bg-Antiflashwhite capitalize cursor-pointer rounded-full w-10 h-10 text-2xl text-center flex items-center justify-center mr-2'>
                {useremail[0]}
              </div>
             
            </div>
          ) : (
            <button>
              <Link href='/signin'>SignIn</Link>
            </button>
          )}
        </ul>
        </div>
    </nav>
    <div className='border-b-2 border-khaki w-[90%] mx-auto'></div>
   
      {open ?
      (
        <div className=' absolute right-0 top-20 rounded-md w-72 h-72 bg-Platinum flex flex-col justify-center items-center '>
           <div  className='bg-Paledogwood rounded-full w-12 h-12 text-2xl text-center flex items-center justify-center mr-2'>
                {useremail[0]}
              </div>
           {useremail}
              <button
                className='bg-Antiflashwhite p-2 rounded-md ml-2'
                onClick={handleLogout}
              >
                Logout
              </button>
        </div>
      ):null
      }
      </>
  );
};

export default Navbar;
