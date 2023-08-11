'use client'
import './globals.css'
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
    <div className='w-full h-96 bg-babypowder'>
      <p>Banner</p>
    </div>
    <h1 className='text-2xl'>Our Category</h1>
    <div className='h-auto grid grid-cols-3 '>
     
      {item.map((item)=>(
        
        
        <div key={item.id} className='capitalize text-xl  h-auto'>
          <Link href={`/product/${item.id}`}>
          <h1>{item.id}</h1>
          <img src={item.image} width='200'/>
          </Link>
        
        </div>
      ))}
    </div>
    <div className='w-full h-96 bg-babypowder flex'>
      <h1> Featured products</h1>
      <div>
      <img src={'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_35559729-bb4f-477a-afbb-d695451b9719_1120x.jpg?v=1615530706'} width='200'/>
      <h2>ECO AWARE ORGANIC COTTON TOP</h2>
      <h2>$39.00</h2>
      </div>
      <div>
      <img src={'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_fb07f6fc-f4bb-46a9-966d-1a0b66e6960a_1120x.jpg?v=1614067794'} width='200'/>
      <h2>CLASSIC ONE-BREASTED JACKET</h2>
      <h2>$179.00</h2>
      </div>
      <div>
      <img src={'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_7bb38758-0669-4713-864a-f6723b07f307_1120x.jpg?v=1616638533'} width='200'/>
      <h2>Embosses knit cardigon</h2>
      <h2>$118.00</h2>
      </div>
      <div>
      <img src={'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_e6fe8d6a-e054-4a68-ae4c-84dfb4f66d48_1120x.jpg?v=1613984692'} width='200'/>
      <h2>T-shirt with logo</h2>
      <h2>$68.00</h2>
      </div>
      <div>
      <img src={'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_5c0c329d-da3c-4361-a786-e33ac5ea5498_1120x.jpg?v=1614070750'} width='200'/>
      <h2>Cardigon with pockets</h2>
      <h2>$89.00</h2>
      </div>
      <div>
      <img src={'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_1120x.jpg?v=1613984550'} width='200'/>
      <h2>Cotton white t-shirt</h2>
      <h2>$179.00</h2>
      </div>
      
      
    
    </div>
    <div className='w-full h-96 bg-Antiflashwhite'>
      <h1>Sale</h1>
    </div>
    </>
  )
}
