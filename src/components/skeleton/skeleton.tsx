import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton flex justify-between w-full md:h-screen h-[35rem] p-4">
      <div className="skeleton md:w-[69%] w-[55%] h-full"></div>
      <div className=" flex flex-col  justify-evenly md:w-[29%] w-[40%] h-full ">
      <div className="skeleton w-full md:h-80 h-60 " ></div>
      <div className="skeleton  w-full md:h-80 h-60"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
