import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 h-48 border rounded-lg relative">
      {/* <div className="absolute top-0 left-0 bg-custom-orange text-white text-xs  font-light py-2 px-4 rounded-sm">
        20% <span className="font-bold text-xs"> OFF</span>
      </div> */}
      <div className="absolute top-0 right-3 p-1 ">
        <Heart size={24} className="text-red-500" />
      </div>
      <div className="absolute top-10 w-3/4 left-3 ">
        <h1 className="font-urbanist  font-semibold">
          Baked Snacks Cheese Crackers
        </h1>
        <div className=" absolute -bottom-14 flex  w-2/4 justify-between items-end">
          <h3 className="font-urbanist font-bold text-custom-light-green">
            Ksh 678
          </h3>
          <p className="text-xs font-light font-urbanist">200g</p>
        </div>
      </div>{" "}
      <div className="absolute flex justify-end w-3/4 -right-20 -bottom-0 ">
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
      <div className="absolute bottom-0 flex">
        <div className=" p-2 rounded bg-custom-light-green flex ">
          <p className="pr-2 text-sm font-semibold font-urbanist text-white ">
            Add to Cart
          </p>
          <ShoppingCart size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
