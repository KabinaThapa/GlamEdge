import Link from 'next/link'
import React from 'react'

const navbar = () => {
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
                <li>login</li>
            </ul>
        </div>
    </nav>
  )
}

export default navbar