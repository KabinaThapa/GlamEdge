'use client'
import { AppDispatch, RootState } from '@/redux/store';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CiShoppingCart, CiHeart } from 'react-icons/ci';
import { PiHeartLight } from 'react-icons/pi';
import { useSelector, useDispatch } from 'react-redux';

import {logout} from '@/redux/features/userauthslice'
import Searchbar from './../searchbar/searchbar';
import { AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
 const[click, setClick]=useState(false)
  const [open, setOpen]=useState(false)
  const dispatch=useDispatch<AppDispatch>()
  const {isAuthenticated, userEmail}=useSelector((state:RootState)=>state.auth)
 
 const handleClick=()=>{
  setClick(!click)
 }

  const handleLogout = () => {
    localStorage.removeItem('session-token');
    localStorage.removeItem('email');
    dispatch(logout())
    setOpen(false)
  };
  const handleOpen=()=>{
    setOpen(!open)
  }

  const {item}  = useSelector((state: RootState)=>state.category);
 
  console.log(item)

  const totalItems = useSelector((state: RootState) => state.cart.cartQuantity);

  return (
    <>
    <div className='md:hidden flex justify-between items-center  w-[95%] mx-auto relative  p-2'>
      <div className='flex items-baseline'>
    <h1 className='text-2xl'>Glam </h1><h1 className='text-4xl font-aclonica font-bold text-wenge'>Edge</h1>
      
      </div>
      <AiOutlineMenu onClick={handleClick} className='text-2xl'/>
    </div>
    {
      click?
      (<div className='absolute top-8 right-0 bg-slate-700 z-20 '>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Sale</li>
          <li>Cart</li>
          <li>Saved items</li>

        </ul>
      </div>):('')
    }
    <nav className='w-full md:flex pb-2 justify-around items-center mt-6 font-kreon  hidden'>
     
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
                {Array.isArray(item)?(
                item.map((item) => (
                  <div key={item.id} className='capitalize py-2 px-2 font-medium'>
                    <Link href={`/product/${item.id}`}>
                      {item.id}
                    </Link>
                  </div>
                ))):(<p>''</p>)}
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
            <div className='absolute bottom-4  shadow-md left-6 bg-wenge rounded-full w-7 h-7 text-white p-3  flex items-center justify-center'>
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
        <div className=' absolute z-[1000]  top-20 right-2 rounded-md w-72 h-72  bg-babypowder flex flex-col items-center'>
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