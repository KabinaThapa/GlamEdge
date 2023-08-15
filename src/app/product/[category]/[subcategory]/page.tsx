'use client'
import React, {useEffect} from 'react'
import { RootState, AppDispatch } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';




import {  fetchProduct } from '@/redux/features/productslice';
import { Item, addtocart } from '@/redux/features/cartslice';
import { Items, addtowishlist, removefromwishlist } from '@/redux/features/wishlistslice';





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
    const items=useSelector((state:RootState)=>state.wishlist.item)

    //addtocart functionality
    
    const handleAddtocart=(product:Item)=>{
      dispatch(addtocart(product))

    }
    //addtowishlist functionality
    const handleSave=(product:Items)=>{
      if(items.find((item)=>item.id===product.id)){
        dispatch(removefromwishlist(product.id))
      }
      else{
        dispatch(addtowishlist(product))
      }
    }
    return <>
    {params.subcategory}
    <div className=' grid grid-cols-4' > 
    {filterCategory.map((product)=>(
        <div className=''>
          <div>
          <button onClick={()=>handleSave(product)}>save</button>
          </div>
        <li>{product.name}</li>
        <img src={product.image} width='300'/>
        <button onClick={()=>handleAddtocart(product)}>addtocart</button>
        </div>
    ))}
    
    
    </div>
    </>
  }