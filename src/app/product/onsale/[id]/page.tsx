'use client'
import React from 'react'
import {onsale} from '@/app/page'


const page = ({params}:{params :{id:string}}) => {
    const homeproducts=[...onsale]
    console.log(homeproducts)
    const productId=parseInt(params.id, 10)
    const product = homeproducts.find((product)=>product.id===productId)
    console.log(product)

  return (
    <div>
        <h1>Product Detail</h1>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
    </div>
  )
}

export default page