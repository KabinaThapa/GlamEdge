'use client'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const page = () => {
  const items=useSelector((state:RootState)=>state.cart.data)
  console.log(items)
  const dispatch=useDispatch()
  
  return (
    <div>
      {items.map((product)=>(
        <div key={product.id}>
        <h1>{product.name}-quantity:{product.quantity}</h1>
        <h1>{product.quantity}</h1>
        </div>
      ))}
    </div>
  )
}

export default page