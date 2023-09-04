'use client'
import { RootState } from '@/redux/store';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CiShoppingCart, CiHeart } from 'react-icons/ci';
import { PiHeartLight } from 'react-icons/pi';
import { useSelector, useDispatch } from 'react-redux';
import Searchbar from './searchbar';
import {logout} from '@/redux/features/userauthslice'


const Navbar = () => {
 
  const [open, setOpen]=useState(false)
  const dispatch=useDispatch()
  const {isAuthenticated, userEmail}=useSelector((state:RootState)=>state.auth)
 
 

  const handleLogout = () => {
    localStorage.removeItem('session-token');
    localStorage.removeItem('email');
    dispatch(logout())
    setOpen(false)
  };
  const handleOpen=()=>{
    setOpen(!open)
  }

  const { item } = useSelector((state: RootState) => state.category);
  const totalItems = useSelector((state: RootState) => state.cart.cartQuantity);

  return (
    <>
    <nav className='w-full flex pb-2 justify-around items-center mt-6 font-kreon'>
     
      <ul>
        <div className='text-3xl flex items-baseline font-aclonica'>
          <h1>Glam </h1><h1 className='text-4xl font-aclonica font-bold text-wenge'>Edge</h1>
        </div>
      </ul>
      <div className='relative'>
        <Searchbar/>
      </div>
      <div className='w-[40%] flex justify-center items-center font-noto uppercase font-medium'>
        <ul className='flex w-full justify-between text-lg items-center'>
          <li className='hover:font-semibold'>
            <Link href='/'>Home</Link>
          </li>
          <div className='relative group '>
            <span className=' cursor-pointer hover:font-semibold'>
              Shop
            
              <div className='hidden  group-hover:block absolute z-[1000] left-0 mt-2 bg-babypowder p-2  rounded shadow-lg '>
              <div className='group-hover:block absolute bg-babypowder w-4 h-4 rotate-45 top-[-8px] left-5 border-r-0 border-b-0 '></div>
                {item.map((item) => (
                  <div key={item.id} className='capitalize py-2 px-2 font-medium'>
                    <Link href={`/product/${item.id}`}>
                      {item.id}
                    </Link>
                  </div>
                ))}
              </div>
            </span>
          </div>
          <li className='hover:font-semibold'>
            <Link href='/'>Sale</Link>
          </li>

          <div className='relative hover:scale-105'>
            <Link href='/shoppingcart'>
              <CiShoppingCart size={30} />
            </Link>
            <div className='absolute bottom-4  shadow-md left-6 bg-wenge rounded-full w-6 h-6 text-white p-4 flex items-center justify-center'>
              {totalItems}
            </div>
          </div>

          <li  className='relative hover:scale-105'>
            <Link href='/wishlist'>
              <PiHeartLight size={30} />{' '}
            </Link>
          </li>
          <li>
          {isAuthenticated ? (
            <div className=' '>
              <div onClick={handleOpen} className='bg-wenge text-white capitalize cursor-pointer rounded-full w-8 h-8 text-xl text-center flex items-center justify-center mr-2'>
                {userEmail[0]}
              </div>
             
            </div>
          ) : (
            <button className='uppercase w-32 bg-wenge p-1 rounded text-white shadow-md hover:text-xl'>
              <Link href='/signin'>Sign In</Link>
            </button>
          )}
          </li>
        </ul>
        </div>
    </nav>
    <div className='border-b-2 border-khaki w-[95%] mx-auto'></div>
   
      {open ?
      (
        <div className=' absolute z-[1000] right-0 top-20 rounded-md w-72 h-72  bg-babypowder flex flex-col items-center'>
          <div className='w-full  h-32 bg-timber flex '>
          
              </div>
              <div  className='bg-wenge capitalize rounded-full w-12 h-12 mt-[-28px]  mx-auto text-2xl text-center text-white flex items-center justify-center '>
                {userEmail[0]}
              </div>
              
           <h2 className='font-semibold'>{userEmail}</h2>
              <button
                className='bg-wenge p-2 rounded w-32 mt-auto mb-2 text-white'
                onClick={handleLogout}
              >
                LogOut
              </button>
              
        </div>
      ):null
      }
      </>
  );
};

export default Navbar;
