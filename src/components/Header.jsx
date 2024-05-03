// Header.js
import { Link } from "react-router-dom";
import { useState } from "react";
import BasketModal from "./BasketModal";
import {
  CaretDown,
  Carrot,
  Cherries,
  CirclesFour,
  Headphones,
  MagnifyingGlass,
  MapPin,
  ShoppingBagOpen,
  SignOut,
  User,
} from "@phosphor-icons/react";
import Logo from "./Logo";
import Bull from "./Bull";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { set } from "../redux/reducers/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const dispatch = useDispatch();
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const openBasketModal = () => {
    setIsBasketOpen(true);
  };

  const signOut = () => {
    axios
      .get(`${BASE_URL}/user/signout`, { withCredentials: true })
      .then(() => {
        dispatch(set(null));
      })
      .catch(() => {
        console.log("Pas OK!");
      });
  };

  return (
    <div className="px-20 py-5 shadow-lg sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Livré à </span>
          <MapPin size={20} />
          {user ? (
            <span>
              {user.region}, {user.country}
            </span>
          ) : (
            <span>Région, Pays</span>
          )}
          <label className="input input-bordered flex items-center gap-2 ms-3">
            <input
              type="text"
              className="w-80"
              placeholder="Vous cherchez quoi?"
            />
            <MagnifyingGlass size={20} />
          </label>
        </div>

        <div className="flex gap-3">
          {user && user.role !== "FARMER" && (
            <button
              className="btn btn-ghost hover:bg-gray-100 flex items-center gap-3"
              onClick={openBasketModal}
            >
              <ShoppingBagOpen size={32} />
              <div>
                <div>Mon Panier</div>
                <div className="text-orange-500 text-start mt-2">$0.00</div>
              </div>
            </button>
          )}

          {!user ? (
            <div className="join">
              <Link
                to="/signin"
                className="btn btn-outline w-32 border-orange-500 hover:bg-violet-800 hover:border-violet-800 hover:text-white join-item"
              >
                Se connecter
              </Link>
              <Link
                to="/signup"
                className="btn bg-orange-500 border border-orange-500 text-white hover:bg-orange-600 w-32 join-item"
              >
                S&apos;inscrire
              </Link>
            </div>
          ) : (
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="text-gray-400">{user.firstname}</div>
                  <CaretDown size={12} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="py-3">
                    <User size={20} /> Profile
                  </Link>
                </li>
                <li>
                  <div className="py-3" onClick={signOut}>
                    <SignOut size={20} />
                    Se déconnecter
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {!user && (
        <div className="mt-3 flex justify-between">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <CirclesFour size={30} className="text-green-600" />
              <span>Toutes les catégories</span>
              <CaretDown size={12} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/" className="py-3">
                  <Cherries size={20} className="text-red-600" /> Fruits
                </Link>
              </li>
              <li>
                <Link to="/" className="py-3">
                  <Carrot size={20} className="text-orange-500" />
                  Legumes
                </Link>
              </li>
            </ul>
          </div>
          <nav className="flex items-center">
            <ul className="flex gap-7 hover:*:text-orange-500 *:font-semibold">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/bestsales">
                  <Bull text="Chaud" type="error">
                    Meilleures ventes
                  </Bull>
                </Link>
              </li>
              <li>
                <Link to="/promotion">Promotion</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-5">
            <div className="flex items-center gap-3 font-semibold">
              <Headphones size={20} className="text-orange-500" />
              (+261) 34 63 465 65
            </div>
          </div>
        </div>
      )}

      {isBasketOpen && <BasketModal onClose={() => setIsBasketOpen(false)} />}
    </div>
  );
};

export default Header;
