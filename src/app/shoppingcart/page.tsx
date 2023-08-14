'use client'
import { decrement, increment, removefromcart } from '@/redux/features/cartslice'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const page = () => {
  const items=useSelector((state:RootState)=>state.cart.data)
  const {cartQuantity}=useSelector((state:RootState)=>state.cart)
  const {cartAmount}=useSelector((state:RootState)=>state.cart)
  
  console.log(items)
  const dispatch=useDispatch()
  const handleIncrement=(id:number)=>{
    dispatch(increment(id))

  }
  const handleDecrement=(id:number)=>{
    dispatch(decrement(id))

  }
  const handleDelete=(id:number)=>{
    dispatch(removefromcart(id))

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
      <div>
      <button onClick={()=>{handleDelete(product.id)}}>X</button>
        </div>
       
      </div>
      ))}
      <h1> {cartQuantity}</h1>
      <h1>{cartAmount}</h1>
    </div>
  )
}

export default page