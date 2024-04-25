import { Cherries } from "@phosphor-icons/react";

// eslint-disable-next-line react/prop-types
const Testimonie = ({ text, star }) => {
  return (
    <div className="flex flex-col w-80 shadow-xl p-7 pb-20 gap-3 relative">
      <Cherries size={32} className="text-red-600 " />
      <div className="rating">
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-yellow-300"
          checked={star == 1}
          onChange={()=>{}}
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-yellow-300"
          checked={star == 2}
          onChange={()=>{}}
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-yellow-300"
          checked={star == 3}
          onChange={()=>{}}
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-yellow-300"
          checked={star == 4}
          onChange={()=>{}}
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-yellow-300"
          checked={star == 5}
          onChange={()=>{}}
        />
      </div>
      <p className="text-gray-400 text-sm leading-relaxed ">{text}</p>
      <div className="absolute bottom-7 flex gap-3 items-center">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="font-semibold">Anonyme</div>
      </div>
    </div>
  );
};

export default Testimonie;
