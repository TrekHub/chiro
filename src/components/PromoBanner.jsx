const PromoBanner = () => {
  return (
    <div className="w-11/12 mx-auto rounded my-5 bg-custom-bg py-5 ">
      <div className="flex  justify-between items-center">
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
    </div>
  );
};

export default PromoBanner;
