import React from "react";
import Home from "../assets/images/home.jpg"
import { useState } from "react";

const Profile = () => {

    const [isEditable, setIsEditable] = useState(false);
    const toggleEdit = () => {
          setIsEditable(!isEditable);
    };


    return (
      <div className="px-4 lg:px-60">
        <b>
          <h1 className="text-4xl pt-10 pb-16 ">Profile</h1>
        </b>
  
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4 pb-10">
          <div className="flex items-center space-x-2 mt-4">
            <img
              className="inline-block h-36 w-36 rounded-full ring-2 ring-white"
              src={Home}
              alt=""
            />
            <div className="flex flex-col ps-3">
              <div className="flex items-center ">
                <b>
                  <span className="text-gray-600">Note:</span>
                </b>
                <span className="ml-2 text-yellow-400">4.5</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.57 2.156a.75.75 0 01.946.446L10 8.437l3.482-5.835a.75.75 0 111.292.765l-4.583 7.67 4.994 5.993a.75.75 0 01-.46 1.263l-6.25.774-2.478 5.25a.75.75 0 01-1.376-.658l3.234-6.857-4.163-5.002a.75.75 0 01.236-.99l5.25-4.166z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
  
          <button
              onClick={toggleEdit}
              className="text-right rounded-md
              bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6
              text-white shadow-sm
              hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-violet-600">{isEditable ? "Save" : "Edit"}
          </button>
        </div>
  
        <div className="border rounded-lg p-4 mb-8">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-2">
            <div className="overflow-hidden">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
              <div className="mt-2">
                <input                  
                  type="text"
                  name="first-name"
                  id="first-name"
                  style={{ width: "450px" }}
                  autoComplete="given-name"
                  disabled={!isEditable}
                  className="block lg:w-96 p-4 h-12 rounded-md py-1.5 border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600"/>
              </div>
            </div>
  
            <div className="overflow-hidden ms-0">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  style={{ width: "450px" }}
                  disabled={!isEditable}
                  className="block lg:w-96 p-4 h-12 rounded-md py-1.5 border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600"/>
              </div>
            </div>
          </div>
          <br />
          {/* Nouvelle section pour les deux champs d'entrée en bas */}
          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-2">
            <div className="overflow-hidden">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  style={{ width: "450px" }}
                  autoComplete="email"
                  disabled={!isEditable}
                  className="block lg:w-96 p-4 h-12 rounded-md py-1.5 border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600"/>
              </div>
            </div>
  
            <div className="overflow-hidden ms-0">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  style={{ width: "450px" }}
                  disabled={!isEditable}
                  className="block lg:w-96 p-4 h-12 rounded-md py-1.5 border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600"/>
              </div>
            </div>
          </div>
        </div>
  
        {/* Deuxième section de rectangle */}
        <div className="border rounded-lg p-4 mb-8">
          <h2 className="text-lg font-semibold mb-4">Adress</h2>
          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-2">
            <div className="overflow-hidden">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  style={{ width: "450px" }}
                  autoComplete="email"
                  disabled={!isEditable}
                  className="block lg:w-96 p-4 h-12 rounded-md py-1.5 border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600"/>
              </div>
            </div>
  
            <div className="overflow-hidden ms-0">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Region</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  style={{ width: "450px" }}
                  disabled={!isEditable}
                  className="block lg:w-96 p-4 h-12 rounded-md py-1.5 border-2 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-600"/>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  };
  
  export default Profile;  