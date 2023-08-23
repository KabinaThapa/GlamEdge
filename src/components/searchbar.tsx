import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import {useRouter} from 'next/navigation'
import { RootState } from '@/redux/store'
const searchbar = ({params}:{params:{category:string, subcategory:string}}) => {
    const{category, subcategory}=params
    const products=useSelector((state:RootState)=>state.product.item)
    const[input, setInput]=useState('')
    const router=useRouter()
    const filterproducts=products.filter((product)=>product.category===category && product.subcategory===subcategory&&
    product.name.toLowerCase().includes(input.toLowerCase()))
    const handleSearch=()=>{
        router. push(`/products/${category}/${subcategory}?search=${input}`)
    }

  return (
    <>
    {subcategory}
      <div className="grid grid-cols-4">
        <div>
          <input
            type="text"
            placeholder="Search products..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {filterproducts.map((product) => (
        <div key={product.id}>
          <Card
            img={product.image}
            title={product.name}
            price={product.price}
            // Other props
          />
        </div>
      ))}
    </>
  )
}

export default searchbar