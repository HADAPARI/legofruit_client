import { HandArrowUp, ShoppingBagOpen } from "@phosphor-icons/react";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const Product = ({image,category,type,title,quantity,price,promotion,
}) => {
  const user = useSelector((state) => state.user);

  return (
    <div className="w-80 rounded-xl shadow-xl py-10 bg-white">
      <div className="relative text-white text-sm">
        {promotion != "" && type == "supply" && (
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
        {((user?.role === "FARMER" && type != "supply") ||
          (user?.role === "SUPERMARKET" && type != "demand")) && (
          <div className="flex justify-end">
            <button className="btn bg-green-600 hover:bg-green-700 text-white p-3 rounded-badge">
              {!user || user?.role === "SUPERMARKET" ? (
                <ShoppingBagOpen size={20} />
              ) : (
                <>
                  <HandArrowUp size={20} />
                  PROPOSER
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
