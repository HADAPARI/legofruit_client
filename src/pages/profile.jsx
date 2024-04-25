import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "../assets/img/user.png";
import DeleteAccount from "../components/DeleteAccount";
import { Star } from "@phosphor-icons/react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    region: "",
    role: "",
    address: "",
  });

  const [editingData, setEditingData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    region: "",
    role: "",
    address: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/user/profile/828b841b-a708-4675-9ae5-16f5359226ff"
        );
        console.log(response);
        if (response.status === 200) {
          setProfileData(response.data);
        } else {
          throw new Error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfileData();
  }, []);

  const [isEditable, setIsEditable] = useState(false);
  const toggleEdit = () => {
    setIsEditable(!isEditable);
    if (!isEditable) {
      setEditingData(profileData);
    } else {
      setProfileData(editingData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="px-4 lg:px-60">
      <b>
        <h1 className="text-4xl pt-5 pb-5 ">My profile</h1>
      </b>

      <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4 pb-10">
        <div className="flex items-baseline space-x-2 mt-4">
          <div className="relative inline-block">
            <img
              className="inline-block h-36 w-36 rounded-full ring-2 ring-white"
              src={Logo}
              alt=""
            />
            <label htmlFor="fileInput">
              <button className="absolute bottom-2 right-2  align-middle py-1 px-1 text-white font-bold rounded bg-gray-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </label>
          </div>

          <div className="flex  ps-3 items-center pt-0">
            <div className=" ">
              <div>
                <b>
                  <p className="text-gray-600">
                    {profileData.firstname} {profileData.lastname}
                  </p>
                </b>
              </div>
              <div>
                <p className="text-gray-600">{profileData.role}</p>
              </div>
              <div>
                <p className="text-gray-600">
                  Note:<span className="ml-2 text-orange-500">4.5</span>
                  <span>
                    <div className="flex items-center space-x-1 stars-container">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          size={20}
                          weight="fill"
                          className="text-orange-500"
                        />
                      ))}
                    </div>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="" style={{ marginTop: "60px" }}>
          <button
            onClick={toggleEdit}
            className="btn btn-outline w-36 border-orange-500 bg-orange-500 hover:bg-orange-600 hover:border-orange-600 text-white join-item"
          >
            {isEditable ? "Save" : "Edit"}
          </button>
        </div>
      </div>

      <div className="border rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Information personnelle</h2>
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-2">
          <div className="overflow-hidden">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Nom
            </label>
            <input
              value={isEditable ? editingData.firstname : profileData.firstname}
              type="text"
              name="firstname"
              id="first-name"
              style={{ width: "450px" }}
              autoComplete="given-name"
              className={`block lg:w-96 p-4 h-12 rounded-md py-1.5  border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600 ${
                isEditable ? "" : "border-white font-bold "
              }`}
              disabled={!isEditable}
              onChange={handleChange}
            />
          </div>

          <div className="overflow-hidden ms-0">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Prénom
            </label>
            <div className="">
              <input
                value={isEditable ? editingData.lastname : profileData.lastname}
                type="text"
                name="lastname"
                id="last-name"
                style={{ width: "450px" }}
                autoComplete="given-name"
                className={`block lg:w-96 p-4 h-12 rounded-md py-1.5  border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600 ${
                  isEditable ? "" : "border-white font-bold "
                }`}
                disabled={!isEditable}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <br />
        {/* Nouvelle section pour les deux champs d'entrée en bas */}
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-2">
          <div className="overflow-hidden">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Adresse email
            </label>
            <div className="mt-2">
              <input
                value={isEditable ? editingData.email : profileData.email}
                type="text"
                name="email"
                id="email"
                style={{ width: "450px" }}
                autoComplete="given-name"
                className={`block lg:w-96 p-4 h-12 rounded-md py-1.5  border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600 ${
                  isEditable ? "" : "border-white font-bold "
                }`}
                disabled={!isEditable}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="overflow-hidden ms-0">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Phone
            </label>
            <div className="mt-2">
              <input
                value={isEditable ? editingData.phone : profileData.phone}
                type="text"
                name="phone"
                id="phone"
                style={{ width: "450px" }}
                autoComplete="given-name"
                className={`block lg:w-96 p-4 h-12 rounded-md py-1.5  border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600 ${
                  isEditable ? "" : "border-white font-bold "
                }`}
                disabled={!isEditable}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Deuxième section de rectangle */}
      <div className="border rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Localisation</h2>
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-2">
          <div className="overflow-hidden">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Pays
            </label>
            <div className="mt-2">
              <input
                value={isEditable ? editingData.country : profileData.country}
                type="text"
                name="country"
                id="country"
                style={{ width: "450px" }}
                autoComplete="given-name"
                className={`block lg:w-96 p-4 h-12 rounded-md py-1.5  border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600 ${
                  isEditable ? "" : "border-white font-bold "
                }`}
                disabled={!isEditable}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="overflow-hidden ms-0">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Région
            </label>
            <div className="mt-2">
              <input
                value={isEditable ? editingData.region : profileData.region}
                type="text"
                name="region"
                id="region"
                style={{ width: "450px" }}
                autoComplete="given-name"
                className={`block lg:w-96 p-4 h-12 rounded-md py-1.5  border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600 ${
                  isEditable ? "" : "border-white font-bold "
                }`}
                disabled={!isEditable}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-2">
          <div className="overflow-hidden">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Adresse
            </label>
            <div className="mt-2">
              <input
                value={isEditable ? editingData.address : profileData.address}
                type="text"
                name="address"
                id="address"
                style={{ width: "450px" }}
                autoComplete="given-name"
                className={`block lg:w-96 p-4 h-12 rounded-md py-1.5  border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600 ${
                  isEditable ? "" : "border-white font-bold "
                }`}
                disabled={!isEditable}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <DeleteAccount />
    </div>
  );
};

export default Profile;
