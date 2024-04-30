import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { set } from "../redux/reducers/userSlice";

function DeleteAccount() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteAccount = () => {
    if (code === "SUPPR/COMPTE") {
      axios
        .get(`${BASE_URL}/user/delete`, { withCredentials: true })
        .then((res) => {
          dispatch(set(res.data));
          navigate("/");
        })
        .catch(() => {
          console.log("Pas OK!");
        });
    }
  };

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div>
      <div className="border rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-red-500">
          Suppression compte
        </h2>
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-2">
          <div className="overflow-hidden flex-grow">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Pour supprimer votre compte veuillez entrer ce code :{" "}
              <b>SUPPR/COMPTE</b>
            </label>
            <div className="flex flex-col my-2 gap-3">
              <input
                type="text"
                className="input input-bordered w-96 ms-1"
                value={code}
                onChange={handleChange}
              />
              <button
                className="btn btn-error text-white w-96"
                onClick={deleteAccount}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default DeleteAccount;
