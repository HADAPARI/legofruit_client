import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "@phosphor-icons/react";
import PaymentModal from "./PaymentModal";
import { useSelector } from "react-redux";
import { decreaseQuantity, deleteProduct } from "../redux/reducers/basketSlice";
import { useDispatch } from "react-redux";
import { Trash } from "@phosphor-icons/react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export default function BasketModal({ onClose }) {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id: id }));
  };

  const handleDecrease = (index) => {
    dispatch(decreaseQuantity({ index: index }));
  };

  const sendNotification = () => {
    basket.map((product) => {
      const data = {
        recipientId: product.owner.id,
        message:
          "Bonjour, votre produit a été intéressé par : " +
          product.owner.username,
      };

      axios
        .post(`${BASE_URL}/notifications/send`, data, { withCredentials: true })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error sending notification:", error);
        });
    });
  };

  const totalPrice = basket.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const formattedTotal = totalPrice.toLocaleString("fr-FR");

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md pt-28">
                  <div className="flex h-full flex-col bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Panier d’achat
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={onClose}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">
                              Fermer le groupe de fonctions
                            </span>
                            <X size={20} className="h-6 w-6" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {basket.map((product, index) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex  flex-col justify-center items-center rounded-md border border-gray-200">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full"
                                  />
                                </div>

                                <div className="flex flex-1 flex-col ml-4">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{product.title}</h3>
                                      <p className="ml-4">
                                        Ar {product.price}/kg
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.category == 1
                                        ? "FRUIT"
                                        : "LEGUME"}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Quantité: {product.quantity}
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() => handleDecrease(index)}
                                      >
                                        -
                                      </button>
                                      <button
                                        type="button"
                                        className="font-medium text-red-600 hover:text-red-500 ml-2"
                                        onClick={() => handleDelete(product.id)}
                                      >
                                        <Trash size={32} />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Sous-total</p>
                        <p>{formattedTotal} Ar</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Les frais d’expédition et les taxes sont calculés à la
                        caisse.
                      </p>
                      <div className="mt-6">
                        <button
                          onClick={sendNotification}
                          className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                        >
                          <i className="mdi mdi-lock-outline mr-1"></i> Passer à
                          la caisse
                        </button>
                      </div>
                      {showPaymentModal && (
                        <PaymentModal onClose={handleClosePaymentModal} />
                      )}
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          ou{" "}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={onClose}
                          >
                            continuer mes achats
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
