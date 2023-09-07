
import React from 'react';
import Cart from '@/components/cart/cart'
import { Metadata } from 'next';
export const metadata:Metadata={
  title:'Your shooping Cart | GlamEdge',
  description:'View and manage the items in your shopping cart on GlamEdge'
}

const CartPage = () => {
  return (
    <div>
      <Cart />
    </div>
  );
};

export default CartPage;
