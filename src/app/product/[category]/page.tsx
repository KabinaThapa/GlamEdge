'use client'
import React, {useEffect} from 'react'
import { RootState, AppDispatch } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import blob from '../../../../public/blob.svg'
import blob2 from '../../../../public/blob2.svg'
import { fetchSubCategory } from '@/redux/features/subcategoryslice';



export default function Page({ params }: { params: { category: string} }) {
    const dispatch=useDispatch<AppDispatch>()
    useEffect(()=>{
      dispatch(fetchSubCategory())
    },[])
    const{item}=useSelector((state:RootState)=>state.subcategory)
    const items=useSelector((state:RootState)=>state.category.item)
    console.log(item)
    console.log(items)
    console.log(params)
    const filterCategory=item.filter((subcategory)=>subcategory.id === params.category)
    const filterdesc=items.filter((category)=>category.id === params.category)
    console.log(filterdesc)
    console.log(filterCategory)
    return (
    <>
    <div className='w-full h-full flex flex-col items-center gap-10 p-[5%]'>
     
      <div className='relative w-[90%]'>
       
    <h1 className='capitalize text-4xl text-center underline mb-4'>{params.category}</h1>
   <p>{filterdesc[0].desc}</p>
    </div>
    <div className='w-[80%] h-auto grid grid-cols-3 gap-4 '>
      
    {filterCategory.map((products, index)=>(
        <div key={products.id} className={`w-84 ${index === 2||index===0? 'row-span-2' : ''} relative group gap-4 capitalize text-2xl overflow-hidden shadow-lg  mx-auto`}>
        <Link href={`/product/${params.category}/${products.subcategory}`}>
        
         <img className=' object-cover w-full h-full transition-transform duration-1000 transform hover:scale-110 ' src={products.image} loading='lazy' alt='image'/>
        
        <div className='absolute top-[50%] right-[20%] bg-babypowder w-44 p-2 text-center rounded-sm transition-transform duration-1000 transform group-hover:scale-110'>
          <h1>{products.subcategory}</h1>
        </div>
        
        
        </Link>
      
      </div>
       
    ))}
    
    </div>
    <div className=' absolute w-[40%] h-[80%] top-20 left-5 z-[-1] rounded-full' 
     style={{ backgroundImage: `url(${blob.src})`, backgroundSize: 'cover' }} >

     </div>
    <div className=' absolute w-[40%] h-[80%] bottom-[-90%] right-[-5%] z-[-1] rounded-full' 
     style={{ backgroundImage: `url(${blob2.src})`, backgroundSize: 'cover' }} >
      
     </div>

    </div>
    </>
    )
  }