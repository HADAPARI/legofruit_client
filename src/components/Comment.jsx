import axios from "axios";
import { useEffect, useState } from "react";

const Comment = ({ onClose, isOpen, onAddComment }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [isViewingComment, setIsViewingComment] = useState(false);
  const [userComments, setUserComments] = useState([]);
  const [profileData, setProfileData] = useState({});

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (comment.trim() !== "" && rating !== 0) {
      try {
        const response = await axios.post(
          `http://localhost:9000/review/81be5219-812f-4828-8e67-187e8dd524a6/reviews`,
          {
            reviewedUserId: "e49e792f-3674-43aa-9082-3406900e5a8f",
            rating: rating,
            comment: comment,
          }
        );
        if (response.status === 200) {
          console.log("Review added successfully.");
          onAddComment(); // Appeler la fonction onAddComment pour rafraîchir les commentaires
          setComment(""); // Vider le champ de commentaire après l'ajout
        } else {
          throw new Error("Failed to add review.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getUserComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/review/comment/e49e792f-3674-43aa-9082-3406900e5a8f`
      );
      setUserComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/user/profile/e49e792f-3674-43aa-9082-3406900e5a8f"
        );
        if (response.status === 200) {
          setProfileData(response.data);
        } else {
          throw new Error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfileData();
  }, []);

  const toggleViewComment = async () => {
    setIsViewingComment(!isViewingComment);
    if (!isViewingComment) {
      getUserComments();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          id="comment-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-lg">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900">
                  <b>
                    {" "}
                    {profileData.firstname} {profileData.lastname}
                  </b>
                  <p className="text-gray-500 text-sm ">
                    {isViewingComment
                      ? "Commentaire :"
                      : "Pour noter et commenter cette profile veuillez remplir :"}
                  </p>
                </h3>

                <button
                  onClick={onClose}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Fermer le modal</span>
                </button>
              </div>
              {isViewingComment ? (
                <div className="p-4 md:p-5 max-h-96 overflow-y-auto">
                  {userComments.map((comment, index) => (
                    <div key={index} className="mb-4">
                      <input
                        type="text"
                        className="bg-gray-100 rounded-md p-3 w-full"
                        value={comment}
                        readOnly
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="rating"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Note
                      </label>
                      <div className="rating flex items-center">
                        {[1, 2, 3, 4, 5].map((value) => (
                          <input
                            key={value}
                            type="radio"
                            name="rating"
                            value={value}
                            className="mask mask-star-2 bg-orange-400 appearance-none"
                            onChange={handleRatingChange}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="comment"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Commentaire
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        value={comment}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="Écrivez votre commentaire ici..."
                        rows="4"
                        cols="50"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-white inline-flex justify-center bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Ajouter un commentaire
                  </button>
                </form>
              )}
              <button
                onClick={toggleViewComment}
                className="text-black inline-flex justify-center  w-full   font-medium rounded-lg text-sm px-5 py-2.5"
              >
                {isViewingComment ? "Retour" : "Voir le commentaire"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Comment;
