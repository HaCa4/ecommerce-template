import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="flex-shrink-0 flex flex-col relative w-40 h-72 md:w-56 md:h-80 mr-2 md:mr-4">
      <img src={item} className="w-full h-48 md:h-64" />
      <div className="flex flex-col">
        <p className="text-sm md:text-xs mt-1">Organic Skinny High Waist Raw Hem Jeans</p>
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm md:text-xs font-semibold mt-1">$33.95</p>
          <div className="-ml-1 flex w-2/5 md:w-4/12 justify-evenly mt-1">
            <span class="h-3 md:h-2 w-3 md:w-2 rounded-full bg-sky-400 opacity-75" />
            <span class="h-3 md:h-2 w-3 md:w-2 rounded-full bg-red-400 opacity-75" />
            <span class="h-3 md:h-2 w-3 md:w-2 rounded-full bg-green-400 opacity-75" />
            <span class="h-3 md:h-2 w-3 md:w-2 rounded-full bg-black opacity-75" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
