'use client'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const page = () => {
  const data=useSelector((state:RootState)=>state.cart.data)
  console.log(data)
  const dispatch=useDispatch()
  
  return (
    <div>
      {data.map((product)=>(
        <div key={product.id}>
        <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default page