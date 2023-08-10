'use client'

import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchProduct } from '@/redux/features/productslice'
import { fetchCategory } from '@/redux/features/categoryslice'
import { AppDispatch, RootState } from '@/redux/store'
import Link from 'next/link'


export default function Home() {
  const {item, status, error} = useSelector((state:RootState)=>state.category);
  console.log(item)
  const dispatch=useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(fetchCategory())
  },[])
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "failed") {
    return <p>Error:{error}</p>;
  }


  return (
    <>
    <div>
      {item.map((item)=>(
        <li key={item.id}>
          <Link href={`/product/${item.id}`}>
          {item.id}</Link>
          <img src={item.image} width='200'/>
        </li>
      ))}
    </div>
    </>
  )
}
