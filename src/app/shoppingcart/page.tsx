'use client'
import { decrement, increment } from '@/redux/features/cartslice'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const page = () => {
  const items=useSelector((state:RootState)=>state.cart.data)
  console.log(items)
  const dispatch=useDispatch()
  const handleIncrement=(id:number)=>{
    dispatch(increment(id))

  }
  const handleDecrement=(id:number)=>{
    dispatch(decrement(id))

  }
  
  return (
    <div>
      {items.map((product)=>(
        <div key={product.id}>
        <h1>{product.name}</h1>
      
       
        <div className='border-2 w-44 p-2'>
        <button onClick={()=>{handleIncrement(product.id)}}>+</button>
        <h1>{product.quantity}</h1>
        <button onClick={()=>{handleDecrement(product.id)}}>-</button>
      </div>
      </div>
      ))}
      
    </div>
  )
}

export default page