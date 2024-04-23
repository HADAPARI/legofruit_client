import React from "react";
import Home from "../assets/images/home.jpg"

const Profile = () => {

    return (
      <>
        <div className="conteneur">
            <div className="grid grid-cols-1 divide-y">
            <div className="bg-gray-200 py-4 h-50 ">
                   <h1 className="ml-10 text-left text-4xl font-bold">PROFILE</h1>
                </div>
                <div className="grid min-h-screen ">
                    <div className="bg-white py-4 h-200 ">
                        <div className="ml-20 grid grid-cols-2 divide-x">
                            <div className="grid grid-cols-1 divide-y">
                                <div>
                                    <img className="h-20" src={Home} alt="Profile"/>  
                                </div>  
                                <div>                      
                                    <h1 className="font-bold text-left text-1xl">Mahanitia</h1>
                                </div>
                            </div>                        
                        <div className="mr-20 mt-5 text-right">
                            <button type="submit" className="text-right rounded-md
                                bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6
                                text-white shadow-sm
                                hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                focus-visible:outline-violet-600">Modifier</button>
                        </div>   
                        </div>                     
                    </div>
                    <div className="bg-white py-4 h-200 ml-20 mr-20">
                    <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                        <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                        <div className="mt-2">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        </div>

                        <div className="sm:col-span-full">
                        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" placeholder="example@gmail.com " class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="bg-white py-4 h-200 ml-20 mr-20">
                    <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                        <div className="mt-2">
                            <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option>Antananarivo </option>
                            <option>Fianarantsoa</option>
                            <option>Toamasina</option>
                            <option>Mahajanga</option>
                            <option>Toliara</option>
                            <option>Antsiranana</option>
                            </select>
                        </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                        <div className="mt-2">
                            <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                        <div className="mt-2">
                            <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                        <div className="mt-2">
                            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        </div>
                    </div>                        
                    </div>
                    <div className="bg-gray-200 py-4 h-100 ml-20 mr-20">
                    <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-2 sm:col-start-1">
                            <article class="text-wrap ...">
                            <h1 className="ml-5 text-left font-bold text-2xl">Supprimer</h1>
                            <p className="ml-5 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                            </article>
                            <button type="submit" className="ml-5 mt-5 text-right rounded-md
                                bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6
                                text-white shadow-sm
                                hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                focus-visible:outline-violet-600">Deconnecter</button>
                        </div>

                        <div className="sm:col-span-2">                        
                        <div className="mt-2">
                            <input type="text" name="region" id="region" autocomplete="address-level1" className="mt-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        </div>

                        <div className="sm:col-span-2 mr-5">
                        <button type="submit" className="w-full mt-10 text-center rounded-md
                                bg-red-600 px-3 py-1.5 text-sm font-bold leading-6
                                text-white shadow-sm
                                hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                focus-visible:outline-red-600">Supprimer</button>
                        </div>
                    </div> 

                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Profile