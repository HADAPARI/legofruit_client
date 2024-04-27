import { EnvelopeSimple } from "@phosphor-icons/react";
//import axios from "axios";
import axios from "axios";
import { useState } from "react";
import validateField from "../utilities/validation";

function FirstPageResetPassword() {
  //const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [user, setUser] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setErrors((error) => ({
      ...error,
      email: validateField(
        user.email,
        emailRegex,
        "Veuillez entrer une adresse email valide"
      ),
    }));

    axios
      .post(
        {},
        {
          email: user.email,
        }
      )
      .then(() => {
        console.log("ok");

        document.getElementById("signup_modal").showModal();
      })
      .catch(() => {});
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Réinitialisez votre mot de passe
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleOnSubmit}>
          <label>Veuillez entrer votre adresse email</label>

          <div>
            <div className=" relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <EnvelopeSimple size={20} className="text-gray-600" />
              </div>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                placeholder="Adresse email de récupération"
                className="w-full pl-10 input input-bordered "
                value={user.email}
                onChange={handleOnChange}
              />
            </div>
            {<span className="text-error">{errors.email}</span>}
          </div>

          <div>
            <button
              type="submit"
              className="btn flex w-full justify-center rounded-md bg-violet-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Verifier mon e-mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FirstPageResetPassword;
