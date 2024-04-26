import { useState } from "react";
import { useEffect } from "react";
import "../assets/css/StyleModal.css";
import axios from "axios";

const formatDate = (date) => {
  const d = new Date(date);
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
const ModalProduit = ({ isOpen, onClose }) => {
  const [isSending, setIsSending] = useState(false);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  const [formulaire, setFormulaire] = useState({
    categorie: "",
    nom: "",
    prix: "",
    quantite: "",
    publication: formatDate(new Date()),
    date: null,
    image: null,
  });
  const [errors, setErrors] = useState({
    categorie: "",
    nom: "",
    prix: "",
    quantite: "",
    date: null,
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (formulaire.categorie === "") {
      newErrors.categorie = "Veuillez choisir une catégorie.";
    }

    if (formulaire.nom === "") {
      newErrors.nom = "Veuillez choisir un produit.";
    }

    if (formulaire.prix === "") {
      newErrors.prix = "Veuillez entrer un prix.";
    } else if (isNaN(parseFloat(formulaire.prix)) || formulaire.prix <= 0) {
      newErrors.prix = "Veuillez entrer un prix valide.";
    }

    if (formulaire.quantite === "") {
      newErrors.quantite = "Veuillez entrer une quantité.";
    } else if (
      isNaN(parseFloat(formulaire.quantite)) ||
      formulaire.quantite <= 0
    ) {
      newErrors.quantite = "Veuillez entrer une quantité valide.";
    }

    if (!formulaire.image) {
      newErrors.image = "Veuillez choisir une image.";
    }

    if (!formulaire.date) {
      newErrors.date = "Veuillez entrer une date valide.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSending(true);
      console.log(formulaire);
      axios
        .post(`${BASE_URL}/user/publication`, {
          categorie: formulaire.categorie,
          nom: formulaire.nom,
          prix: formulaire.prix,
          quantite: formulaire.quantite,
          publication: formatDate(new Date()),
          date: formulaire.date,
          image: formulaire.image,
        })
        .then(() => {
          console.log("ok");
          setIsSending(false);
          setFormulaire({
            categorie: "",
            nom: "",
            prix: "",
            quantite: "",
            publication: formatDate(new Date()),
            date: null,
            image: null,
          });
          onClose();
        })
        .catch(() => {
          setIsSending(false);
        });
    }
  };

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    const updatedFormulaire = { ...formulaire };

    if (name === "image" && files && files.length > 0) {
      updatedFormulaire.image = files[0];
    } else if (name === "date") {
      updatedFormulaire[name] = formatDate(value);
    } else {
      updatedFormulaire[name] = value;
    }

    setFormulaire(updatedFormulaire);
  };

  return (
    <>
      {isOpen && (
        <div
          id="modal-produit"
          tabIndex="-1"
          aria-hidden="true"
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
                      htmlFor="categorie"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Catégorie
                    </label>
                    <select
                      id="categorie"
                      name="categorie"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      value={formulaire.categorie}
                      onChange={handleChange}
                    >
                      <option value="">Sélectionner une catégorie</option>
                      <option value="1">Fruits</option>
                      <option value="2">Légumes</option>
                    </select>
                    {<span className="text-error">{errors.categorie}</span>}
                  </div>

                  <div className="col-span-1">
                    <label
                      htmlFor="nom"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Nom produit
                    </label>
                    <select
                      id="nom"
                      name="nom"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      disabled={formulaire.categorie === ""}
                      value={formulaire.nom}
                    >
                      <option value="">Sélectionner un produit</option>
                      {(formulaire.categorie === "1" &&
                        Object.keys(fruits).map((key) => (
                          <option key={key} value={fruits[key]}>
                            {fruits[key]}
                          </option>
                        ))) ||
                        (formulaire.categorie === "2" &&
                          Object.keys(legumes).map((key) => (
                            <option key={key} value={legumes[key]}>
                              {legumes[key]}
                            </option>
                          )))}
                    </select>
                    {<span className="text-error">{errors.nom}</span>}
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="10000ar"
                    />
                    {<span className="text-error">{errors.prix}</span>}
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="quantite"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Quantité
                    </label>
                    <div className="flex">
                      <input
                        type="number"
                        value={formulaire.quantite}
                        name="quantite"
                        id="quantite"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Entrez la quantité"
                      />

                      <select
                        value={formulaire.quantite}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-primary-600 focus:border-primary-600 p-2.5"
                      >
                        <option value="kg">kg</option>
                        <option value="tonne">tonne</option>
                      </select>
                    </div>
                    {<span className="text-error">{errors.quantite}</span>}
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Choisir une image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      className="hidden"
                      onChange={handleChange}
                    />
                    <div className="col-span-2 h-[15rem] w-[26.5rem] relative">
                      <label
                        htmlFor="image"
                        className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 cursor-pointer"
                      >
                        {formulaire.image ? (
                          <img
                            src={URL.createObjectURL(formulaire.image)}
                            alt="Aperçu de l'image"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <svg
                            className="w-12 h-12 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            ></path>
                          </svg>
                        )}
                      </label>
                    </div>

                    {<span className="text-error">{errors.image}</span>}
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 mb-3">
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Date de récolte
                  </label>
                  <input
                    type="date"
                    value={formulaire.date}
                    onChange={handleChange}
                    name="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  <span className="text-error">{errors.date}</span>
                </div>

                <button
                  type="submit"
                  className="text-white inline-flex justify-center bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
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

export default ModalProduit;
