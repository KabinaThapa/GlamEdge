'use client'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {CiShoppingCart, CiHeart} from 'react-icons/ci'
import {PiHeartLight} from 'react-icons/pi'
import { useSelector } from 'react-redux'

const navbar = () => {
  const[isloggedin, setIsloggedin]=useState(false)
  const[useremail, setUseremail]=useState('')
 
  useEffect(()=>{
    const sessionToken=localStorage.getItem('session-token')
    const email=localStorage.getItem('email')
    if(sessionToken&&email){
    setIsloggedin(true)
  setUseremail(email)
    }
  },[])

  const handleLogout=()=>{
    localStorage.removeItem('session-token')
    localStorage.removeItem('email')
    setUseremail('')
    setIsloggedin(false)
    
  }
  
  const {item, status, error} = useSelector((state:RootState)=>state.category)
  const totalItems=useSelector((state:RootState)=>state.cart.cartQuantity)
  return (
    <nav className='w-full flex justify-around bg-Platinum p-4 items-center'>
        <ul>
            <li className='text-3xl'>GlamEdge</li>
        </ul>
        <div className='flex justify-center items-center'>
            <ul className='flex w-96 justify-between text-lg items-center'>
                <li><Link href='/'>Home</Link></li>
                <div className='relative group'>
        <span className='group-hover:scale-125 cursor-pointer'>
          Shop
          <div className='hidden group-hover:block absolute left-0 mt-2 py-2 bg-white border rounded shadow-lg'>
            {item.map((item)=>(
              <div key={item.id}>
            <Link href ={`/product/${item.id}`} className='block px-4 py-2'>{item.id}</Link>
            
            </div>
            ))}
          </div>
        </span>
      </div>
                <li><Link href='/'>Sale</Link></li>
                
                <div className='relative'>
                  <Link href='/shoppingcart'><CiShoppingCart size={30}/></Link>
                <div className='absolute bottom-4 left-6'>
                  {totalItems}
                  </div>

                </div>
                <li><Link href='/wishlist'><PiHeartLight size={30}/> </Link></li>
                {isloggedin ? (
                  <div>
                
                  <button onClick={handleLogout}>Logout</button>
                
                <li>{useremail}</li>
                </div>):(
                   <button ><Link href='/signin'>SignIn</Link></button>
                   )
}

            </ul>
        </div>
    </nav>
  )
}

export default navbar