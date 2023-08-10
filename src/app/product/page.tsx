'use client'
import React, {useEffect} from 'react'
import { RootState, AppDispatch } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';



import { fetchProduct } from '@/redux/features/productslice';
import { subcategory } from './../../redux/features/subcategoryslice';



export default function Page({ params }: { params: { subcategory: string } }) {
    const dispatch=useDispatch<AppDispatch>()
    useEffect(()=>{
      dispatch(fetchProduct())
    },[])
    const{item}=useSelector((state:RootState)=>state.product)
    console.log(item)
    console.log(params)
    const filterCategory=item.filter((products)=>products.id === params.subcategory)
    console.log(filterCategory)
    return <>
    <div> {params.subcategory}
    {filterCategory.map((products)=>(
        <div>
        <li>{products.name}</li>
        <img src={products.image}/>
        </div>
    ))}
    
    
    </div>
    </>
  }