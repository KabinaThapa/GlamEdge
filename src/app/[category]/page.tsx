'use client'
import React, {useEffect} from 'react'
import { RootState, AppDispatch } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';


import { fetchSubCategory } from '@/redux/features/subcategoryslice';


export default function Page({ params }: { params: { id: string } }) {
    const dispatch=useDispatch<AppDispatch>()
    useEffect(()=>{
      dispatch(fetchSubCategory())
    },[])
    const{item}=useSelector((state:RootState)=>state.subcategory)
    console.log(item)
    const filterCategory=item.filter((products)=>products.category===params.id)
    console.log(filterCategory)
    return <>
    <div> {params.id}
    {filterCategory.map((products)=>(
        <div>
        <li>{products.id}</li>
        <img src={products.image}/>
        </div>
    ))}
    
    
    </div>
    </>
  }