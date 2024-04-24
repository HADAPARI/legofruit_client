import { Minus, Plus, ShoppingBagOpen } from "@phosphor-icons/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Product = ({ image, type, title, quantity, price, promotion }) => {
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);

  const increment = () => {
    if (purchaseQuantity < quantity) {
      setPurchaseQuantity((purchaseQuantity) => purchaseQuantity + 1);
    }
  };

  const decrement = () => {
    if (purchaseQuantity > 1) {
      setPurchaseQuantity((purchaseQuantity) => purchaseQuantity - 1);
    }
  };

  return (
    <div className="w-80 rounded-xl shadow-xl py-10 bg-white">
      {promotion != "" && (
        <div className="bg-orange-500 w-fit text-white px-3 text-sm promotion">
          -{promotion}%
        </div>
      )}
      <div className="flex justify-center">
        <img src={image} alt={title} className="w-52" />
      </div>
      <div className="px-10 mt-3">
        <h3 className="text-gray-400 uppercase">{type}</h3>
        <h2 className="font-semibold text-xl">
          {title + " " + quantity + "kg"}
        </h2>
        <p className="my-5">
          <span className="text-orange-500 text-xl font-semibold">
            {"$" + price}
          </span>
          <span className="text-xs">/kg</span>
        </p>
        <div className="flex justify-between">
          <div className="join">
            <button
              className="btn btn-outline border-gray-100 join-item"
              onClick={decrement}
            >
              <Minus size={20} />
            </button>
            <span className="join-item px-5 flex items-center bg-gray-100">
              {purchaseQuantity}
            </span>
            <button
              className="btn btn-outline border-gray-100 join-item"
              onClick={increment}
            >
              <Plus size={20} />
            </button>
          </div>
          <button className="btn bg-green-600 hover:bg-green-700 text-white p-3 rounded-full">
            <ShoppingBagOpen size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
