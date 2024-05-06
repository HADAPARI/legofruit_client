import { useState } from "react";
import { useEffect } from "react";
import "../assets/css/StyleModal.css";
import axios from "axios";
import FirebaseImg from "../firebaseimage/FirebaseImg";
import { useDispatch } from "react-redux";
import { add } from "../redux/reducers/productSlice";

const formatDate = (harvest) => {
  const d = new Date(harvest);
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
  1: "Abricot",
  2: "Ananas",
  3: "Avocat",
  4: "Banane",
  5: "Cerise",
  6: "Citron",
  7: "Datte",
  8: "Figue",
  9: "Fraisier",
  10: "Framboise",
  11: "Grenade",
  12: "Groseille",
  13: "Guava",
  14: "Kiwi",
  15: "Mangue",
  16: "Melon",
  17: "Myrtille",
  18: "Orange",
  19: "Papaye",
  20: "Pastèque",
  21: "Pêche",
  22: "Poire",
  23: "Pomme",
  24: "Prune",
  25: "Raisin",
  26: "Raisin de table",
  27: "Ramboutan",
  28: "Sapote",
  29: "Tamarin",
  30: "Tangerine",
};


const legumes = {
  1: "Artichaut",
  2: "Asperge",
  3: "Aubergine",
  4: "Betterave",
  5: "Brocoli",
  6: "Carotte",
  7: "Céleri",
  8: "Chou",
  9: "Concombre",
  10: "Courge",
  11: "Courgette",
  12: "Épinard",
  13: "Haricot",
  14: "Laitue",
  15: "Maïs",
  16: "Navet",
  17: "Oignon",
  18: "Panais",
  19: "Patate douce",
  20: "Persil",
  21: "Poireau",
  22: "Pois",
  23: "Poivron",
  24: "Pomme de terre",
  25: "Radis",
  26: "Rutabaga",
  27: "Tomate",
  28: "Topinambour",
  29: "Fenouil",
  30: "Chou-fleur",
};



// eslint-disable-next-line react/prop-types
const ModalPub = ({ isOpen, onClose }) => {
const dispatch = useDispatch();

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [formulaire, setFormulaire] = useState({
    category: "",
    title: "",
    price: "",
    quantity: "",
    harvest: null,
    image: null,
  });
  const [errors, setErrors] = useState({
    category: "",
    title: "",
    price: "",
    quantity: "",
    datepublication: formatDate(new Date()),
    harvest: null,
    image: null,
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

    if (formulaire.title === "") {
      newErrors.title = "Veuillez choisir un produit.";
    }

    if (formulaire.price === "") {
      newErrors.price = "Veuillez entrer un prix.";
    } else if (isNaN(parseFloat(formulaire.price)) || formulaire.price <= 0) {
      newErrors.price = "Veuillez entrer un prix valide.";
    }

    if (formulaire.quantity === "") {
      newErrors.quantity = "Veuillez entrer une quantité.";
    } else if (
      isNaN(parseFloat(formulaire.quantity)) ||
      formulaire.quantity <= 0
    ) {
      newErrors.quantity = "Veuillez entrer une quantité valide.";
    }

    if (formulaire.image && formulaire.image !== "") {
      if (!formulaire.harvest) {
        newErrors.harvest = "Veuillez entrer une date valide.";
      }
    } else {
      newErrors.image = "Veuillez choisir une image.";
    }
    if (!formulaire.harvest) {
      newErrors.harvest = "Veuillez entrer une date valide.";
    }
    setErrors(newErrors);
    console.log(formulaire);

    if (Object.keys(newErrors).length === 0) {
      try {
        await axios.post(
          `${BASE_URL}/product/add`,
          {
            category: formulaire.category,
            title: formulaire.title,
            price: formulaire.price,
            quantity: formulaire.quantity,
            datepublication: formatDate(new Date()),
            harvest: formulaire.harvest,
            image: formulaire.image,
          },
          { withCredentials: true }
        );

        dispatch(add(formulaire))
        setFormulaire({
          category: "",
          title: "",
          price: "",
          quantity: "",
          harvest: null,
          image: null,
        });

        
        onClose();
      } catch (error) {
        console.error(error);
      }
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
    <div className="fixed start-0 top-0 end-0 bottom-0 z-50 flex justify-center pt-5 bg-gray-500 bg-opacity-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow max-w-lg ">
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
        <form className="p-4 md:p-5 scroll-smooth " onSubmit={handleSubmit}>
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
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Titre
              </label>
              <select
                id="title"
                name="title"
                onChange={handleChange}
                className="select select-bordered w-full"
                disabled={formulaire.category === ""}
                value={formulaire.title}
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
              {<span className="text-error">{errors.title}</span>}
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Prix
              </label>
              <input
                type="number"
                value={formulaire.price}
                onChange={handleChange}
                name="price"
                id="price"
                className="input input-bordered"
                placeholder="10000ar"
              />
              {<span className="text-error">{errors.price}</span>}
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

            <div className="col-span-2">
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
              htmlFor="harvest"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Date de récolte
            </label>
            <input
              type="date"
              value={formulaire.harvest}
              onChange={handleChange}
              name="harvest"
              id="harvest"
              className="input input-bordered w-full"
            />
            <span className="text-error">{errors.harvest}</span>
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
  );
};

export default ModalPub;
