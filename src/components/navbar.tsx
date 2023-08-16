'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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
  return (
    <nav className='w-full flex justify-around bg-Platinum p-4 items-center'>
        <ul>
            <li className='text-3xl'>GlamEdge</li>
        </ul>
        <div>
            <ul className='flex w-96 justify-between text-lg'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/'>Shop</Link></li>
                <li><Link href='/'>Sale</Link></li>
                <li><Link href='/shoppingcart'>cart</Link></li>
                <li><Link href='/wishlist'>Wishlist</Link></li>
                {isloggedin ? (
                  <div>
                
                  <button onClick={handleLogout}>Logout</button>
                
                <li>{useremail}</li>
                </div>):(
                   <button ><Link href='/signin'>Login</Link></button>
                   )
}

            </ul>
        </div>
    </nav>
  )
}

export default navbar