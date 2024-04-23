import {
  EnvelopeSimple,
  House,
  Lock,
  Phone,
  User,
} from "@phosphor-icons/react";
import axios from "axios";
import { useState } from "react";
import validateField from "../utilities/validation";

export default function Signup() {
  const un = 1;
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    region: "",
    password: "",
    verifiedpassword: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    region: "",
    password: "",
    verifiedpassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneRegex = /^(0|261)?3[0-9]{2}[0-9]{6}$/;

    setErrors((error) => ({
      ...error,
      firstname: validateField(user.firstname, null, ""),
    }));

    setErrors((error) => ({
      ...error,
      lastname: validateField(user.lastname, null, ""),
    }));

    setErrors((error) => ({
      ...error,
      email: validateField(
        user.email,
        emailRegex,
        "Please enter a valid email address."
      ),
    }));

    setErrors((error) => ({
      ...error,
      phone: validateField(
        user.phone,
        phoneRegex,
        "Please enter a valid phone number."
      ),
    }));

    setErrors((error) => ({
      ...error,
      address: validateField(user.address, null, ""),
    }));

    setErrors((error) => ({
      ...error,
      password: validateField(
        user.password,
        passwordRegex,
        "Validate a strong password.(6 caracters minimum,20 maximum, with at least one uppercase letter, one lowercase letter, one number and one special character)"
      ),
    }));

    setErrors((error) => ({
      ...error,
      verifiedpassword: validateField(user.verifiedpassword, null, ""),
    }));

    if (user.password !== user.verifiedpassword) {
      setErrors((error) => ({
        ...error,
        verifiedpassword: "The password doesn't match.",
      }));
    } else {
      setErrors((error) => ({ ...error, verifiedpassword: "" }));
    }

    axios
      .post(`${BASE_URL}/user/signup`, {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        avatar: "avatar",
        phone: user.phone,
        address: user.address,
        region: 1,
        country: 1,
        role: 1,
        password: user.password,
      })
      .then((res) => {
        console.log("ok");
      })
      .catch((error) => {});

    console.log(user);
  };

  return (
    <div className="h-full">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5" onSubmit={handleOnSubmit}>
            <div>
              <div className="mt-2.5 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeSimple size={16} className="text-gray-600" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  placeholder="E-mail"
                  className="block w-full h-12 rounded-md border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-teal-300 sm:text-sm sm:leading-6"
                  value={user.email}
                  onChange={handleOnChange}
                />
              </div>
              {<span className="text-error">{errors.email}</span>}
            </div>

            <div>
              <div className="mt-2.5 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Phone size={16} className="text-gray-600" />{" "}
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="block w-full h-12 rounded-md border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-teal-300 sm:text-sm sm:leading-6"
                  value={user.phone}
                  onChange={handleOnChange}
                />
              </div>
              {<span className="text-error">{errors.phone}</span>}
            </div>

            <div>
              <div className="mt-2.5 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <House size={16} className="text-gray-600" />{" "}
                </div>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="block w-full h-12 rounded-md border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-teal-300 sm:text-sm sm:leading-6"
                  value={user.address}
                  onChange={handleOnChange}
                />
              </div>
              {<span className="text-error">{errors.address}</span>}
            </div>

            <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 mt-2.5">
              <div>
                <div>
                  <select
                    value={user.region}
                    onChange={handleOnChange}
                    name="region"
                    className="select h-12 select-bordered select-sm w-full block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option disabled value="">
                      Choose Region
                    </option>
                    <option>Han Solo</option>
                    <option>{un}</option>
                  </select>
                </div>
              </div>

              <div>
                <div>
                  <select
                    value={user.country}
                    onChange={handleOnChange}
                    name="country"
                    className="select select-bordered select-sm w-full block rounded-md border-0 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option disabled value="Choose country"></option>
                    <option>Han Solo</option>
                    <option>{un}</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-2.5 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock size={16} className="text-gray-600" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="block w-full h-12 rounded-md border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-teal-300 sm:text-sm sm:leading-6"
                  value={user.password}
                  onChange={handleOnChange}
                />
              </div>
              {<span className="text-error">{errors.password}</span>}
            </div>

            <div>
              <div className="mt-2.5 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock size={16} className="text-gray-600" />
                </div>
                <input
                  id="verifiedpassword"
                  name="verifiedpassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="block w-full h-12 rounded-md border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-teal-300 sm:text-sm sm:leading-6"
                  value={user.verifiedpassword}
                  onChange={handleOnChange}
                />
              </div>
              {<span className="text-error">{errors.verifiedpassword}</span>}
            </div>

            <div>
              <button
                type="submit"
                className="flex h-12 w-full justify-center rounded-md bg-violet-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
