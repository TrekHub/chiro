const PromoBanner = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col rounded my-5 py-5 ">
      <div className="flex  justify-between items-center  bg-custom-bg">
        <div className="flex flex-col justify-center items-center h-full space-y-3 px-5 ">
          <div className="text-xl font-urbanist font-semibold text-custom-dark-green">
            All Tested Products
          </div>
          <div className="text-5xl font-urbanist font-bold text-custom-dark-green">
            Fresh Produce Products
          </div>
          <div className="text-sm font-urbanist font-semibold text-custom-light-green">
            Use code: FIRST10
          </div>
        </div>

        <div className="flex ">
          <img
            src="src/assets/ban.png"
            alt="food"
            width={500}
            className=" object-contain ml-auto"
            loading="lazy" // Lazy loading
            style={{ opacity: 1 }} // Initial opacity
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.opacity = 0;
            }} // Hide on error
          />
        </div>
      </div>

      {/* Promo section two */}
      <div className="flex justify-around  mt-10">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-full bg-green-200"></div>
          <h3 className="font-urbanist font-semibold text-xl mt-3">
            Fastest Delivery
          </h3>
          <p className="font-urbanist font-light text-sm mt-1">
            Delivery to your Doorstop
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-full bg-green-200"></div>
          <h3 className="font-urbanist font-semibold text-xl mt-3">
            24/7 Support
          </h3>
          <p className="font-urbanist font-light text-sm mt-1">
            Support for all your queries
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-full bg-green-200"></div>
          <h3 className="font-urbanist font-semibold text-xl mt-3">
            Verified Products
          </h3>
          <p className="font-urbanist font-light text-sm mt-1">
            All products are tested
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-full bg-green-200"></div>
          <h3 className="font-urbanist font-semibold text-xl mt-3">
            100% Assurance
          </h3>
          <p className="font-urbanist font-light text-sm mt-1">
            Money back guarantee
          </p>
        </div>
      </div>

      {/* second promo section */}

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

      {/* Newsletter section */}

      <div className="py-10 flex justify-between items-center mt-10">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl text-center font-urbanist font-semibold">
            Subscribe to our Newsletter
          </h1>
          <p className="text-center font-urbanist font-light text-sm mt-1">
            Get the latest news and updates from us
          </p>
        </div>

        <div className="w-1/2 ">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-3/4 border border-slate-200 rounded-md py-3  px-3 font-urbanist font-light text-sm"
          />
          <button className="bg-custom-light-green text-white py-3 px-6 rounded-md ml-1 font-urbanist text-sm font-semibold ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
