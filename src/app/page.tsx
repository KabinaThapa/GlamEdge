'use client'

import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchProduct } from '@/redux/features/productslice'
import { AppDispatch, RootState } from '@/redux/store'


export default function Home() {
  const {item, status, error} = useSelector((state:RootState)=>state.product);
  console.log(item)
  const dispatch=useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(fetchProduct())
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
        <li key={item.id}>{item.category}</li>
      ))}
    </div>
    </>
  )
}
