'use client'
import React, {useEffect} from 'react'
import { RootState, AppDispatch } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import { fetchSubCategory } from '@/redux/features/subcategoryslice';



export default function Page({ params }: { params: { category: string } }) {
    const dispatch=useDispatch<AppDispatch>()
    useEffect(()=>{
      dispatch(fetchSubCategory())
    },[])
    const{item}=useSelector((state:RootState)=>state.subcategory)
    console.log(item)
    console.log(params)
    const filterCategory=item.filter((subcategory)=>subcategory.id === params.category)
    console.log(filterCategory)
    return (
    <>
    <div>
    <h1 className='capitalize text-2xl'>{params.category}</h1>
    <div className='columns-3'>
      
    {filterCategory.map((products)=>(
        <div key={products.id} className='relative group gap-4 capitalize text-2xl overflow-hidden shadow-lg  mx-auto'>
        <Link href={`/product/${params.category}/${products.subcategory}`}>

         <img className=' object-cover w-full h-full transition-transform duration-1000 transform hover:scale-110 ' src={products.image} loading='lazy' alt='image'/>
        
        <div className='absolute top-[50%] right-[30%] bg-babypowder w-44 p-2 text-center rounded-sm transition-transform duration-1000 transform group-hover:scale-110'>
          <h1>{products.subcategory}</h1>
        </div>
        
        </Link>
      
      </div>
       
    ))}
    
    </div>
    </div>
    </>
    )
  }