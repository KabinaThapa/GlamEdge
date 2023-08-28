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
        <div>
            
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            {/* Other product details */}
        </div>
    );
};

export default ProductDetail;
