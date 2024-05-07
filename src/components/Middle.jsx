import { useState, useEffect } from "react";
import Comment from "../components/Comment";
import ModalPub from "../components/ModalPub";
import Product from "./Product";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/reducers/productSlice";

const Middle = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

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
        dispatch(set(res.data));
      })
      .catch(() => {
        console.log("Erreur lors de la récupération des produits !");
      });
  }, [BASE_URL]); // Modification pour inclure BASE_URL dans les dépendances

  const handleCommentModalOpen = () => {
    setIsCommentModalOpen(true);
  };

  const handleCommentModalClose = () => {
    setIsCommentModalOpen(false);
  };

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

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
        <button
          onClick={handleCommentModalOpen}
          className="btn btn-ghost rounded-badge px-5 border-none"
        >
          Offres
        </button>
        {isCommentModalOpen && (
          <Comment
            isOpen={isCommentModalOpen}
            onClose={handleCommentModalClose}
            onAddComment={handleAddComment}
          />
        )}

        <button className="btn btn-ghost rounded-badge px-5 border-none">
          Demandes
        </button>
      </div>

      <div className="flex justify-between flex-wrap gap-10 mt-10">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            owner={product.user}
            image={product.image}
            category={product.category}
            type={product.type}
            title={product.title}
            quantity={product.quantity}
            price={product.price}
            promotion={product.promotion}
          />
        ))}
      </div>
    </div>
  );
};

export default Middle;
