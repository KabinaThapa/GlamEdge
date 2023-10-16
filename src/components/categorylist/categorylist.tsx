"use client";
import React, { useEffect } from "react";
import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import blob from "../../../public/blob.svg";
import blob2 from "../../../public/blob2.svg";
import { fetchSubCategory } from "@/redux/features/subcategoryslice";
import Image from "next/image";

const Categorylist: React.FC<{ category: string }> = ({ category }) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchSubCategory());
  }, [dispatch]);
  const { item } = useSelector((state: RootState) => state.subcategory);
  const items = useSelector((state: RootState) => state.category.item);
  console.log(item);
  console.log(items);

  const filterCategory = Array.isArray(item)?(item.filter(
    (subcategory) => subcategory.id === category)):([])
  
  const filterdesc = items.filter((categories) => categories.id === category);
  console.log(filterdesc);
  console.log(filterCategory);
  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center gap-10 p-[5%] font-opensans">
        <div className=" w-[90%] ">
          <h1 className="capitalize md:text-4xl text-2xl text-center underline mb-4  ">
            {category}
          </h1>
          <p className="md:text-lg text-sm   ">{filterdesc[0].desc}</p>
        </div>
        <div className="md:w-[80%] w-[95%] md:h-[32rem] h-[20rem] grid grid-cols-3 gap-4 ">
          {filterCategory.map((products, index) => (
            <div
              key={products.id}
              className={`w-full h-full   ${
                index === 2 || index === 0 ? "row-span-2" : ""
              } relative group  capitalize text-2xl overflow-hidden shadow-lg  mx-auto`}
            >
              <Link href={`/product/${category}/${products.subcategory}`}>
                <Image
                  className=" object-cover w-full h-full transition-transform duration-1000 transform hover:scale-110 "
                  src={products.image}
                  loading="lazy"
                  alt="image"
                  width={1400}
                  height={1400}
                />

                <div className="absolute top-[50%] md:right-[20%] right-[10%] bg-babypowder md:w-44 w-20 p-2 md:text-center md:text-base text-xs rounded-sm transition-transform duration-1000 transform group-hover:scale-110">
                  <h1>{products.subcategory}</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className=" absolute w-[35%] h-auto top-8 left-2 z-[-1] ">
          <Image alt='pic' width={1400} height={1400} src={blob.src} className="object-cover w-full h-full" />
        </div>
        <div className=" absolute w-[30%]  bottom-0 right-0 z-[-1]">
          <Image alt='pic' width={1400} height={1400} src={blob2.src} className="object-cover w-full h-full" />
        </div>
      </div>
    </>
  );
};
export default Categorylist;
