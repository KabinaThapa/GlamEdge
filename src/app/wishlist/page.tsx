'use client'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import Card  from '@/components/card';
import { useDispatch } from 'react-redux';
import { addtocart } from '@/redux/features/cartslice';
import { Items, addtowishlist, removefromwishlist } from '@/redux/features/wishlistslice';

const page = () => {
  const items=useSelector((state:RootState)=>state.wishlist.item)
  const dispatch=useDispatch()
  console.log(items)
  const handleAddtocart=(item:Items)=>{
    dispatch(addtocart(item))

  }
  const handleSavetowishlist=(id:number)=>{
   
      dispatch(removefromwishlist(id))
    
  }
  return (
    <div className='w-[80%] h-auto grid grid-cols-3  gap-12'>
        {items.map((item)=>(
          <div key={item.id}>
          <Card
      img={item.image}
     
      title={item.name}
      price={item.price}
      addtocart={()=>handleAddtocart(item)}
      savetowishlist={()=>handleSavetowishlist(item.id)}
      heartfill={items.find((item)=>item.id===item.id)}
     
      />
           </div>
        ))}
    </div>
  )
}

export default page