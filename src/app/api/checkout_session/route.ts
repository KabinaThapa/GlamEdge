import {NextRequest as req, NextResponse as res} from 'next/server';


const stripe = require('stripe')("sk_test_51Nhb3pC9LEQj4rjsxYp52k2vaqCFRUAS4sGD4fcsQZROCxpW1s0R1AHi1YpNNytZfvU6RNXwMfL4D3CZttipgMGY00OCUoKxX6");



export function GET(){
  return new Response("Hello World")
}

export async function POST(req:Request){
  console.log("Hello router")
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: '55',
          quantity: 5,  
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    });
    return new Response(err.message,{
      status:500
    });
  } catch (err) {
    return new Response(err.message,{
      status:500
    });
  }
}
