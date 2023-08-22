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
import { addtocart } from '@/redux/features/cartslice'
import { addtowishlist } from '@/redux/features/wishlistslice'
import { subcategory } from './../redux/features/subcategoryslice';

export default function Home() {
  const {item, status, error} = useSelector((state:RootState)=>state.category);
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
  
  //featured Products
  const featuredProducts=[
    {
      id:1,
      subcategory:'Tshirt',
      category:'women',
      image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_35559729-bb4f-477a-afbb-d695451b9719_1120x.jpg?v=1615530706',
      name:'ECO AWARE ORGANIC COTTON TOP',
      price:'39.00',
    },
    {
      id:2,
      subcategory:'Tshirt',
      category:'men',
      image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_fb07f6fc-f4bb-46a9-966d-1a0b66e6960a_1120x.jpg?v=1614067794',
     name:'CLASSIC ONE-BREASTED JACKET',
      price:'$179.00',
    },
    {
      id:3,
      subcategory:'Tshirt',
      category:'women',
      image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_7bb38758-0669-4713-864a-f6723b07f307_1120x.jpg?v=1616638533',
     name:'Embosses knit cardigon',
     price:'$118.00'
    },
    {
      id:4,
      subcategory:'Tshirt',
      category:'men',
      image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_e6fe8d6a-e054-4a68-ae4c-84dfb4f66d48_1120x.jpg?v=1613984692',
       
      name:'T-shirt with logo',
      price:'$68.00'
    },{
      id:5,
      subcategory:'Tshirt',
      category:'women',
      image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_5c0c329d-da3c-4361-a786-e33ac5ea5498_1120x.jpg?v=1614070750',
      
      name:'Cardigon with pockets',
      price:'$89.00'
    },{
      id:6,
      subcategory:'Tshirt',
      category:'men',
      image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_1120x.jpg?v=1613984550',
      
      name:'The Simpsons T-shirt',
      price:'$179.00'
    }
  ]
  //On Sale products
  const onsale=[
    {
      id:1,
      subcategory:'Tshirt',
      category:'women',
      image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_4b6df0cc-511d-4f31-8475-08b1346b1921_1120x.jpg?v=1614072211',
      
      name:'HIGH TURTLENECK JUMPER',
      price:'$45.00'
    },
      {
        id:2,
        subcategory:'Pants',
      category:'women',
      image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/4_bf88b3aa-813f-423a-8e55-46fee7f68db9_1120x.jpg?v=1614073956',
       
      name:'Basic sweat joggers',
      price:'$26.00'
      },
      {
        id:3,
        subcategory:'Tshirt',
      category:'women',
      image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/2_65b663d9-5f7a-4a9c-905a-2679b7edf4db_360x.jpg?v=1614073469',
       
      name:'Loose fit blazor and trouser set',
      price:'$78.00'
      },
      {
      id:4,
     
      subcategory:'Tshirt',
      category:'women',
       image:'https://minion-vinovatheme.myshopify.com/cdn/shop/products/1_9bf4a17f-966d-4386-a7f4-424ce07c310d_1120x.jpg?v=1613984616',
    
      name:'Long-Sleeved Shirt',
      price:'$32.00'
      },
      {
        id:5,
        subcategory:'Tshirt',
      category:'women',
        image:'https://skudmart.myshopify.com/cdn/shop/products/s-p-8-1_grande.jpg?v=1569978781', 
     
      name:'Strappy Summer Beach Floral Flared',
      price:'$40.00'
      },
      
      {
        id:6,
        subcategory:'Tshirt',
      category:'men',
      image:'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a.jpg',
      
      name:'Cotton white t-shirt',
      price:'$24.00'
  }
]
  const handleAddtocart=(product)=>{
    dispatch(addtocart(product))
  }
  const handleSavetowishlist=(product)=>{
    dispatch(addtowishlist(product))
  }


  return (
    <>
    
    <div className=' flex flex-col gap-12 w-full items-center justify-center'>
    <section className='w-full h-auto bg-babypowder flex  justify-center items-center gap-6 p-4'>
      <div className='w-[60%] h-auto  flex'>
      <img className='object-cover object-center w-full' src={'https://cdn.shopify.com/s/files/1/0062/5642/7093/files/blog_02.jpg?3192'}/>
      </div>
      <div className=' w-[32%] h-auto grid grid-cols-1 gap-6'>
      <img className='object-contain w-full h-full' src={'https://yanka-demos.myshopify.com/cdn/shop/files/demo08_08_1024x.jpg?v=1613771741'}/>
      <img className='object-contain w-full h-full' src={'https://cdn.shopify.com/s/files/1/0062/5642/7093/files/blog_01.jpg?3192'}/>
      </div>
    </section>

    <section className='bg-Platinum p-4'>
    <h1 className={styles.kabi + ' text-4xl text-center mb-8'}>Our Category</h1>
    <div className='h-auto grid grid-cols-3  gap-4'>
      {item.map((item)=>(
        <div key={item.id} className='relative group gap-4 capitalize text-2xl overflow-hidden'>
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
    <section className='w-full'>
    <h1 className='text-2xl'> Featured products</h1>
    <div className='w-[80%] h-auto grid grid-cols-3 place-items-center p-4 space-y-4 border-2 mx-auto'>
     {featuredProducts.map((product)=>(
      <Card
      img={product.image}
      title={product.name}
      price={product.price}
      addtocart={()=>handleAddtocart(product)}
      savetowishlist={()=>handleSavetowishlist(product)}
      />

     ))}
     

    
      
    </div>
    </section>
    <section className='w-full h-auto'>
      <h1 className='text-2xl'>Sale</h1>
      <div className='w-[80%] h-auto grid grid-cols-3 place-items-center p-4 space-y-4 border-2 mx-auto'>
     
      {onsale.map((product)=>(
      <Card
      img={product.image}
      title={product.name}
      price={product.price}
      addtocart={()=>handleAddtocart(product)}
      savetowishlist={()=>handleSavetowishlist(product)}
      />

     ))}
      
      
    
    </div>
    </section>
    </div>
    </>
  )
}
