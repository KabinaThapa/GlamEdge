import { Product } from '@/redux/features/productslice'

import { RootState } from '@/redux/store'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, {ChangeEvent, useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import {CiSearch} from 'react-icons/ci'

const searchbar = () => {
  const router=useRouter()
  const[input, setInput]=useState('')
  const[filterdata, setFilterdata]=useState<Product[]>([])
  const[selectitem, setSelectitem]=useState<Product|null>(null)
  const items=useSelector((state:RootState)=>state.product.item)
  const filterRef = useRef<HTMLDivElement | null>(null)
  console.log(items)
  const inputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
    setInput(event.target.value. toLowerCase())
  
  const filteritems=items.filter(product=>
    product.name.toLowerCase().includes(input.toLowerCase())
  )
  console.log(filteritems)
  setFilterdata(filteritems)
}
const handleItemClick=(product:Product)=>{
  setSelectitem(product)
  console.log(selectitem)
  setInput(product.name)
  setFilterdata([])
 
}
  const handleSearch=()=>{
    router.push(`/product/${selectitem?.category}/${selectitem?.subcategory}/${selectitem?.id}`)
    setInput('')
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterdata([])
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])
 
  return (
    <div className=' flex justify-center items-center'>
      <input type='text' placeholder='Search....' className='outline-none  text-black border-b-2 border-raisinblack'
       onChange={inputHandler} value={input}/>
     <button className='hover:scale-110' onClick={handleSearch}> <CiSearch size={28}/></button>
     {filterdata.length > 0 &&
      <div ref={filterRef} className='absolute top-[100%] z-[1000] w-96 p-2 backdrop-blur-md  text-black' >
        {filterdata.map((product)=>(
          
          <div key={product.id} onClick={()=>handleItemClick(product)} className='cursor-pointer w-full' >
            {product.name}
            </div>
            
        ))}
      </div>
}
    </div>
  )
}

export default searchbar