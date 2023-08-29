'use client'
import { decrement, increment, removefromcart } from '@/redux/features/cartslice'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {loadStripe} from '@stripe/stripe-js'
import {AiOutlineDelete} from 'react-icons/ai'
import axios from 'axios'
import Stripe from '@stripe/stripe-js'
import blob3 from '../../../public/blob3.svg'

const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const page = () => {
  const items=useSelector((state:RootState)=>state.cart.data)
  const cartQuantity=useSelector((state:RootState)=>state.cart.cartQuantity)
  const {cartAmount}=useSelector((state:RootState)=>state.cart)
  console.log(cartQuantity)
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
  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        console.error('Stripe is not initialized.');
        return;
      }
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });
      if (!response.ok) {
        throw new Error('Checkout request failed.');
      }
      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.error('Stripe checkout error:', result.error);
      }
    } catch (error) {
      console.error('Checkout process error:', error);
    }
  };
  
  
  return (
    <>
    
    <div className='flex  justify-between w-full  p-12 '>
      {
        items.length===0 ? (
          <>
        <div className=' mx-auto h-screen  flex justify-between items-center text-2xl  '>
          <h1>Your Cart is Empty!</h1>
        
        </div>
        <div className=' absolute w-[45%] h-[100%] top-[15%] right-[25%] z-[-1] p-8' 
        style={{ backgroundImage: `url(${blob3.src})`, backgroundSize: 'cover' }} >
   </div>
        </>
      ):(
        <>
     <div className="w-[60%] p-2 ">
       <table className=" w-full text-left text-lg ">
                <thead>
                  <tr className="  border-b-2 border-t-2 border-wenge p-2 font-roboto font-medium ">
                    
                    <th className="px-4 py-4 text-center">Item</th>
                    <th className="px-4 py-4 text-center">Quantity</th>
                    <th className="px-4 py-4 text-center">Price</th>
                    <th className="px-4 py-4 text-center">Total</th>
                    <th className="px-4 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className=" border-b-2 border-wenge text-md text-center">
                      <td className=" px-4 py-6">
                        <img
                          src={item.image}
                          width="150px"
                          
                          alt={item.name}
                        />
                        <p className='text-sm' >{item.name}</p>
                      </td>
                    
                      <td className=" px-4 py-6 mx-auto">
                        <div className=" bg-wenge text-white rounded-md flex  w-32 justify-around p-1  font-serif">
                        <button onClick={() => handleDecrement(item.id)}>
                            -
                          </button>
                          <p>{item.quantity}</p>
                         <button onClick={() => handleIncrement(item.id)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td className=" px-4 py-6 font-serif"> $ {item.price}</td>
                      <td className=" px-4 py-6 font-serif">
                        $ {item.price * item.quantity}
                      </td>
                      <td className=" px-4 py-6">
                        <button onClick={() => handleDelete(item.id)}>
                          <AiOutlineDelete size={25}/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              
              <div className=' text-2xl font-roboto w-[30%]  flex flex-col gap-4'>
              <div className=' absolute w-[45%] h-[100%] top-[8%] right-[3%] z-[-1]' 
     style={{ backgroundImage: `url(${blob3.src})`, backgroundSize: 'cover' }} >

     </div>
        <p className='underline'>Your Shopping Cart</p> <p>Total Items: {cartQuantity}</p> 
        <h1 className='text-2xl'>Sub Total: ${cartAmount}</h1>
       
      <button onClick={handleCheckout} className=' p-4 text-xl rounded-md bg-wenge text-white hover:text-2xl'>
        Checkout</button>
        
        </div>
        </>
        )}
     
      
        
    </div>
    </>
  )

}

export default page