
import axios from "axios";
import logo from "../assets/images/logo.png";
import Validation from "../components/validation";
import { EnvelopeSimple, Eye, EyeSlash, Lock } from "@phosphor-icons/react";
import { useState } from "react";

const Signin = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [showPassword, setShowPassword] = useState(false);

  const toogleEye = () => setShowPassword((showPassword) => !showPassword);
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const newObject = { ...values, [event.target.name]: event.target.value };
    setValues(newObject);
  }

  function handleValidation(event) {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/user/Signin`, {
        email: values.email,
        password: values.password
      })
      .then(() => {
        console.log("ok");
      })
      .catch(() => {
        console.log("Pas OK!");
      });

    setErrors(Validation(values));
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src={logo}
            alt="LEGOFRUIT"
          />
          <h1 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              LEGOFRUIT
          </h1>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="auth-form space-y-6" onSubmit={handleValidation}>
          <div>
                <div className="mt-2.5 relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeSimple size={20} className="text-gray-600" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    placeholder="Adresse email"
                    className="w-full pl-10 input input-bordered "
                    value={values.email}
                    onChange={handleInput}
                  />
                </div>
                {<span className="text-error">{errors.email}</span>}
              </div>

              <div>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock size={20} className="text-gray-600" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Mot de passe"
                    className="w-full pl-10 input input-bordered ing-6"
                    value={values.password}
                    onChange={handleInput}
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center">
                    <div>
                      <EyeSlash
                        onClick={toogleEye}
                        id="eyeslash"
                        className={"" + (showPassword && "hidden")}
                        size={20}
                        color="#9ca3af"
                      />
                      <Eye
                        onClick={toogleEye}
                        id="eye"
                        className={"" + (!showPassword && "hidden")}
                        size={20}
                        color="#9ca3af"
                      />
                    </div>
                  </div>
                </div>
                {<span className="text-error">{errors.password}</span>}
              </div>

            <div>
              <button
                type="submit"
                onSubmit={handleValidation}
                className="flex w-full justify-center rounded-md
                  bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6
                  text-white shadow-sm
                  hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-violet-600"
              >
                S'authentifier
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};
export default Signin;

