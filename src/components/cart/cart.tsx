"use client";
import {
  decrement,
  increment,
  removefromcart,
} from "@/redux/features/cartslice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import Stripe from "@stripe/stripe-js";
import blob3 from "../../../public/blob3.svg";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";

const stripePromise = () =>
  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.data);
  const cartQuantity = useSelector(
    (state: RootState) => state.cart.cartQuantity
  );
  const { cartAmount } = useSelector((state: RootState) => state.cart);
  console.log(cartQuantity);
  console.log(items);
  const dispatch = useDispatch();
  const handleIncrement = (id: number) => {
    dispatch(increment(id));
  };
  const handleDecrement = (id: number) => {
    dispatch(decrement(id));
  };
  const handleDelete = (id: number) => {
    dispatch(removefromcart(id));
  };
  const handleCheckout = async () => {
    const token = localStorage.getItem("session-token");
    console.log(token);
    if (token) {
      const stripe = await stripePromise();
      console.log(items);
      const result = await stripe?.redirectToCheckout({
        lineItems: items.map((product) => ({
          price: product.priceId.toString(),
          quantity: product.quantity,
        })),
        mode: "payment",
        successUrl: `http://localhost:3000/success`,
        cancelUrl: `http://localhost:3000/cancel`,
        customerEmail: "customer@email.com",
      });
      console.warn(result?.error.message);
    } else {
      toast.error("Please signin to checkout");
    }
  };

  return (
    <>
      {items.length === 0 ? (
        <>
          <div className="  min-h-screen w-full flex items-center p-12  ">
            <div className=" relative flex flex-col  items-center justify-center p-[5%] h-[35rem] md:w-[60%] w-[100%]  text-2xl overflow-hidden gap-4 mx-auto">
              <h1 className="underline">Your Cart is Empty!</h1>
              <button className="w-44 w-44 p-2 bg-wenge rounded md:text-lg text-base hover:text-xl text-white">
                <Link href="/">Back To Shopping</Link>
              </button>
              <div className=" absolute md:w-[60%] w-[100%] top-50 right-50 z-[-1] ">
                <Image
                  alt="pic"
                  width={1400}
                  height={1400}
                  src={blob3.src}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="  flex  justify-around  w-full    p-[2%] ">
            
            <div className="  relative w-full   md:flex  justify-around bg-babypowder p-[3%]">
         
              <div className=" absolute md:w-44 md:h-44 hidden md:block w-32 h-32 md:bottom-0  md:left-1 left-8 ">
                
                <Image alt='pic' width={300} height={300} src={blob3.src} className="object-cover w-full h-full" />
              </div>
              <h1 className="underline text-center md:hidden z-[10000] md:mb-0 mb-6">Your Shopping Cart</h1>
              <div className="md:w-[60%] w-[100%] z-[1] border border-black bg-timber ">
                
              <div className="grid md:grid-cols-5 grid-cols-4 z-10 gap-2 md:text-xl text-sm  border-b-8 border-babypowder p-4">
    <div className="text-center font-serif">Item</div>
    <div className="text-center font-serif">Quantity</div>
    <div className="text-center font-serif">Price</div>
    <div className="text-center font-serif">Total</div>
    <div className="text-center font-serif md:block hidden">Actions</div>
    </div>
  

    {items.map((item) => (
      <div
        key={item.id}
        className="grid md:grid-cols-5 grid-cols-4  text-center items-center border-b-8 border-babypowder text-base gap-2   p-2"
      >
       
        <div className=" w-38 h-38 ">
          <Image src={item.image} width={800} height={200} alt={item.name} />
          <p className="md:text-base text-xs z-[-1] mt-2">{item.name}</p>
        </div>

        <div className="mx-auto">
          <div className="bg-wenge   text-white text-lg md:rounded-md rounded-2xl flex md:flex-row flex-col  md:w-32 w-7 justify-around p-1  font-serif">
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <p>{item.quantity}</p>
            <button onClick={() => handleIncrement(item.id)}>+</button>
         </div>
        </div>

        <div className=" md:text-lg text-sm font-serif my-auto"> $ {item.price}</div>
        <div className=" font-serif md:text-lg text-sm my-auto">
          $ {item.price * item.quantity}
        </div>
        <div className=" md:text-2xl text-xl col-span-5 md:mx-0 mx-auto md:col-auto p-4 mt-2 ">
          <button className="border rounded-full md:mx-auto flex items-center justify-center bg-babypowder text-red-800 w-9 h-9" onClick={() => handleDelete(item.id)}>
            <AiOutlineDelete  />
          </button>
        </div>
      </div>
    ))}
  </div>


              <div className="relative md:text-2xl text-xl font-roboto md:w-[30%] h-96 p-4  flex flex-col gap-4  ">
                <div className=" absolute w-[100%]  md:bottom-8  md:left-12 left-2 p-2  z-0 ">
                  <Image
                    alt="pic"
                    width={200}
                    height={300}
                    src={blob3.src}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="underline md:block hidden z-[1]">Your Shopping Cart</p>
                <p className="z-[1] ">Total Items: {cartQuantity}</p>
                <h1 className=" z-[1]">Sub Total: ${cartAmount}</h1>

                <button
                  onClick={handleCheckout}
                  className=" p-4 text-xl rounded-md bg-wenge text-white hover:text-xl z-[1]"
                >
                  CheckOut
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <ToastContainer />
    </>
  );
};

export default Cart;
