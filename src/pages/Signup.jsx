import {
  EnvelopeSimple,
  Eye,
  EyeSlash,
  House,
  Lock,
  Phone,
  User,
} from "@phosphor-icons/react";
import axios from "axios";
import { useState } from "react";
import validateField from "../utilities/validation";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Signup() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    region: "",
    role: "2",
    password: "",
    verifiedpassword: "",
    state: false,
    bntProducer:
      "btn bg-green-500 border border-green-500 text-white hover:bg-green-600 w-64 join-item",
    btnMarket:
      "btn btn-outline w-64 border-green-500 text-green-500 hover:bg-orange-100 hover:border-orange-100 hover:text-orange-500 join-item",
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

  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/country`)
      .then((res) => {
        setCountries(res.data);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user.country != "") {
      axios
        .get(`${BASE_URL}/region/${user.country}`)
        .then((res) => {
          setRegions(res.data);
        })
        .catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.country]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  let firstLineInput = null;

  const handleClickProducer = () => {
    const btnProducerClicked =
      "btn bg-green-500 border border-green-500 text-white hover:bg-green-600 w-64 join-item";
    const btnMarketUnselected =
      "btn btn-outline w-64 border-green-500 text-green-500 hover:bg-orange-100 hover:border-orange-100 hover:text-orange-500 join-item";
    const state = false;
    setUser((user) => ({
      ...user,
      state: state,
      bntProducer: btnProducerClicked,
      btnMarket: btnMarketUnselected,
      role: 2,
      lastname: "",
    }));
  };

  const handleClickMarket = () => {
    const btnMarketClicked =
      "btn btn-outline w-64 border-orange-500 bg-orange-500 hover:border-orange-600 hover:bg-orange-600 text-white join-item";
    const btnProducerUnselected =
      "btn bg-white border border-orange-500 text-orange-500 hover:border-green-100 hover:text-green-500 hover:bg-green-100 w-64 join-item";
    const state = true;
    setUser((user) => ({
      ...user,
      state: state,
      btnMarket: btnMarketClicked,
      bntProducer: btnProducerUnselected,
      role: 3,
      lastname: "Marketeur",
    }));
  };

  if (user.state) {
    firstLineInput = (
      <div>
        <div className=" relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <User size={20} className="text-gray-600" />
          </div>

          <input
            id="company"
            name="firstname"
            type="text"
            placeholder="Supermarché"
            className="w-full pl-10 input input-bordered "
            value={user.firstname}
            onChange={handleOnChange}
          />
        </div>
        {<span className="text-error">{errors.firstname}</span>}
      </div>
    );
  } else {
    firstLineInput = (
      <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
        <div>
          <div className=" relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <User size={20} className="text-gray-600" />
            </div>

            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Prénom"
              className="w-full pl-10 input input-bordered "
              value={user.firstname}
              onChange={handleOnChange}
            />
          </div>
          {<span className="text-error">{errors.firstname}</span>}
        </div>

        <div>
          <div className=" relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <User size={20} className="text-gray-600" />
            </div>
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Nom de famille"
              className="w-full pl-10 input input-bordered "
              value={user.lastname}
              onChange={handleOnChange}
            />
          </div>
          {<span className="text-error">{errors.lastname}</span>}
        </div>
      </div>
    );
  }

  const [isSending, setIsSending] = useState(false);

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
        "Veuillez entrer une adresse email valide"
      ),
    }));

    setErrors((error) => ({
      ...error,
      phone: validateField(
        user.phone,
        phoneRegex,
        "Veuillez entrer un numéro valide"
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
        "Mot de passe fort requis.(6 caractères minimum, 20 maximum, avec au moins: une lettre en majuscule, une lettre en minuscule, un nombre et un caractère spécial)"
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

    setIsSending(true);
    axios
      .post(`${BASE_URL}/user/signup`, {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        avatar: "avatar",
        phone: user.phone,
        address: user.address,
        region: user.region,
        country: user.country,
        role: user.role,
        password: user.password,
      })
      .then(() => {
        console.log("ok");
        setIsSending(false);
        setUser({
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

        document.getElementById("signup_modal").showModal();
      })
      .catch(() => {
        setIsSending(false);
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  const toogleEye = () => setShowPassword((showPassword) => !showPassword);

  return (
    <>
      <div className="h-full mb-7">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-lg">
            <div className="join">
              <Link onClick={handleClickProducer} className={user.bntProducer}>
                Agriculteur
              </Link>
              <Link onClick={handleClickMarket} className={user.btnMarket}>
                Supermarché
              </Link>
            </div>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Créer un nouveau compte
            </h2>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-lg">
            <form className="space-y-5" onSubmit={handleOnSubmit}>
              {firstLineInput}
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
                    value={user.email}
                    onChange={handleOnChange}
                  />
                </div>
                {<span className="text-error">{errors.email}</span>}
              </div>

              <div>
                <div className="mt-2.5 relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Phone size={20} className="text-gray-600" />{" "}
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Numéro téléphone"
                    className="w-full pl-10 input input-bordered "
                    value={user.phone}
                    onChange={handleOnChange}
                  />
                </div>
                {<span className="text-error">{errors.phone}</span>}
              </div>

              <div>
                <div className="mt-2.5 relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <House size={20} className="text-gray-600" />{" "}
                  </div>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Adresse"
                    className="w-full pl-10 input input-bordered "
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
                      value={user.country}
                      onChange={handleOnChange}
                      name="country"
                      className="select select-bordered w-full"
                    >
                      <option disabled value="">
                        Pays
                      </option>
                      {countries.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <div>
                    <select
                      value={user.region}
                      onChange={handleOnChange}
                      name="region"
                      className="select select-bordered w-full"
                    >
                      <option disabled value="">
                        Région
                      </option>
                      {regions.map((region) => (
                        <option key={region.id} value={region.id}>
                          {region.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
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
                <button
                  type="submit"
                  className={`btn w-full bg-violet-800 hover:bg-violet-900 text-white ${
                    isSending ? "btn-disabled" : ""
                  }`}
                >
                  <span className={isSending ? "hidden" : ""}>
                    S&apos;inscrire
                  </span>
                  <span
                    className={`loading loading-spinner text-violet-800 ${
                      isSending ? "" : "hidden"
                    }`}
                  ></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <dialog id="signup_modal" className="modal show">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-green-600">
            Inscription réussi
          </h3>
          <p className="py-4 leading-relaxed">
            Un e-mail de confirmation a été envoyé à votre adresse. Veuillez
            vérifier votre boîte de réception et suivre les instructions pour
            activer votre compte. Si vous ne trouvez pas l&apos;e-mail dans
            votre boîte de réception, veuillez vérifier votre courrier
            indésirable. Merci !
          </p>
          <div className="modal-action">
            <form method="dialog">
              <Link to="/" className="btn btn-primary">
                Fermer
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
