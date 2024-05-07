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
  Bell,
} from "@phosphor-icons/react";
import Logo from "./Logo";
import Bull from "./Bull";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { set } from "../redux/reducers/userSlice";
import { useEffect } from "react";
import { setBasket } from "../redux/reducers/basketSlice";

const Header = () => {
  const [notifications, setNotifications] = useState([]);
  const user = useSelector((state) => state.user);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const dispatch = useDispatch();
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];

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

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/notifications/user`, {
          withCredentials: true,
        });
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
    dispatch(setBasket(storedBasket));
  }, []);

  const sendNotificationAccept = () => {
    if (notifications.length === 0) {
      console.log("Aucune notification à envoyer.");
      return;
    }
    notifications.forEach((notification) => {
      if (notification.sender && notification.sender.id) {
        const data = {
          recipientId: notification.sender.id, // Utilisation de owner.id comme destinataire
          message:
            "Votre demande a été acceptée par : " + notification.firstname,
        };

        axios
          .post(`${BASE_URL}/notifications/send`, data, {
            withCredentials: true,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Erreur lors de l'envoi de la notification :", error);
          });
      } else {
        console.warn(
          "Propriété 'owner.id' manquante dans la notification :", // Ajustement du message d'avertissement
          notification
        );
      }
    });
  };

  const sendNotificationReject = () => {
    if (notifications.length === 0) {
      console.log("Aucune notification à envoyer.");
      return;
    }
    notifications.forEach((notification) => {
      if (notification.sender && notification.sender.id) {
        const data = {
          recipientId: notification.sender.id,
          message:
            "Votre demande a été refusée par : " + notification.sender.username,
        };

        axios
          .post(`${BASE_URL}/notifications/send`, data, {
            withCredentials: true,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Erreur lors de l'envoi de la notification :", error);
          });
      } else {
        console.warn(
          "Propriété 'owner.id' manquante dans la notification :", // Ajustement du message d'avertissement
          notification
        );
      }
    });
  };
  const basket = useSelector((state) => state.basket);

  const total = basket.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const formattedTotal = total.toLocaleString("fr-FR");

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

        <div className="flex gap-3 scroll-smooth">
          {user && (
            <button>
              <div className="dropdown dropdown-bottom w-full flex justify-end">
                <div tabIndex={0} className="btn btn-ghost rounded-full">
                  <Bell size={32} />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-80 mt-3 max-h-80 overflow-y-auto" // Ajoutez une classe de hauteur maximale et activez le défilement
                >
                  {Array.isArray(notifications) && notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <li key={notification.id} className="mb-3">
                        {" "}
                        <div
                          id="toast-message-cta"
                          className="w-full max-w-xs p-4 bg-white rounded-lg shadow "
                          role="alert"
                        >
                          <div className="flex items-start">
                            <div className="ms-3 text-sm font-normal ">
                              <span className="mb-1 text-sm font-semibold text-black">
                                {notification.title}
                              </span>
                              <div className="mb-2 text-sm font-normal text-gray-900">
                                {notification.message}
                              </div>
                              {user && user.role !== "SUPERMARKET" && (
                                <div>
                                  <button
                                    href="#"
                                    onClick={sendNotificationAccept}
                                    className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-green-600 rounded-lg"
                                  >
                                    Accepter
                                  </button>
                                  <button
                                    href="#"
                                    onClick={sendNotificationReject}
                                    className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-red-600 rounded-lg m-2"
                                  >
                                    Refuser
                                  </button>
                                </div>
                              )}
                            </div>
                            <button
                              type="button"
                              className="ms-auto -mx-1.5 -my-1.5 justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-black"
                              data-dismiss-target="#toast-message-cta"
                              aria-label="Close"
                              onClick={() => {
                                const toastMessage =
                                  document.getElementById("toast-message-cta");
                                toastMessage.remove();
                              }}
                            >
                              <span className="sr-only">Close</span>
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li>Aucune notification</li>
                  )}
                </ul>
              </div>
            </button>
          )}

          {user && user.role !== "FARMER" && (
            <button
              className="btn btn-ghost hover:bg-gray-100 flex items-center gap-3"
              onClick={openBasketModal}
            >
              <ShoppingBagOpen size={32} />
              <div>
                <div>Mon Panier</div>
                <div className="text-orange-500 text-start mt-2">
                  {formattedTotal} Ar
                </div>
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
