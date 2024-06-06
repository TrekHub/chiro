// import React from 'react'

import Btn from "./Btn";

const ChiroBanner = () => {
  return (
    <div className="flex flex-col">
      <div className=" md:h-4/5 w-full bg-custom-bg  font-urbanist flex flex-col md:flex-row pt-10 ">
        <div className="md:w-1/2 bg-custom-bg h-full flex flex-col justify-center ">
          <div className="w-full md:w-3/4 mx-auto flex flex-col items-center md:items-start text-center md:text-start ">
            <p className=" text-custom-light-green text-xs font-semibold ">
              Fresh 100% Organic Food
            </p>
            <h1 className="text-5xl  my-5 text-custom-dark-green font-extrabold">
              Fresh and Heathly Organic Food
            </h1>
            <p className=" text-custom-dark-green text-xs font-normal mb-5 ">
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
      <div className="flex flex-col justify-center mt-10 md:flex-row w-full">
        <div className="bg-custom-bg  font-urbanist w-5/6 mx-auto md:mx-3 md:w-1/4 rounded-md  h-[150px]  flex  justify-between  my-2">
          <div className="w-1/2 flex flex-col  justify-center pl-4">
            <h1 className="m-0 p-0 text-xl text-green-700 font-extrabold mb-0">
              50% OFF
            </h1>
            <h1 className=" m-0 p-0 text-xl text-custom-dark-green font-extrabold">
              Pure Organic
            </h1>

            <div className="bg-orange-400 py-2 rounded-md   w-[100px] text-xs text-white text-center mt-3 font-bold cursor-pointer hover:bg-custom-light-green  duration-500 ">
              Shop Now
            </div>
          </div>

          <div className="w-1/2 flex  justify-center items-center">
            <img
              src="src/assets/fruit.png"
              alt="food"
              className=" object-contain"
              loading="lazy" // Lazy loading
              style={{ opacity: 1 }} // Initial opacity
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.opacity = 0;
              }} // Hide on error
            />
          </div>
        </div>
        <div className="bg-green-100  font-urbanist w-5/6 mx-auto md:mx-3 md:w-1/4 rounded-md  h-[150px]  flex  justify-between my-2">
          <div className="w-1/2 flex flex-col  justify-center pl-4">
            <h1 className="m-0 p-0 text-xl text-orange-400 font-extrabold mb-0">
              30% OFF
            </h1>
            <h1 className=" m-0 p-0 text-xl text-custom-dark-green font-extrabold">
              Pure Fruit
            </h1>

            <div className="bg-black  text-white py-2 rounded-md  w-[100px] text-xs text-center mt-3 font-bold cursor-pointer hover:bg-custom-orange  duration-500 ">
              Shop Now
            </div>
          </div>

          <div className="w-1/2 flex  justify-center items-center">
            <img
              src="src/assets/fruit.png"
              alt="food"
              className=" object-contain"
              loading="lazy" // Lazy loading
              style={{ opacity: 1 }} // Initial opacity
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.opacity = 0;
              }} // Hide on error
            />
          </div>
        </div>
        <div className="bg-blue-100  font-urbanist w-5/6 mx-auto md:mx-3 md:w-1/4 rounded-md  h-[150px]  flex  justify-between my-2">
          <div className="w-1/2 flex flex-col  justify-center pl-4">
            <h1 className="m-0 p-0 text-xl text-green-400 font-extrabold mb-0">
              30% OFF
            </h1>
            <h1 className=" m-0 p-0 text-xl text-custom-dark-green font-extrabold">
              Pure Fruit
            </h1>

            <div className="bg-green-400  text-white py-2 rounded-md  w-[100px] text-xs text-center mt-3 font-bold cursor-pointer hover:bg-custom-orange  duration-500 ">
              Shop Now
            </div>
          </div>

          <div className="w-1/2 flex  justify-center items-center">
            <img
              src="src/assets/fruit.png"
              alt="food"
              className=" object-contain"
              loading="lazy" // Lazy loading
              style={{ opacity: 1 }} // Initial opacity
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.opacity = 0;
              }} // Hide on error
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiroBanner;
