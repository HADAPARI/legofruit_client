import { useState } from "react";
import { useEffect } from "react";
import "../assets/css/StyleModal.css";
import axios from "axios";
import FirebaseImg from "../firebaseimage/FirebaseImg";

const formatDate = (daterecolte) => {
  const d = new Date(daterecolte);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;

  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }

  return [d.getFullYear(), month, day].join("-");
};

const fruits = {
  1: "Banane",
  2: "Pomme",
  3: "Orange",
  4: "Fraise",
  5: "Kiwi",
};

const legumes = {
  1: "Pomme de terre",
  2: "Carotte",
  3: "Tomate",
  4: "Laitue",
  5: "Épinard",
};

// eslint-disable-next-line react/prop-types
const ModalPub = ({ isOpen, onClose }) => {
  const [formulaire, setFormulaire] = useState({
    category: "",
    name: "",
    prix: "",
    quantity: "",
    datepublication: formatDate(new Date()),
    daterecolte: null,
    image: null,
    userid_id: "",
  });
  const [errors, setErrors] = useState({
    category: "",
    name: "",
    prix: "",
    quantity: "",
    datepublication: formatDate(new Date()),
    daterecolte: null,
    image: null,
    userid_id: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (formulaire.category === "") {
      newErrors.category = "Veuillez choisir une catégorie.";
    }

    if (formulaire.name === "") {
      newErrors.name = "Veuillez choisir un produit.";
    }

    if (formulaire.prix === "") {
      newErrors.prix = "Veuillez entrer un prix.";
    } else if (isNaN(parseFloat(formulaire.prix)) || formulaire.prix <= 0) {
      newErrors.prix = "Veuillez entrer un prix valide.";
    }

    if (formulaire.quantity === "") {
      newErrors.quantity = "Veuillez entrer une quantité.";
    } else if (
      isNaN(parseFloat(formulaire.quantity)) ||
      formulaire.quantity <= 0
    ) {
      newErrors.quantity = "Veuillez entrer une quantité valide.";
    }

    if (!formulaire.image) {
      newErrors.image = "Veuillez choisir une image.";
    }

    if (!formulaire.daterecolte) {
      newErrors.daterecolte = "Veuillez entrer une date valide.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        console.log(formulaire);
        const response = await axios.post(
          "http://localhost:9000/produit/ajout/e49e792f-3674-43aa-9082-3406900e5a8f",
          {
            category: formulaire.category,
            name: formulaire.name,
            prix: formulaire.prix,
            quantity: formulaire.quantity,
            datepublication: formatDate(new Date()),
            daterecolte: formulaire.daterecolte,
            image: formulaire.image,
            userid_id: "e49e792f-3674-43aa-9082-3406900e5a8f",
          }
        );
        console.log(response);
        setFormulaire({
          category: "",
          name: "",
          prix: "",
          quantity: "",
          daterecolte: null,
          image: null,
          userid_id: "",
        });
        onClose();
      } catch (error) {
        console.error(error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageSelect = (imageUrl) => {
    setFormulaire((prevFormulaire) => ({
      ...prevFormulaire,
      image: imageUrl,
    }));
  };

  return (
    <>
      {isOpen && (
        <div
          id="modal-produit"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-500 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-lg max-h-full overflow-y-auto">
            <div className="relative bg-white rounded-lg shadow max-w-lg ">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <h3 className="text-lg font-semibold text-gray-900">
                  Créer un nouveau produit
                </h3>
                <button
                  onClick={onClose}
                  type="button"
                  data-modal-toggle="crud-modal"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
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
                  <span className="sr-only">Fermer le modal</span>
                </button>
              </div>
              <form
                className="p-4 md:p-5 scroll-smooth "
                onSubmit={handleSubmit}
              >
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Catégorie
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="select select-bordered"
                      value={formulaire.category}
                      onChange={handleChange}
                    >
                      <option value="">Sélectionner une catégorie</option>
                      <option value="1">Fruits</option>
                      <option value="2">Légumes</option>
                    </select>
                    {<span className="text-error">{errors.category}</span>}
                  </div>

                  <div className="col-span-1">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Nom produit
                    </label>
                    <select
                      id="name"
                      name="name"
                      onChange={handleChange}
                      className="select select-bordered"
                      disabled={formulaire.category === ""}
                      value={formulaire.name}
                    >
                      <option value="">Sélectionner un produit</option>
                      {(formulaire.category === "1" &&
                        Object.keys(fruits).map((key) => (
                          <option key={key} value={fruits[key]}>
                            {fruits[key]}
                          </option>
                        ))) ||
                        (formulaire.category === "2" &&
                          Object.keys(legumes).map((key) => (
                            <option key={key} value={legumes[key]}>
                              {legumes[key]}
                            </option>
                          )))}
                    </select>
                    {<span className="text-error">{errors.name}</span>}
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="prix"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Prix
                    </label>
                    <input
                      type="number"
                      value={formulaire.prix}
                      onChange={handleChange}
                      name="prix"
                      id="prix"
                      className="input input-bordered"
                      placeholder="10000ar"
                    />
                    {<span className="text-error">{errors.prix}</span>}
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="quantity"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Quantité
                    </label>
                    <div className="join">
                      <input
                        type="number"
                        value={formulaire.quantity}
                        name="quantity"
                        id="quantity"
                        onChange={handleChange}
                        className="input input-bordered w-full join-item"
                        placeholder="Entrez la quantité"
                      />

                      <select
                        value={formulaire.quantity}
                        onChange={handleChange}
                        className="select select-bordered join-item"
                      >
                        <option value="kg">kg</option>
                        <option value="tonne">tonne</option>
                      </select>
                    </div>
                    {<span className="text-error">{errors.quantity}</span>}
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Choisir une image
                    </label>
                    <FirebaseImg onImageSelect={handleImageSelect} />

                    {<span className="text-error">{errors.image}</span>}
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 mb-3">
                  <label
                    htmlFor="daterecolte"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Date de récolte
                  </label>
                  <input
                    type="date"
                    value={formulaire.daterecolte}
                    onChange={handleChange}
                    name="daterecolte"
                    id="daterecolte"
                    className="input input-bordered w-full"
                  />
                  <span className="text-error">{errors.daterecolte}</span>
                </div>

                <button
                  type="submit"
                  className="btn w-full bg-violet-700 text-white hover:bg-violet-800 "
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Ajouter un nouveau produit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPub;
