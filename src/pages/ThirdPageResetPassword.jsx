import { Eye, EyeSlash, Lock } from "@phosphor-icons/react";
import { useState } from "react";
import validateField from "../utilities/validation";

function ThirdPageResetPassword() {
  const [user, setUser] = useState({
    password: "",
    verifiedpassword: "",
  });
  const [errors, setErrors] = useState({
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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    setErrors((error) => ({
      ...error,
      password: validateField(
        user.password,
        passwordRegex,
        "Mot de passe fort requis.(6 caractères minimum, 20 maximum, avec au moins: une lettre en majuscule, une lettre en minuscule, un nombre et sans caractère spécial)"
      ),
    }));

    setErrors((error) => ({
      ...error,
      verifiedpassword: validateField(user.verifiedpassword, null, ""),
    }));

    if (user.password !== user.verifiedpassword) {
      setErrors((error) => ({
        ...error,
        verifiedpassword: "Le mot de passe ne correspond pas",
      }));
    } else {
      setErrors((error) => ({ ...error, verifiedpassword: "" }));
    }

    // axios
    //   .post(`${BASE_URL}/user/signup`, {
    //     email: user.email,
    //   })
    //   .then(() => {
    //     console.log("ok");

    //     document.getElementById("signup_modal").showModal();
    //   })
    //   .catch(() => {});
  };

  const [showPassword, setShowPassword] = useState(false);

  const toogleEye = () => setShowPassword((showPassword) => !showPassword);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Réinitialisez votre mot de passe
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleOnSubmit}>
          <div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock size={20} className="text-gray-600" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Nouveau mot de passe"
                className="w-full pl-10 input input-bordered ing-6"
                value={user.password}
                onChange={handleOnChange}
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
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock size={20} className="text-gray-600" />
              </div>
              <input
                id="verifiedpassword"
                type={showPassword ? "text" : "password"}
                name="verifiedpassword"
                placeholder="Confirmation mot de passe"
                className="w-full pl-10 input input-bordered ing-6"
                value={user.verifiedpassword}
                onChange={handleOnChange}
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                <div>
                  <EyeSlash
                    onClick={toogleEye}
                    id="eyeslash"
                    className={" " + (showPassword && "hidden")}
                    size={20}
                  />
                  <Eye
                    onClick={toogleEye}
                    id="eye"
                    className={"" + (!showPassword && "hidden")}
                    size={20}
                  />
                </div>
              </div>
            </div>
            {<span className="text-error">{errors.verifiedpassword}</span>}
          </div>
          <div>
            {/* <button
              type="submit"
              className={`btn w-full bg-violet-800 hover:bg-violet-900 text-white ${
                isSending ? "btn-disabled" : ""
              }`}
            >
              <span className={isSending ? "hidden" : ""}>S&apos;inscrire</span>
              <span
                className={`loading loading-spinner text-violet-800 ${
                  isSending ? "" : "hidden"
                }`}
              ></span>
            </button> */}
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

export default ThirdPageResetPassword;
