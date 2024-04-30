import Product from "./Product";
import file4 from "../assets/img/file-4.png";
import file5 from "../assets/img/file-5.png";
import { useState } from "react";
import ModalPub from "./ModalPub";
import { useEffect } from "react";
import axios from "axios";

const Middle = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/product/all`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        console.log("Pas OK!");
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-12 w-full">
      <div className="bg-white rounded-md p-4 flex gap-3">
        <div className="avatar">
          <div className="size-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="w-full">
          <button
            className="btn rounded-badge w-full flex justify-start"
            onClick={handleModalOpen}
          >
            Qu&apos;est ce que vous avez de frais?
          </button>
          {isModalOpen && (
            <ModalPub isOpen={isModalOpen} onClose={handleModalClose} />
          )}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-7">
        <button className="btn rounded-badge px-5 bg-slate-800 border-none text-white">
          Tous
        </button>
        <button className="btn btn-ghost rounded-badge px-5 border-none">
          Offres
        </button>
        <button className="btn btn-ghost rounded-badge px-5 border-none">
          Demandes
        </button>
      </div>

      <div className="flex justify-between mt-10">
        <Product
          image={file4}
          category="Fruits"
          type="supply"
          title="Fruits frais de la ferme"
          quantity={250}
          price={7.99}
          promotion="10"
        />
        <Product
          image={file5}
          category="Fruits"
          type="supply"
          title="Orange bien fraiche"
          quantity={500}
          price={10}
          promotion="25"
        />
        <Product
          image={file4}
          category="Fruits"
          type="demand"
          title="Tomate frais de la ferme"
          quantity={330}
          price={6.5}
          promotion="33"
        />
      </div>
      <div className="flex justify-between mt-10">
        <Product
          image={file4}
          category="Fruits"
          type="supply"
          title="Fruits frais de la ferme"
          quantity={250}
          price={7.99}
          promotion="10"
        />
        <Product
          image={file5}
          category="Fruits"
          type="demand"
          title="Orange bien fraiche"
          quantity={500}
          price={10}
          promotion="25"
        />
        <Product
          image={file4}
          category="Fruits"
          type="demand"
          title="Tomate frais de la ferme"
          quantity={330}
          price={6.5}
          promotion="33"
        />
      </div>
      <div className="flex justify-between mt-10">
        <Product
          image={file4}
          category="Fruits"
          type="demand"
          title="Fruits frais de la ferme"
          quantity={250}
          price={7.99}
          promotion="10"
        />
        <Product
          image={file5}
          category="Fruits"
          type="supply"
          title="Orange bien fraiche"
          quantity={500}
          price={10}
          promotion="25"
        />
        <Product
          image={file4}
          category="Fruits"
          type="supply"
          title="Tomate frais de la ferme"
          quantity={330}
          price={6.5}
          promotion="33"
        />
      </div>
      <div className="flex justify-between mt-10">
        <Product
          image={file4}
          category="Fruits"
          type="supply"
          title="Fruits frais de la ferme"
          quantity={250}
          price={7.99}
          promotion="10"
        />
        <Product
          image={file5}
          category="Fruits"
          type="demand"
          title="Orange bien fraiche"
          quantity={500}
          price={10}
          promotion="25"
        />
        <Product
          image={file4}
          category="Fruits"
          type="supply"
          title="Tomate frais de la ferme"
          quantity={330}
          price={6.5}
          promotion="33"
        />
      </div>
    </div>
  );
};

export default Middle;
