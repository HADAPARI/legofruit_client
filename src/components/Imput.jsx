import { User } from "@phosphor-icons/react";

// eslint-disable-next-line react/prop-types
function Imput({ firstname, onChangehanlde, error }) {
  return (
    <div>
      <div className=" relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <User size={16} className="text-gray-600" />
        </div>

        <input
          id="firstname"
          name="firstname"
          type="text"
          placeholder="First name"
          className="block w-full h-12 rounded-md border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-teal-300 sm:text-sm sm:leading-6"
          value={firstname}
          onChange={onChangehanlde}
        />
      </div>
      {error}
    </div>
  );
}

export default Imput;
