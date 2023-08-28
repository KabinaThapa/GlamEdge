'use client'
import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/redux/store';


const ProductDetail = ({params}:{ params:{id: string}}) => {
    
    const products = useSelector((state: RootState) => state.product.item);
    console.log(products)
console.log(params)
const productId = parseInt(params.id, 10)
    const product = products.find((product) => product.id === productId); // Find the product with the matching id
console.log(product)
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-full flex justify-between items-center p-12'>
            <div className='w-[40%] overflow-hidden '>
            
            <img className='w-full h-full transition transform-transition hover:scale-125 duration-500' src={product.image} alt={product.name} />
            </div>
            <div className='w-[50%] border-2 h-96 '>
            <h2 className='text-2xl'>{product.name}</h2>
            <p>{product.description}</p>
            <p> {product.price}</p>
            <p>{product.rating}</p>
            
            </div>
           
        </div>
    );
};

export default ProductDetail;
