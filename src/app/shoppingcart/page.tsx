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

const stripePromise=()=>loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

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
    const stripe = await stripePromise();
    console.log(items)
    const { error } = await stripe.redirectToCheckout({
      lineItems: items.map(product=>({price:product.priceId.toString(), quantity:product.quantity})),
      mode: 'payment',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  };
    
  
  return (
    <>
    
   
      {
        items.length===0 ? (
          <>
           <div className='  min-h-screen w-full flex items-center p-12  '>
        <div className=' relative flex flex-col  items-center justify-center p-[5%] h-[35rem] w-[60%]  text-2xl overflow-hidden gap-4 mx-auto'>
          <h1 className='underline'>Your Cart is Empty!</h1>
          <button className='w-44 p-2 bg-wenge rounded text-lg hover:text-xl text-white'> 
          <Link href='/'>Back To Shopping</Link></button>
          <div className=' absolute w-[60%] top-50 right-50 z-[-1] ' >
        <img src={blob3.src} className='w-full h-full object-cover'/>
   </div>
        </div>

        
   </div>
        </>
      ):(
        <>
         <div className='flex  justify-around  w-full  p-12 '>
     <div className="w-[60%] p-2 ">
       <table className=" w-full text-left text-lg bg-babypowder ">
                <thead>
                  <tr className="  border-2 border-t-2 border-wenge p-2 font-roboto font-medium ">
                    
                    <th className="px-4 py-4 text-center">Item</th>
                    <th className="px-4 py-4 text-center">Quantity</th>
                    <th className="px-4 py-4 text-center">Price</th>
                    <th className="px-4 py-4 text-center">Total</th>
                    <th className="px-4 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className=" border-2 border-wenge text-base">
                      <td className=" px-4 py-6">
                        <img
                          src={item.image}
                          width="150px"
                          
                          alt={item.name}
                        />
                        <p className='text-md' >{item.name}</p>
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
              
              <div className=' text-2xl font-roboto w-[30%] h-96 p-4  flex flex-col gap-4'>
              <div className=' absolute w-[45%] h-[100%] top-8 right-0 z-[-1]' 
     style={{ backgroundImage: `url(${blob3.src})`, backgroundSize: 'cover' }} >

     </div>
        <p className='underline'>Your Shopping Cart</p> <p>Total Items: {cartQuantity}</p> 
        <h1 className='text-2xl'>Sub Total: ${cartAmount}</h1>
       
      <button onClick={handleCheckout} className=' p-4 text-lg rounded-md bg-wenge text-white hover:text-xl'>
        Checkout</button>
        
        </div>
        </div>
        </>
        )}
     
      
        
   
    </>
  )

}

export default page