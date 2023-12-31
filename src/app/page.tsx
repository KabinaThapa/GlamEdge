"use client";
import "./globals.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "@/redux/features/productslice";
import { fetchCategory } from "@/redux/features/categoryslice";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import styles from "@/style.module.css";
import Card from "@/components/card/card";
import { addtocart } from "@/redux/features/cartslice";
import {
  addtowishlist,
  removefromwishlist,
} from "@/redux/features/wishlistslice";
import { useRouter } from "next/navigation";
import Carousel from "@/components/carousel/carousel";
import { images } from "@/static-data/images";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Items } from "@/redux/types/items";
import Image from "next/image";
import LoadingSkeleton from "@/components/skeleton/skeleton";

export default function Home() {
 
  const { item, status, error, isloading } = useSelector(
    (state: RootState) => state.category
  );
  const items = useSelector((state: RootState) => state.wishlist.item);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  const products = useSelector((state: RootState) => state.product.item);
 
const featuredproducts = Array.isArray(products) ? products.filter((product) => product.isfeatured) : [];
const onsale = Array.isArray(products) ? products.filter((product) => product.onsale) : [];
const toptrending = Array.isArray(products) ? products.filter((product) => product.toptrending) : [];

console.log(products);
console.log(featuredproducts);


  console.log(products);
  console.log(featuredproducts);
  console.log(item);
 
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  if (status === "loading") {
    return <LoadingSkeleton/>;
  }
  if (status === "failed") {
    return <p>Error:{error}</p>;
  }

  const handleAddtocart = (product: Items) => {
    dispatch(addtocart(product));
    toast.success(`${product.name} added to cart!`);
  };

  const handleSavetowishlist = (product: Items) => {
    
    if (items.find((item) => item.id === product.id)) {
      dispatch(removefromwishlist(product.id));
      toast.success(`${product.name} removed from wishlist!`);
    } else {
      dispatch(addtowishlist(product));
      toast.success(`${product.name} saved to wishlist!`);
    }
  };

  const Imagesetting = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  };
  
  const Cardsetting = {
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
    
      <div className=" flex flex-col overflow-x-hidden w-full items-center justify-center">
        <section className="w-full h-auto  flex  justify-center items-center md:gap-6 gap-4 md:p-4 p-2 pt-4 pb-4">
          <div className=" relative md:w-[70%] w-[60%] md:h-auto h-[20rem]  flex">
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/0062/5642/7093/files/blog_02.jpg?3192"
              }
              alt="picture"
              width={1200}
              height={1200}
              className="object-cover w-full h-full"
            />
            <div className="absolute overflow-hidden top-[50%] left-[10%] gap-8 font-noto font-bold  text-center  md:text-2xl text-xs text-raisinblack p-2 bg-babypowder w-[80%] bg-opacity-60 inset-0 flex flex-col justify-center items-center">
              <p>
                Embrace Your Inner Glamour: Unleash the Swag with Luxurious
                Furry Fashion!
              </p>
              <button className="bg-wenge p-2 md:w-72 w-32 rounded md:text-lg text-sm text-white hover:text-xl">
                Shop Collection
              </button>
            </div>
          </div>
          <div className="md:w-[30%] w-[40%] ">
            <Carousel settings={Imagesetting}>
              {images.map((image, index) => (
                <div key={index} className="relative md:h-80 h-44 ">
                  <Image
                  className="object-cover w-full h-full"
                    src={image.img}
                    alt={image.caption}
                    width={500}
                    height={500}
                  />
                  <div className="absolute md:w-[100%] w-[100%] top-[50%] right-0  bg-Jet bg-opacity-50 p-2 flex flex-col justify-center  text-white  font-poppins md:text-lg text-xs font-medium">
                    <p className="">{image.caption}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
       


        <section className="bg-khaki flex flex-col justify-center w-full items-center p-4 md:p-12">
          <h1 className={styles.kabi + " md:text-4xl text-2xl text-center mb-8 font-semibold"}>
            Our Category
          </h1>
          <div className="md:w-[80%] w-[100%] md:h-auto  grid md:grid-cols-3 grid-cols-2  gap-4">
            {Array.isArray(item)?(
            item.map((item, index) => (
              <div
                key={item.id}
                className={`${index===2?'col-span-2  md:col-auto md:h-auto h-[12rem] ':'md:h-auto h-[20rem]'} relative group gap-4 capitalize md:text-2xl text-lg overflow-hidden shadow-lg`}
              >
                    <Image
                      className=" object-cover w-full h-full transition-transform duration-1000 transform hover:scale-110 "
                      src={item.image}
                      loading="lazy"
                      alt="image"
                      width={1800}
                      height={400}
                    />
 <Link href={`/product/${item.id}`}>
                    <div className="absolute top-[50%] md:right-[30%] left-0 bg-babypowder md:w-32 w-[60%] p-2 text-center rounded-sm transition-transform duration-1000 transform group-hover:scale-110">
                      <h1>{item.id}</h1>
                    </div>
                  </Link>
                
              </div>
            ))):('')}
          </div>
        </section>

        <section className="w-full h-auto flex md:flex-row flex-col justify-between gap-10 p-[5%] font-opensans">
          <article className="md:w-[50%] w-full pl-6 pr-6 flex flex-col gap-8 md:border-r-2 border-l-2 md:border-l-0 border-khaki">
            <h1 className="md:text-3xl text-xl font-semibold md:text-right "> Our Featured Products</h1>

            <p className=" md:text-lg text-base md:text-right ">
              <h2 className="md:text-xl  underline">
                Discover Our Featured Products
              </h2>
              Explore our handpicked selection of featured products, carefully
              chosen to bring you the latest trends and premium quality. From
              stylish apparel to must-have accessories, our featured products
              showcase the best of what our store has to offer. Whether you're
              looking for a standout outfit or a unique statement piece, our
              featured collection has something for everyone. Shop now and
              elevate your style with our curated favorites.
            </p>
            <button className=" text-white p-2 md:w-72 w-32 rounded text-lg hover:text-xl  bg-wenge  md:ms-auto  ">
              Shop Now
            </button>
          </article>
          <div className=" md:w-[60%] w-full bg-babypowder p-[3%] ">
            <Carousel settings={Cardsetting}>
              {featuredproducts.map((product, index) => (
                <div
                  key={product.id}
                  className="  pl-2 pr-2 gap-2 "
                >
                  <Card
                    img={product.image}
                    title={product.name}
                    price={product.price}
                    addtocart={() => handleAddtocart(product)}
                    savetowishlist={() => handleSavetowishlist(product)}
                   heartfill={!!items.find((item)=>item.id===product.id)}
                    href={`/product/${product.category}/${product.subcategory}/${product.id}`}
                    
                  
                  
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        <section className="w-full h-auto flex md:flex-row  flex-col-reverse p-[5%] gap-8 font-opensans bg-khaki justify-between">
          <div className=" md:w-[60%] w-full bg-babypowder  p-[3%] ">
            <Carousel settings={Cardsetting}>
              {onsale.map((product, index) => (
                <div key={product.id} className=" h-auto pl-2 pr-2 capitalize">
                  <Card
                    img={product.image}
                    title={product.name}
                    price={product.price}
                    addtocart={() => handleAddtocart(product)}
                    savetowishlist={() => handleSavetowishlist(product)}
                    href={`/product/${product.category}/${product.subcategory}/${product.id}`}
                    
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <article className="md:w-[50%] w-full p-2 flex flex-col gap-8">
            <h1 className="md:text-3xl text-2xl font font-semibold">OnSale</h1>

            <p className="md:text-lg text-base ">
              <h2 className="md:text-xl text-lg underline">
                Unbeatable Deals on OnSale Products
              </h2>
              Get ready to snag some incredible deals on our on sale products!
              Discover a wide range of discounted items that include everything
              from fashion essentials to lifestyle must-haves. Our on sale
              collection features top-quality products at unbeatable prices,
              giving you the chance to save big while still enjoying premium
              items. Don't miss out on these limited-time offers – shop now and
              take advantage of the amazing discounts on offer!
            </p>
            <button className="bg-wenge text-white p-2  md:w-72 w-44 rounded text-lg hover:text-xl ">
              Find more deals
            </button>
          </article>
        </section>

        <section className="w-full h-auto flex md:flex-row flex-col justify-between gap-10 p-[5%] font-opensans">
          <article className="md:w-[50%] w-full pl-6 pr-6 flex flex-col gap-8 border-khaki md:border-r-2 md:border-l-transparent  border-l-2 md:text-right">
            <h1 className="md:text-3xl text-2xl font-semibold ">Top Trending</h1>
            <p className="md:text-lg text-base">
              <h2 className="md:text-xl text-lg  underline">
                Discover Our Top Trending Products
              </h2>
              Explore the latest and most sought-after items in our collection
              of top trending products. Whether you're looking for a standout
              outfit, a unique accessory, or something that's currently making
              waves in the fashion world, our top trending products are here to
              inspire and elevate your look. Shop now and join the trendsetters
              with these coveted pieces
            </p>
            <button className="bg-wenge text-white p-2 md:w-72 w-60 rounded text-lg hover:text-xl md:ms-auto">
              Check our collections
            </button>
          </article>
          <div className=" md:w-[60%] w-full capitalize bg-babypowder p-[3%]">
            <Carousel settings={Cardsetting}>
              {toptrending.map((product, index) => (
                <div key={product.id} className="pl-2 pr-2 h-auto">
                  <Card
                    img={product.image}
                    title={product.name}
                    price={product.price}
                    addtocart={() => handleAddtocart(product)}
                    savetowishlist={() => handleSavetowishlist(product)}
                    href={`/product/${product.category}/${product.subcategory}/${product.id}`}
                    
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </section>
       
      </div>
    </>
  );
}
