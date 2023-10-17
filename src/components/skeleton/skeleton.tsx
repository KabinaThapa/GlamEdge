import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton flex justify-between w-full h-screen p-[3%]">
      <div className="skeleton w-[60%] h-screen"></div>
      <div className=" flex flex-col justify-between w-[30%] h-screen ">
      <div className="skeleton w-full h-80 " ></div>
      <div className="skeleton  w-full h-80"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
