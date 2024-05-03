import { useState } from "react";
import SubscribeCards from "../components/SubscribeCards";
import gold from "../assets/img/gold.jpg";
import platinum from "../assets/img/platinum.jpg";
import diamond from "../assets/img/diamond.jpg";
import silver from "../assets/img/silver.jpg";

export default function Subscription() {
  const [cards, setCards] = useState([
    {
      imageGold: silver,
      h1GOLD: "SILVER",
      h2Ariary: "10 000 Ariary/mois",
      h3abonner: "bg-gray-600 w-full hover:bg-gray-700 text-white btn mt-8 ",
    },

    {
      imageGold: gold,
      h1GOLD: "GOLD",
      h2Ariary: "30 000 Ariary/3 mois",
      h3abonner:
        "bg-yellow-500 w-full hover:bg-yellow-600 text-white btn mt-8 ",
    },
    {
      imageGold: platinum,
      h1GOLD: "PLATINUM",
      h2Ariary: "50 000 Ariary/6 mois",
      h3abonner: "bg-gray-500 w-full hover:bg-gray-600 text-white btn mt-8 ",
    },

    {
      imageGold: diamond,
      h1GOLD: "DIAMOND",
      h2Ariary: "90 000 Ariary/12 mois",
      h3abonner: "bg-blue-500 w-full hover:bg-blue-600 text-white btn mt-8 ",
    },
  ]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ABONNEZ-VOUS !
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"></div>
        <div className="mt-8 grid grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <SubscribeCards
              key={index}
              goldProps={card.imageGold}
              h1GOLD={card.h1GOLD}
              h2Ariary={card.h2Ariary}
              h3abonner={card.h3abonner}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
