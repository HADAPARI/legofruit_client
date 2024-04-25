function DeleteAccount() {
  return (
    <div>
      <div className="border rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-red-500">
          Supprimer compte
        </h2>
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-2">
          <div className="overflow-hidden flex-grow">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Pour supprimer votre compte veuillez entrer ce code : <b>YYYY</b>
            </label>
            <div className="flex items-center justify-between mt-2">
              <input
                type="text"
                style={{ width: "450px" }}
                className="block lg:w-96 p-4 h-12 rounded-md py-1.5 border-2 focus:ring-1 focus:ring-inset focus:ring-red-600 focus:border-transparent"
              />

              <button className="py-2 px-6 border-2 text-white font-bold rounded bg-red-400 ml-4">
                Delete
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default DeleteAccount;
