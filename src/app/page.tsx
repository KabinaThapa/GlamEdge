'use client'
import './globals.css'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Product, fetchProduct } from '@/redux/features/productslice'
import { fetchCategory } from '@/redux/features/categoryslice'
import { AppDispatch, RootState } from '@/redux/store'
import Link from 'next/link'
import styles from '@/style.module.css'
import Card from '@/components/card'
import { Item, addtocart } from '@/redux/features/cartslice'
import { addtowishlist, removefromwishlist, Items } from '@/redux/features/wishlistslice'
import {useRouter} from 'next/navigation'
import Carousel from '@/components/carousel'
import {images} from '@/static-data/images'
import { onsale } from '@/static-data/onsale'
import { featuredProducts } from '@/static-data/featuredproduct'
import { toptrending } from '@/static-data/toptrending'
 


export default function Home() {
  const {item, status, error} = useSelector((state:RootState)=>state.category);
  const items=useSelector((state:RootState)=>state.wishlist.item)
  console.log(item)
  const dispatch=useDispatch<AppDispatch>()
  const router=useRouter()
  useEffect(()=>{
    dispatch(fetchCategory())
  },[])
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "failed") {
    return <p>Error:{error}</p>;
  }
  
 
  const handleAddtocart=(product:Items)=>{
    dispatch(addtocart(product))
  }
  

  const handleSavetowishlist=(product:Items)=>{
    if(items.find((item)=>item.id===product.id)){
      dispatch(removefromwishlist(product.id))
    }
    else{
      dispatch(addtowishlist(product))
    }

  }

  const handleClick=(product:Product)=>{
    router.push(`/product/${product.category}/${product.subcategory}/${product.id}`)
  }
 
  return (
    <>
    
    <div className=' flex flex-col gap-12 w-full items-center justify-center'>
    <section className='w-full h-auto  flex  justify-center items-center gap-6 p-4'>
      <div className=' relative w-[80%] h-auto  flex'>
      <img className='object-cover object-center w-full' src={'https://cdn.shopify.com/s/files/1/0062/5642/7093/files/blog_02.jpg?3192'}/>
      <div className='absolute overflow-hidden top-[50%] left-[10%] gap-8 font-roboto font-semibold  text-center  text-2xl text-raisinblack p-2 bg-white w-[80%] bg-opacity-60 inset-0 flex flex-col justify-center items-center'>
        <p>Embrace Your Inner Glamour: Unleash the Swag with Luxurious Furry Fashion!</p>
        <button className='bg-white p-2 w-72 rounded text-lg hover:text-xl'>Shop Collection</button>
      </div>
      </div>
      
      <Carousel images={images}/>
      
    </section>

    <section className='bg-khaki flex flex-col justify-center items-center p-12'>
    <h1 className={styles.kabi + ' text-4xl text-center mb-8'}>Our Category</h1>
    <div className='w-[80%] h-auto grid grid-cols-3  gap-12'>
      {item.map((item)=>(
        <div key={item.id} className='relative group gap-4 capitalize text-2xl overflow-hidden shadow-lg'>
          <Link href={`/product/${item.id}`}>

           <img className=' object-cover w-full h-full transition-transform duration-1000 transform hover:scale-110 ' src={item.image} loading='lazy' alt='image'/>
          
          <div className='absolute top-[50%] right-[30%] bg-babypowder w-32 p-2 text-center rounded-sm transition-transform duration-1000 transform group-hover:scale-110'>
            <h1>{item.id}</h1>
            
          </div>
          
          </Link>
        
        </div>
      ))}
    </div>
    </section>

    <section className='w-full h-auto flex p-8 font-opensans'>
      <article className='w-[50%] p-6 flex flex-col items-center justify-center gap-4'>
    <h1 className='text-3xl font-medium'>  Our Featured Products</h1>
    
    <p className='text-lg mt-6'>
    <h2 className='text-xl text-center mb-3 underline'>Discover Our Featured Products</h2>
Explore our handpicked selection of featured products, carefully 
chosen to bring you the latest trends and premium quality. 
From stylish apparel to must-have accessories, our featured products
 showcase the best of what our store has to offer. Whether you're 
 looking for a standout outfit or a unique statement piece, 
 our featured collection has something for everyone. 
Shop now and elevate your style with our curated favorites.</p>
<button className='bg-wenge text-white p-2 w-72 rounded text-lg hover:text-xl mt-12'>Shop Now</button>
    </article>
    <div className=' w-[60%] grid grid-cols-3  gap-2 p-2 '>
     {featuredProducts.map((product, index)=>(
      <div key={product.id} >
        <Link href={`/product/featured/${product.id}`}>
      <Card
      img={product.image}
      title={product.name}
      price={product.price}
      addtocart={()=>handleAddtocart(product)}
      savetowishlist={()=>handleSavetowishlist(product)}
     
      heartfill={items.find((item)=>item.id===product.id)}
      />
      </Link>
      </div>

     ))}
     

    
      
    </div>
    </section>
    <section className='w-full h-auto flex p-8 font-opensans bg-khaki' >
     
      <div className='w-[60%] h-auto grid grid-cols-3 p-2 gap-4  '>
     
      {onsale.map((product)=>(
        <div key={product.id}>
          <Link href={`/product/onsale/${product.id}`}>
      <Card
      img={product.image}
      size={product.size}
      title={product.name}
      price={product.price}
      addtocart={()=>handleAddtocart(product)}
      savetowishlist={()=>handleSavetowishlist(product)}
      heartfill={items.find((item)=>item.id===product.id)}
      />
      </Link>
</div>
     ))}
    </div>
    <article className='w-[50%] p-6 flex flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl font-medium'>Sale</h1>
      
      <p className='text-lg mt-6 '>
      <h2 className='text-xl text-center underline mb-3'>Unbeatable Deals on On Sale Products</h2>
Get ready to snag some incredible deals on our on sale products!
 Discover a wide range of discounted items that include everything 
 from fashion essentials to lifestyle must-haves. Our on sale collection
  features top-quality products at unbeatable prices, giving you the chance
   to save big while still enjoying premium items. Don't miss out on these 
   limited-time offers – shop now and take advantage of the amazing discounts on offer!</p>
   <button className='bg-wenge text-white p-2 w-72 rounded text-lg hover:text-xl mt-12'>Find more deals</button>
      </article>
    </section>
    <section className='w-full h-auto flex p-8'>
      <article className='w-[50%] p-6 flex flex-col items-center justify-center gap-4'>
    <h1 className='text-2xl'>Top Trending</h1>
   
    <p className='text-lg mt-6 '>
    <h2 className='text-xl text-center underline mb-3'>Discover Our Top Trending Products</h2>
    Explore the latest and most sought-after items in our collection of top trending products. 
    From stylish apparel to must-have accessories, these products are capturing the attention 
    of our customers and setting new fashion standards. Our expertly curated selection brings 
    you the best of what's popular right now, ensuring that you stay ahead of the curve and make
     a statement with your style. Whether you're looking for a standout outfit, a unique accessory, 
     or something that's currently making waves in the fashion world, our top trending products are 
     here to inspire and elevate your look. Shop now and join the trendsetters with these coveted pieces
    </p>
    <button className='bg-wenge text-white p-2 w-72 rounded text-lg hover:text-xl mt-12'>Check our collections</button>
    </article>
    <div className=' w-[60%]  grid grid-cols-3 gap-2 p-2 '>
     {toptrending.map((product)=>(
      <div key={product.id}>
        
      <Card 
      img={product.image}
      title={product.name}
      price={product.price}
      addtocart={()=>handleAddtocart(product)}
      savetowishlist={()=>handleSavetowishlist(product)}
      size={product.size}
      heartfill={items.find((item)=>item.id===product.id)}
      />
      
      </div>

     ))}
     

    
      
    </div>
    </section>
    
    </div>
    </>
  )
}
