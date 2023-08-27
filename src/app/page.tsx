'use client'
import './globals.css'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchProduct } from '@/redux/features/productslice'
import { fetchCategory } from '@/redux/features/categoryslice'
import { AppDispatch, RootState } from '@/redux/store'
import Link from 'next/link'
import styles from '@/style.module.css'
import Card from '@/components/card'
import { Item, addtocart } from '@/redux/features/cartslice'
import { addtowishlist, removefromwishlist, Items } from '@/redux/features/wishlistslice'
import { subcategory } from './../redux/features/subcategoryslice';
 //featured Products
 export const featuredProducts=[
  {
    id:1,
    size:'small',
    subcategory:'Tshirt',
    category:'women',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_35559729-bb4f-477a-afbb-d695451b9719_1120x.jpg?v=1615530706',
    name:'Eco Aware Organic Cotton Top',
    price:39.00,
  },
  {
    id:2,
    size:'large',
    subcategory:'Tshirt',
    category:'men',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_fb07f6fc-f4bb-46a9-966d-1a0b66e6960a_1120x.jpg?v=1614067794',
   name:'Classic One-breasted Jacket',
    price:179.00,
  },
  {
    id:3,
    size:'large',
    subcategory:'Tshirt',
    category:'women',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_7bb38758-0669-4713-864a-f6723b07f307_1120x.jpg?v=1616638533',
   name:'Embosses knit cardigon',
   price:118.00
  },
  {
    id:4,
    size:'small',
    subcategory:'Tshirt',
    category:'men',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_e6fe8d6a-e054-4a68-ae4c-84dfb4f66d48_1120x.jpg?v=1613984692',
     
    name:'T-shirt with logo',
    price:68.00
  },{
    id:5,
    size:'small',
    subcategory:'Tshirt',
    category:'women',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_5c0c329d-da3c-4361-a786-e33ac5ea5498_1120x.jpg?v=1614070750',
    
    name:'Cardigon with pockets',
    price:89.00
  },{
    id:6,
    size:'large',
    subcategory:'Tshirt',
    category:'men',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_1120x.jpg?v=1613984550',
    
    name:'The Simpsons T-shirt',
    price:179.00
  }
]
//On Sale products
export const onsale=[
  {
    id:1,
    size:'small',
    subcategory:'Tshirt',
    category:'women',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_4b6df0cc-511d-4f31-8475-08b1346b1921_1120x.jpg?v=1614072211',
    
    name:'HIGH TURTLENECK JUMPER',
    price:45.00
  },
    {
      id:2,
      size:'large',
      subcategory:'Pants',
    category:'women',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/4_bf88b3aa-813f-423a-8e55-46fee7f68db9_1120x.jpg?v=1614073956',
     
    name:'Basic sweat joggers',
    price:26.00
    },
    {
      id:3,
      size:'large',
      subcategory:'Tshirt',
    category:'women',
      image:'https://skudmart.myshopify.com/cdn/shop/products/s-p-8-1_grande.jpg?v=1569978781', 
   
    name:'Strappy Summer Beach Floral Flared',
    price:40.00
    },
    {
      id:4,
      size:'small',
      subcategory:'Tshirt',
    category:'women',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/2_65b663d9-5f7a-4a9c-905a-2679b7edf4db_360x.jpg?v=1614073469',
     
    name:'Loose fit blazor and trouser set',
    price:78.00
    },
    
    {
    id:5,
    size:'small',
    subcategory:'Tshirt',
    category:'men',
     image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_9bf4a17f-966d-4386-a7f4-424ce07c310d_1120x.jpg?v=1613984616',
  
    name:'Long-Sleeved Shirt',
    price:32.00
    },
    
    
    {
      id:6,
      size:'large',
      subcategory:'Tshirt',
    category:'men',
    image:'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a.jpg',
    
    name:'Cotton white t-shirt',
    price:24.00
}
]
export const toptrending=[
  {
    id:7,
    size:'small',
    subcategory:'Tshirt',
    category:'men',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/5_600x.jpg?v=1613984550',
    
    name:'Light green simpsons T-shirt',
    price:45.00
  },
    {
      id:8,
      size:'large',
      subcategory:'Pants',
    category:'men',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/3_8577e617-d687-43a4-bd96-d1950e73ecaf_600x.jpg?v=1614067794',
     
    name:'Classic one-breasted jacket',
    price:26.00
    },
    {
      id:9,
      size:'large',
      subcategory:'Tshirt',
    category:'women',
      image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_5cb5d1e1-2c31-499b-9010-ccac2fecf49e_600x.jpg?v=1615530706', 
   
    name:'Pink long Blazor',
    price:40.00
    },
    {
      id:10,
      size:'small',
      subcategory:'Tshirt',
    category:'women',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_81452fd6-1818-4c32-923b-302b3d879a3a_600x.jpg?v=1615531056',
     
    name:'Organic cotton oversize blazor',
    price:78.00
    },
    
    {
    id:11,
    size:'small',
    subcategory:'Tshirt',
    category:'men',
     image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_0ae182fa-8c71-468e-850b-23fc81cb3bf4_600x.jpg?v=1613984721',
  
    name:'Blue Hoodie with zip',
    price:32.00
    },
    
    
    {
      id:12,
      size:'large',
      subcategory:'Tshirt',
    category:'women',
    image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/2_e64bc63a-735c-4c2c-9542-81681cff4891_540x.jpg?v=1614070027',
    
    name:'Faux suede biker jacket',
    price:60.00
}
]
export default function Home() {
  const {item, status, error} = useSelector((state:RootState)=>state.category);
  const items=useSelector((state:RootState)=>state.wishlist.item)
  console.log(item)
  const dispatch=useDispatch<AppDispatch>()
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
  return (
    <>
    
    <div className=' flex flex-col gap-12 w-full items-center justify-center'>
    <section className='w-full h-auto  flex  justify-center items-center gap-6 p-4'>
      <div className='w-[60%] h-auto  flex'>
      <img className='object-cover object-center w-full' src={'https://cdn.shopify.com/s/files/1/0062/5642/7093/files/blog_02.jpg?3192'}/>
      </div>
      <div className=' w-[32%] h-auto grid grid-cols-1 gap-6'>
      <img className='object-contain w-full h-full' src={'https://yanka-demos.myshopify.com/cdn/shop/files/demo08_08_1024x.jpg?v=1613771741'}/>
      <img className='object-contain w-full h-full' src={'https://cdn.shopify.com/s/files/1/0062/5642/7093/files/blog_01.jpg?3192'}/>
      </div>
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
    <section className='w-full h-auto flex p-8'>
      <article className='w-[40%] p-4'>
    <h1 className='text-2xl'> Featured products</h1>
    <h2>Discover Our Featured Products</h2>
    <p>
      
Explore our handpicked selection of featured products, carefully 
chosen to bring you the latest trends and premium quality. 
From stylish apparel to must-have accessories, our featured products
 showcase the best of what our store has to offer. Whether you're 
 looking for a standout outfit or a unique statement piece, 
 our featured collection has something for everyone. 
Shop now and elevate your style with our curated favorites.</p>
    </article>
    <div className=' w-[60%] grid grid-cols-3  gap-2 p-2 '>
     {featuredProducts.map((product)=>(
      <div key={product.id}>
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
    <section className='w-full h-auto flex bg-khaki p-8 mb-4' >
     
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
    <article className='w-[40%] p-2'>
      <h1 className='text-2xl'>Sale</h1>
      <h2>Unbeatable Deals on On Sale Products</h2>
      <p>
Get ready to snag some incredible deals on our on sale products!
 Discover a wide range of discounted items that include everything 
 from fashion essentials to lifestyle must-haves. Our on sale collection
  features top-quality products at unbeatable prices, giving you the chance
   to save big while still enjoying premium items. Don't miss out on these 
   limited-time offers – shop now and take advantage of the amazing discounts on offer!</p>
      </article>
    </section>
    <section className='w-full h-auto flex p-8'>
      <article className='w-[40%] p-2'>
    <h1 className='text-2xl'>Top Trending</h1>
    <h2>Discover Our Top Trending Products</h2>
    <p>
    Explore the latest and most sought-after items in our collection of top trending products. 
    From stylish apparel to must-have accessories, these products are capturing the attention 
    of our customers and setting new fashion standards. Our expertly curated selection brings 
    you the best of what's popular right now, ensuring that you stay ahead of the curve and make
     a statement with your style. Whether you're looking for a standout outfit, a unique accessory, 
     or something that's currently making waves in the fashion world, our top trending products are 
     here to inspire and elevate your look. Shop now and join the trendsetters with these coveted pieces
    </p>
    </article>
    <div className=' w-[60%]  grid grid-cols-3 gap-2 p-2 '>
     {toptrending.map((product)=>(
      <div key={product.id}>
        <Link href={`/product/toptrending/${product.id}`}>
      <Card
      img={product.image}
      title={product.name}
      price={product.price}
      addtocart={()=>handleAddtocart(product)}
      savetowishlist={()=>handleSavetowishlist(product)}
      size={product.size}
      heartfill={items.find((item)=>item.id===product.id)}
      />
      </Link>
      </div>

     ))}
     

    
      
    </div>
    </section>
    
    </div>
    </>
  )
}
