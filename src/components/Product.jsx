import React, { useState } from "react";
import { Check, HandArrowUp, ShoppingBagOpen, DotsThreeOutline } from "@phosphor-icons/react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/reducers/basketSlice";

const Product = ({
  image,
  category,
  type,
  title,
  quantity,
  price,
  promotion,
}) => {
  const user = useSelector((state) => state.user);
  const [isAddedToBasket, setIsAddedToBasket] = useState(false);
  const [showOptions, setShowOptions] = useState(false); // État pour afficher la liste des options
  const dispatch = useDispatch();
  
  const addToBasket = () => {
    dispatch(add({ image, category, type, title, quantity, price, promotion }));
    setIsAddedToBasket(true);
  };

  const handleOptionsClick = () => {
    setShowOptions(!showOptions); // Inverse l'état d'affichage des options
  };

  return (
    <div className="w-80 rounded-xl shadow-xl py-10 bg-white">
      <div className="relative text-white text-sm">
        {promotion !== "" && type === "supply" && (
          <div className="bg-orange-500 w-fit px-3 promotion">
            -{promotion}%
          </div>
        )}
        {user && (
          <div
            className={`absolute top-0 right-0 px-3 rounded-s-badge w-48 ${
              type === "supply" ? "bg-green-600" : "bg-orange-500"
            }`}
          >
            {type === "supply" ? (
              <span className="uppercase">
                Offre {user.role === "FARMER" && "concurrente"}{" "}
              </span>
            ) : (
              <span className="uppercase">
                Demande {user.role === "SUPERMARKET" && "concurrente"}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <img src={image} alt={title} className="w-52" />
      </div>
      <div className="px-5 mt-3">
        <h4 className="text-gray-400 uppercase">{category}</h4>
        <h2 className="font-semibold text-xl">{title}</h2>
        <h3>
          Quantités:{" "}
          <span className="text-orange-500 text-xl font-semibold">
            {quantity}
          </span>
          kg
        </h3>
        <p className="my-5">
          <span className="text-orange-500 text-2xl font-bold">
            {"$" + price}
          </span>
          <span>/kg</span>
        </p>
        {((user?.role === "FARMER" && type !== "supply") ||
          (user?.role === "SUPERMARKET" && type !== "demand")) && (
          <div className="flex justify-end">
            <button className="btn bg-green-600 hover:bg-green-700 text-white p-3 rounded-badge" onClick={handleOptionsClick}>
              <DotsThreeOutline size={20} />
            </button>
            <button className="btn bg-green-600 hover:bg-green-700 text-white p-3 rounded-badge" onClick={addToBasket}>
              {!user || user?.role === "SUPERMARKET" ? (
                isAddedToBasket?<Check size={20} />:<ShoppingBagOpen size={20} />
              ) : (
                <>
                  <HandArrowUp size={20} />
                  PROPOSER
                </>
              )}
            </button>
          </div>
        )}
        {showOptions && (
          <div className="flex justify-end mt-3">
            <button className="btn bg-red-600 hover:bg-red-700 text-white p-3 rounded-badge">
              SUPPRIMER
            </button>
            <button className="btn bg-yellow-600 hover:bg-yellow-700 text-white p-3 rounded-badge">
              MODIFIER
            </button>
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-badge">
              EVALUER
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
