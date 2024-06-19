// import { Heart, ShoppingCart } from "lucide-react";

import ProductCard from "../components/ProductCard";

const ProductSection = () => {
  return (
    <div>
      <div className="flex flex-col w-11/12 my-4 mx-auto">
        <div className="flex justify-between">
          <div>
            <div className="text-3xl font-urbanist mt-20 font-semibold text-custom-dark-green">
              Featured Products
            </div>
            <hr className="w-28 h-1  my-4 bg-custom-light-green border-0 rounded"></hr>
          </div>
          <div>
            <div className="text-sm font-urbanist mt-20 font-semibold text-custom-light-green">
              View all
            </div>
            <hr className="w-10 h-1  my-1 bg-custom-light-green border-0 rounded"></hr>
          </div>
        </div>

        {/* product listing */}

        <div className="grid grid-cols-12 mt-10  gap-5  ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />



        </div>
      </div>
    </div>
  );
};

export default ProductSection;
