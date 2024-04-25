import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Check, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Activation = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useParams();
  const [isActivated, setIsActivated] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/activate/${token}`, {withCredentials: true})
      // eslint-disable-next-line no-unused-vars
      .then(() => {
        setIsActivated(true);
      })
      .catch(() => {
        setIsActivated(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isActivated != null && (<div className="py-40 w-screen flex flex-col justify-center items-center gap-3">
        <div
          className={
            "text-white rounded-full " +
            (isActivated ? "bg-success" : "bg-error")
          }
        >
          {isActivated ? (
            <Check size={50} className="m-5" />
          ) : (
            <X size={50} className="m-5" />
          )}
        </div>
        <h1 className="text-2xl font-bold">
          {isActivated
            ? "Votre compte a été bien activaté !"
            : "Echec d'activation de compte"}
        </h1>
        <Link to="/signin" className="btn bg-violet-800 hover:bg-violet-900 text-white w-52 mt-10">
          Se connecter
        </Link>
      </div>)}
    </div>
  );
};

export default Activation;
