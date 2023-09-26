'use client'
import React, {useEffect,useState} from 'react'
import { RootState, AppDispatch } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import {  fetchProduct} from '@/redux/features/productslice';
import { addtocart } from '@/redux/features/cartslice';
import { addtowishlist, removefromwishlist } from '@/redux/features/wishlistslice';
import Card from '@/components/card/card'
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton'
import { Items } from '@/redux/types/items';
import {HiOutlineChevronDown} from 'react-icons/hi'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {BsFillGridFill,BsFillGrid3X2GapFill,BsFillGrid3X3GapFill} from 'react-icons/bs'



export const Subcategorylist:React.FC<{category:string,subcategory:string}>=({category, subcategory})=> {
    const dispatch=useDispatch<AppDispatch>()
    const [sortedProducts, setSortedProducts] = useState<Items[]>([]);
    const [sortByPrice, setSortByPrice] = useState<boolean>(false)
    const [dropmenu, setDropmenu]=useState<boolean>(false)
    const[columns, setColumns]=useState<number>(4)
    useEffect(()=>{
      dispatch(fetchProduct())
    },[dispatch])
    const{item}=useSelector((state:RootState)=>state.product)
    console.log(item)
    
    useEffect(() => {
      const filterCategory = item.filter(
        (product) => product.category ===category && product.subcategory === subcategory
      )
      console.log(filterCategory)
  
      let productsToShow = filterCategory;
  
      if (sortByPrice) {
        productsToShow = [...filterCategory].sort((a, b) => a.price - b.price);
      }
  
      setSortedProducts(productsToShow);
    }, [item, category, subcategory, sortByPrice]);
   
    
    
    const items=useSelector((state:RootState)=>state.wishlist.item)
    

    //addtocart functionality
    
    const handleAddtocart=(product:Items)=>{
      dispatch(addtocart(product))
      toast.success(`${product.name} added to cart!`)

    }
    //addtowishlist functionality
    const handleSave=(product:Items)=>{
      if(items.find((item)=>item.id===product.id)){
        dispatch(removefromwishlist(product.id))
        toast.success(`${product.name} removed from wishlist!`)
      }
      else{
        dispatch(addtowishlist(product))
        toast.success(`${product.name} added to wishlist!`)
      }
    }
    const handleSortByPrice = () => {
      setSortByPrice(!sortByPrice);
    }
    const handleDropmenu=()=>{
      setDropmenu(!dropmenu)
    }
    const handleColumns=(num:number)=>{
      setColumns(num)
      
    }
    return(
     <>
     <div className='flex flex-col items-center justify-center w-full p-[5%] gap-10'>
      <div className='relative w-[90%] text-xl flex justify-between'>
      <h1 className='text-3xl underline'>{subcategory}</h1>
      <div className='w-44 flex justify-around items-center'>
      <button onClick={()=>handleColumns(3)}><BsFillGrid3X2GapFill/></button>
      <button onClick={()=>handleColumns(2)}><BsFillGridFill/></button>
      <button onClick={()=>handleColumns(4)}><BsFillGrid3X3GapFill/></button>
     
      <button onClick={handleDropmenu} className=' flex items-center justify-center cursor-pointer'>Filter <HiOutlineChevronDown size={20}/></button>
      {dropmenu ?(
        <div className=' absolute z-[1] w-20 p-1 h-20 rounded bg-babypowder right-0 top-9 text-center'>
          <p onClick={handleSortByPrice} className='hover:font-semibold cursor-pointer'>Price</p>
        </div>
      )
      :
      (null)}
      </div>
   
      </div>
    <div className={`grid grid-cols-${columns} gap-2 gap-y-4 w-[90%] p-2 `}  > 

    {sortedProducts.map((product)=>(
        <div key={product.id} className={`mx-auto ${columns===2 ?`w-[20rem]`:`w-[15rem]`}`}>
          {sortedProducts.length===0 ? (<Skeleton width={300} height={400}/>):(
       
        <Card
      img={product.image}
      title={product.name}
      price={product.price}
      addtocart={()=>handleAddtocart(product)}
      savetowishlist={()=>handleSave(product)}
      heartfill={items.find((item)=>item.id===product.id)}
      href={`/product/${category}/${subcategory}/${product.id}`}
      />
      )}
        </div>
    ))}
    
    
    </div>
    </div>
    </>
    )
  }