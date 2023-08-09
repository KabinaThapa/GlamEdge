'use client'
import React, {useEffect} from 'react'
import { RootState, AppDispatch } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProduct } from '@/redux/features/productslice';


export default function Page({ params }: { params: { category: string } }) {
    const dispatch=useDispatch<AppDispatch>()
    useEffect(()=>{
      dispatch(fetchProduct())
    },[])
    const{item}=useSelector((state:RootState)=>state.product)
    console.log(item)
    const filterProduct=item.filter((products)=>products.category===params.category)
    console.log(filterProduct)
    return <>
    <div> {params.category}
    {filterProduct.map((products)=>(
        <li>{products.name}</li>
    ))}
    
    
    </div>
    </>
  }