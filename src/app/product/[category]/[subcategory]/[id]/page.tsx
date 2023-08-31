'use client'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@/redux/store';
import Stars from '@/components/stars'
import Card from '@/components/card'
import { Item, addtocart } from '@/redux/features/cartslice';
import { Items, addtowishlist, removefromwishlist } from '@/redux/features/wishlistslice';
import { subcategory } from './../../../../../redux/features/subcategoryslice';

const ProductDetail = ({params}:{ params:{id: string, category:string, subcategory:string}}) => {
    const[selectedsize, setSelectedsize]=useState<null|string>(null)
    const dispatch=useDispatch()
    
    const products = useSelector((state: RootState) => state.product.item)
    console.log(products)
    const wishlistProducts = useSelector((state: RootState) => state.wishlist.item)

console.log(params)
const productId = parseInt(params.id, 10)
    const product = products.find((product) => product.id === productId)
console.log(product)
    if (!product) {
        return <div>Loading...</div>
    }
    const relatedProducts=products.filter((products)=>products.category===product.category && products.id !==product.id).slice(0,4)
    console.log(relatedProducts)
    const handleSizeClick=(size:string)=>{
        setSelectedsize(size)
    }
     //addtocart functionality
    
     const handleAddtocart=(product:Item)=>{
        dispatch(addtocart(product))
  
      }
      //addtowishlist functionality
      const handleSave=(product:Items)=>{
        if(wishlistProducts.find((item)=>item.id===product.id)){
          dispatch(removefromwishlist(product.id))
        }
        else{
          dispatch(addtowishlist(product))
        }
      }

    return (
        <>
        <div className='w-full h-auto  p-[5%] font-opensans flex flex-col gap-8 items-center'>
            <div className='flex justify-around items-center'>
            <div className='w-[40%] h-[40rem] overflow-hidden '>
            
            <img className='object-cover w-full h-full transition transform-transition hover:scale-150 duration-50' src={product.image} alt={product.name} />
            </div>
            <div className='w-[50%]  h-auto p-4 grid gap-4 border-l-2 border-khaki '>
            <h2 className='text-2xl font-semibold'>{product.name}</h2>
           
             <div className='flex items-center'>
          <Stars rating={product.rating}/>
        </div>
            <p>{product.description}</p>
            <p className='font-serif text-xl'> ${product.price}</p>
           
            <div className="">
            <h1>Size</h1>
            <ul className="flex gap-4 font-semibold font-roboto">
                {['XXL', 'XL', 'L', 'M', 'S', 'XS'].map((size) => (
                    <li
                        key={size}
                        className={`border-2 rounded p-2 cursor-pointer ${
                            selectedsize === size ? 'bg-khaki text-white border-0' : 'border-khaki'
                        }`}
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </li>
                ))}
            </ul>
        </div>
            <div className='flex flex-col items-center text-lg overflow-hidden'>
            <button className='w-full bg-wenge rounded p-2 hover:text-xl  text-white'>Add to cart</button>
            <h1>Or</h1>
            <button className='w-full bg-wenge rounded  p-2 hover:text-xl text-white'>Add to wishlist</button>
            </div>
            
            </div>
            </div>
            <div className='w-full p-4 '>
                <h1 className='text-2xl font-opensans mb-2'>Related Products</h1>
                <div className='flex gap-4 '>
            {relatedProducts.map((product)=>(
            <div className=' w-full'>
                <Card
                img={product.image}
                title={product.name}
                price={product.price}
                addtocart={()=>handleAddtocart(product)}
                savetowishlist={()=>handleSave(product)}
                heartfill={wishlistProducts.find((item)=>item.id===product.id)}
                href={`/product/${params.category}/${params.subcategory}/${product.id}`}
                />
                </div>
            
        ))}
        </div>
        </div>
        </div>
        
        </>
    );
};

export default ProductDetail;
