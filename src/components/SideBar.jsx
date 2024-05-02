import { Gauge, Headphones, HouseLine, UserCheck } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-max">
      <ul className="hover:*:bg-gray-200 hover:*:text-orange-600 ">
        <li className="rounded-md ">
          <NavLink
            to="/"
            className="flex items-center gap-3 font-semibold px-20 py-3 "
          >
            <HouseLine size={20} />
            <span>Accueil</span>
          </NavLink>
        </li>
        <li className="rounded-md">
          <NavLink
            to="/dashbord"
            className="flex items-center gap-3 font-semibold px-20 py-3"
          >
            <Gauge size={20} />
            <span className="whitespace-nowrap">Tableau de bord</span>
          </NavLink>
        </li>
        <li className="rounded-md">
          <NavLink
            to="/suscribe"
            className="flex items-center gap-3 font-semibold px-20 py-3"
          >
            <UserCheck size={20} />
            <span>Abonnement</span>
          </NavLink>
        </li>
        <li className="rounded-md">
          <NavLink
            to="contact"
            className="flex items-center gap-3 font-semibold px-20 py-3"
          >
            <Headphones size={20} />
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
