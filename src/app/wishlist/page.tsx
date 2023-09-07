
import React from 'react';
import Wishlist from '@/components/wishlist/wishlist'
import { Metadata } from 'next';
export const metadata = {
  title: 'Your Wishlist - GlamEdge',
  description: 'Explore and manage your wishlist items on GlamEdge.'
};

const CartPage = () => {
  return (
    <div>
      <Wishlist/>
    </div>
  );
};

export default CartPage;
