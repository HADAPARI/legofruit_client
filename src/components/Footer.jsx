import {
  EnvelopeSimple,
  FacebookLogo,
  GoogleLogo,
  PaperPlaneTilt,
  Phone,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Logo from "./Logo";
import file1 from "../assets/img/file-1.png";
import file2 from "../assets/img/file-2.png";
import file3 from "../assets/img/file-3.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-20">
      <div className="px-20 py-28 bg-gray-100 rounded-xl flex justify-between relative overflow-hidden">
        <img src={file1} alt="" className="w-16 absolute top-16 end-16" />
        <img src={file2} alt="" className="w-48 absolute start-0 bottom-0" />
        <img src={file3} alt="" className="w-48 absolute -end-16 bottom-16" />
        <div>
          <Logo />
          <span className="ms-4">Faravohitra, Antananarivo, Madagascar</span>
          <div className="ms-4 mt-7 flex gap-3">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="btn btn-circle bg-white text-green-600 hover:text-white hover:bg-green-600 border-none"
            >
              <FacebookLogo size={20} />
            </Link>
            <Link
              to="https://twitter.com/"
              target="_blank"
              className="btn btn-circle bg-white text-green-600 hover:text-white hover:bg-green-600 border-none"
            >
              <XLogo size={20} />
            </Link>
            <Link
              to="https://www.google.com/"
              target="_blank"
              className="btn btn-circle bg-white text-green-600 hover:text-white hover:bg-green-600 border-none"
            >
              <GoogleLogo size={20} />
            </Link>
            <Link
              to="https://www.youtube.com/"
              target="_blank"
              className="btn btn-circle bg-white text-green-600 hover:text-white hover:bg-green-600 border-none"
            >
              <YoutubeLogo size={20} />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Catégories</h1>
          <ul className="mt-5 text-slate-500 flex flex-col gap-3">
            <li>
              <Link>Fruits</Link>
            </li>
            <li>
              <Link>Légumes</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Legal</h1>
          <ul className="mt-5 text-slate-500 flex flex-col gap-3">
            <li>
              <Link>Conditions d&apos;utilisation</Link>
            </li>
            <li>
              <Link>Politique de confidentialité</Link>
            </li>
            <li>
              <Link>Politique en matière de cookies</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Newsletter</h1>
          <div className="mt-5 flex flex-col gap-7 w-96">
            <p className=" text-slate-500">
              Obtenez maintenant une remise gratuite de 20 % sur tous les
              produits lors de votre première commande
            </p>
            <div className="join">
              <div className="bg-white join-item px-4 flex items-center">
                <EnvelopeSimple size={20} />
              </div>
              <input
                className="input join-item w-full"
                placeholder="Votre adresse email"
              />
              <button className="btn join-item text-orange-500">
                <PaperPlaneTilt size={20} />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} />: (+261) 34 63 465 65
            </div>
            <div className="flex items-center gap-3">
              <EnvelopeSimple size={20} />:{" "}
              <Link
                to="mailto:legofruit.cdan8@gmail.com"
                target="_blank"
                className="hover:text-orange-500"
              >
                legofruit.cdan8@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-3">
        Copyright © {new Date().getFullYear()} - Tout droit réservé
      </div>
    </div>
  );
};

export default Footer;
