'use client'
import { RootState } from '@/redux/store'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Card  from '@/components/card/card';
import { useDispatch } from 'react-redux';
import { addtocart } from '@/redux/features/cartslice';
import {removefromwishlist } from '@/redux/features/wishlistslice';
import Link from 'next/link'
import blob3 from '../../../public/blob3.svg'
import {BsFillGridFill,BsFillGrid3X2GapFill,BsFillGrid3X3GapFill} from 'react-icons/bs'
import { Items } from '@/redux/types/items';
import Image from 'next/image';

const Wishlist = () => {
  const[columns, setColumns]=useState<number>(4)
  const items=useSelector((state:RootState)=>state.wishlist.item)
  const dispatch=useDispatch()
  console.log(items)
  const handleAddtocart=(item:Items)=>{
    dispatch(addtocart(item))

  }
  const handleSavetowishlist=(id:number)=>{
   
      dispatch(removefromwishlist(id))
    
  }
  const handleColumns=(num:number)=>{
    setColumns(num)
    
  }
  return (
    <>
    { items.length===0?(
      <>
       <div className=' relative h-screen w-full flex items-center p-12  '>
        <div className=' flex flex-col justify-around items-center md:text-left text-center text-2xl overflow-hidden gap-4 mx-auto'>
          <h1 className='underline'>Your Wishlist is Empty!</h1>
          <button className='w-full p-2 bg-wenge rounded text-lg hover:text-xl text-white'> 
          <Link href='/'>Back To Shopping</Link></button>
        </div>

        <div className=' absolute md:w-[45%] md:h-[100%] md:top-2 top-18 md:right-80 right-1 z-[-1] p-8' >
        <Image alt='pic' width={200} height={300} src={blob3.src} className='w-full h-full object-cover'/>
   </div>
   </div>
      </>
    ):
    (
      <>
      <div className='w-full p-[5%] flex flex-col items-center justify-center gap-8'>
        <div className='md:w-[95%]  mx-auto  underline md:text-2xl text-lg flex justify-between'>Your Saved Items
      
      <div className='md:w-44 hidden  w-20 text-base md:text-2xl md:flex justify-around items-center'>
      <button  onClick={()=>handleColumns(3)}><BsFillGrid3X2GapFill/></button>
      <button  onClick={()=>handleColumns(2)}><BsFillGridFill/></button>
      <button  onClick={()=>handleColumns(4)}><BsFillGrid3X3GapFill/></button>
     
        </div>
        </div>
    <div className={`md:w-[95%] h-auto grid md:grid-cols-${columns}  grid-cols-2  md:gap-4 gap-2 mx-auto`}>
        {items.map((item)=>(
          <div key={item.id} className='object-cover w-full h-full'>
          <Card
      img={item.image}
      href={`/product/${item.category}/${item.subcategory}/${item.id}`}
      title={item.name}
      price={item.price}
      addtocart={()=>handleAddtocart(item)}
      savetowishlist={()=>handleSavetowishlist(item.id)}
      heartfill={!!items.find((item)=>item.id===item.id)}
      
     
      />
           </div>
        ))}
    </div>
    </div>
    </>
)}
    </>
  )
}

export default Wishlist