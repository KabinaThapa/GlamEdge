'use client'
import { decrement, increment, removefromcart } from '@/redux/features/cartslice'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {loadStripe} from '@stripe/stripe-js'
import Navbar from '@/components/navbar'



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
  //Stripe payment checkout
  const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  
 const handleCheckout=async()=>{
  console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  const stripe=await stripePromise
  const response=await fetch("/api/checkout-session",{
    method:'POST',
    headers:{
      "Content-Type":'application/json',

    },
    body:JSON.stringify({items}),
  })
  //const responseText = await response.text();
//console.log('Response Content:', responseText);
  console.log(items)
const session=await response.json()
console.log(session)

  
  const result: any = await stripe?.redirectToCheckout({
    sessionId:session.id
  })
  if(result.error){
    console.error(result.error);
  
  }

 }


  
  return (
    <>
    
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
      <button onClick={handleCheckout} className='border-2 p-4 rounded-md bg-slate-400'>
        Checkout</button>
    </div>
    </>
  )

}

export default page