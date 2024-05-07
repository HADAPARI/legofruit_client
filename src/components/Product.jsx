import { useState, useEffect } from "react";
import {
  Check,
  DotsThreeVertical,
  HandArrowUp,
  PencilSimple,
  ShoppingBagOpen,
  TrashSimple,
} from "@phosphor-icons/react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/reducers/basketSlice";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Product = ({
  id,
  owner,
  image,
  category,
  type,
  title,
  quantity,
  price,
  promotion,
}) => {
  const user = useSelector((state) => state.user);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isMine, setIsMine] = useState(false);
  const [isAddedToBasket, setIsAddedToBasket] = useState(false);
  const dispatch = useDispatch();

  const addToBasket = () => {
    // Ajouter le produit au panier dans le state Redux
    dispatch(
      add({
        id,
        owner,
        image,
        category,
        type,
        title,
        quantity,
        price,
        promotion,
      })
    );
    setIsAddedToBasket(true);

    // Récupérer le panier depuis le localStorage
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];

    // Ajouter le nouveau produit au panier stocké localement
    const updatedBasket = [
      ...storedBasket,
      {
        id,
        owner,
        image,
        category,
        type,
        title,
        quantity,
        price,
        promotion,
      },
    ];

    // Mettre à jour le panier dans le localStorage
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`${BASE_URL}/product/ismine/${id}`, { withCredentials: true })
        .then((response) => {
          setIsMine(response.data);
          console.log(response.data);
        })
        .catch(() => {
          console.log("Pas ok");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-80 rounded-xl shadow-xl pb-10 bg-white">
      {isMine && (
        <div className="dropdown dropdown-bottom w-full flex justify-end pt-1 pe-1">
          <div
            tabIndex={0}
            className="hover:bg-gray-100 size-7 flex justify-center items-center cursor-pointer rounded-full"
          >
            <DotsThreeVertical size={18} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-52"
          >
            <li>
              <a className="py-3">
                <PencilSimple size={18} /> Modifier
              </a>
            </li>
            <li>
              <a className="py-3 text-error">
                <TrashSimple size={18} /> Supprimer
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="relative text-white text-sm mt-5 pt-5">
        {promotion !== "" && promotion !== 0 && type === "supply" && (
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
                {isMine && "Mon"} Offre{" "}
                {!isMine && user.role === "FARMER" && "concurrente"}
              </span>
            ) : (
              <span className="uppercase">
                {isMine && "Ma"} Demande{" "}
                {!isMine && user.role === "SUPERMARKET" && "concurrente"}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <img src={image} alt={title} className="w-52" />
      </div>
      <div className="px-5 mt-3">
        <h4 className="text-gray-400 uppercase">
          {category == 1 ? "FRUIT" : "LEGUME"}
        </h4>
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
            {"Ar " + price}
          </span>
          <span>/kg</span>
        </p>
        {((!isMine && user?.role === "FARMER" && type != "supply") ||
          (user?.role === "SUPERMARKET" && type != "demand")) && (
          <div className="flex justify-end">
            <button
              className="btn bg-green-600 hover:bg-green-700 text-white p-3 rounded-badge"
              onClick={addToBasket}
            >
              {!user || user?.role === "SUPERMARKET" ? (
                isAddedToBasket ? (
                  <Check size={20} />
                ) : (
                  <>
                    <ShoppingBagOpen size={20} />
                    AJOUTER
                  </>
                )
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
