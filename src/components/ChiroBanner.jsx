// import React from 'react'

import Btn from "./Btn";

const ChiroBanner = () => {
  return (
    <div className="flex flex-col">
      <div className=" md:h-[600px] w-full bg-custom-bg  font-urbanist flex flex-col md:flex-row pt-10 ">
        <div className="md:w-1/2 bg-custom-bg h-full flex flex-col justify-center ">
          <div className="w-full md:w-3/4 mx-auto flex flex-col items-center md:items-start text-center md:text-start ">
            <p className=" text-custom-light-green text-xs font-extrabold ">
              Fresh 100% Organic Food
            </p>
            <h1 className="text-6xl  my-5 text-custom-dark-green font-extrabold">
              Fresh and Heathly Organic Food
            </h1>
            <p className=" text-custom-dark-green text-xs font-normal mb-5 leading-relaxed ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            </p>

            <Btn>Order Now</Btn>
          </div>
        </div>
        <div className=" md:w-1/2">
          <img
            src="src/assets/ban.png"
            alt="food"
            className="h-full mx-auto  object-contain transition-opacity duration-500"
            loading="lazy" // Lazy loading
            style={{ opacity: 1 }} // Initial opacity
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.opacity = 0;
            }} // Hide on error
          />
        </div>
      </div>

      {/* Product promo section */}
      
    </div>
  );
};

export default ChiroBanner;
