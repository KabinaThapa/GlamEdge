'use client'
import React, {useEffect} from 'react'
import { RootState, AppDispatch } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';




import { Product, fetchProduct } from '@/redux/features/productslice';
import { Item, addtocart } from '@/redux/features/cartslice';




export default function Page({ params }: { params: { category: string, subcategory: string } }) {
    const dispatch=useDispatch<AppDispatch>()
    useEffect(()=>{
      dispatch(fetchProduct())
    },[])
    const{item}=useSelector((state:RootState)=>state.product)
    console.log(item)
    console.log(params)
    const filterCategory=item.filter((product)=>product.category === params.category && product.subcategory===params.subcategory)
    console.log(filterCategory)
    //addtocart functionality
    //const {data}=useSelector((state:RootState)=>state.cart.data)
    const handleAddtocart=(product:Item)=>{
      dispatch(addtocart(product))

    }
    return <>
    <div> {params.subcategory}
    {filterCategory.map((product)=>(
        <div className='border-2'>
        <li>{product.name}</li>
        <img src={product.image} width='300'/>
        <button onClick={()=>handleAddtocart(product)}>addtocart</button>
        </div>
    ))}
    
    
    </div>
    </>
  }