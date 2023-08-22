'use client'
import { Item } from '@/redux/features/cartslice';
import { NextApiRequest, NextApiResponse } from 'next';
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16', // Use the latest API version
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { items } = req.body; // Assuming cartItems is an array of product objects

      const lineItems = items.map((item:Item) => ({
        price: item.price, // Replace with the actual Price ID of each product
        quantity: item.quantity,
      }));

      // Create Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/checkout?success=true`,
        cancel_url: `${req.headers.origin}/checkout?canceled=true`,
      });

      res.status(200).json({ id: session.id }); // Return the session ID
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the checkout session.' });
    }
  } 
}