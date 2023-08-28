import { Product } from '@/redux/features/productslice'

import { RootState } from '@/redux/store'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, {ChangeEvent, useState} from 'react'
import { useSelector } from 'react-redux'

const searchbar = () => {
  const router=useRouter()
  const[input, setInput]=useState('')
  const[filterdata, setFilterdata]=useState<Product[]>([])
  const[selectitem, setSelectitem]=useState<Product|null>(null)
  const items=useSelector((state:RootState)=>state.product.item)
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
  setInput(product.name)
  setFilterdata([])
}
  const handleSearch=()=>{
    router.push(`/product/${selectitem.category}/${selectitem.subcategory}/${selectitem.id}`)
  }
 
  return (
    <div>
      <input type='text' placeholder='search....' className='outline-none border-2 text-black'
       onChange={inputHandler} value={input}/>
     <button onClick={handleSearch} >Search</button>
      <div className='absolute backdrop-blur-md text-black' >
        {filterdata.map((product)=>(
          
          <div key={product.id} onClick={()=>handleItemClick(product)} className='cursor-pointer' >
            {product.name}
            </div>
            
        ))}
      </div>
    </div>
  )
}

export default searchbar