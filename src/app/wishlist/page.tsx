'use client'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
  const items=useSelector((state:RootState)=>state.wishlist.item)
  console.log(items)
  return (
    <div>
        {items.map((item)=>(
          <div key={item.id}>{item.name}</div>
        ))}
    </div>
  )
}

export default page