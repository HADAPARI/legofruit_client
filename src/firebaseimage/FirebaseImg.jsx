import { useState, useEffect } from "react";
import { imageDb } from "./Config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function FirebaseImg({ onImageSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);

  useEffect(() => {
    listAll(ref(imageDb, "files"))
      .then((imgs) => {
        return Promise.all(
          imgs.items.map((val) => {
            return getDownloadURL(val);
          })
        );
      })
      .then((urls) => {
        setImgUrl(urls);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  const handleUpload = (file) => {
    const imgRef = ref(imageDb, `Images/addProduit/${v4()}`);
    uploadBytes(imgRef, file)
      .then((snapshot) => {
        console.log("File uploaded successfully!");
        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        onImageSelect(url);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    handleUpload(file)
      .then((url) => {
        onImageSelect(url);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
      <div className="col-span-2 w-full h-72 relative">
        <label
          htmlFor="image"
          className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 cursor-pointer"
        >
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Aperçu de l'image"
              className="w-full h-full object-cover rounded-lg"
            />
          )}
          {!selectedImage && (
            <>
              {imgUrl.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt="Aperçu de l'image"
                  className="hidden"
                />
              ))}
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </>
          )}
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
  );
}

export default FirebaseImg;
