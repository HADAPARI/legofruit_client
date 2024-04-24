import bg from "../assets/img/bg-1.webp";
import { Typewriter } from "react-simple-typewriter";
import Advantage from "../components/Advantage";
import {
  Leaf,
  MapPinArea,
  Medal,
  OrangeSlice,
  Pepper,
  SealPercent,
  Truck,
  UsersThree,
} from "@phosphor-icons/react";
import CustomButton from "../components/CustomButton";
import file4 from "../assets/img/file-4.png";
import file5 from "../assets/img/file-5.png";
import file6 from "../assets/img/file-6.png";
import Product from "../components/Product";
import Statistic from "../components/Statistic";
import file2 from "../assets/img/file-2.png";
import Testimonie from "../components/Testimonie";

const Home = () => {
  const text = [
    "Cultivons la solidarité locale, soutenez votre communauté agricole.",
    "Des fruits et légumes à croquer de la ferme à la fourchette, vivez la fraîcheur.",
    "Réduisez votre empreinte, maximisez la fraîcheur, fruits et légumes d'ici.",
  ];

  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="p-72 relative bg-cover"
      >
        <div className="absolute start-0 top-0 end-0 bottom-0 transparent flex px-20 gap-20">
          <div className="w-1/2 flex flex-col justify-center gap-3">
            <h3 className="text-2xl font-semibold text-green-600">
              CIRCUIT COURT
            </h3>
            <h1 className="text-5xl font-bold h-52">
              {" "}
              <Typewriter
                words={text}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </h1>
            <CustomButton text="Faire des achats" />
          </div>
          <div className="w-1/2 flex justify-center items-center">
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mt-14 mb-48 pb-7 mx-40 flex justify-between border-b-2">
          <Advantage
            icon={<OrangeSlice size={50} />}
            text="Fruits et légumes fraiches"
          />
          <Advantage
            icon={<Truck size={50} />}
            text="Livraison rapide, à temps"
          />
          <Advantage
            icon={<SealPercent size={50} />}
            text="Produits moins cher"
          />
          <Advantage icon={<MapPinArea size={50} />} text="Produits local" />
        </div>

        <div className="px-20 mb-48">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Produits le plus achetés</h1>
            <CustomButton text="Voir plus" />
          </div>
          <div className="mt-12 flex justify-between">
            <Product
              image={file4}
              type="Fruits"
              title="Fruits frais de la ferme"
              quantity={250}
              price={7.99}
              promotion="10"
            />
            <Product
              image={file5}
              type="Fruits"
              title="Orange bien fraiche"
              quantity={500}
              price={10}
              promotion="25"
            />
            <Product
              image={file4}
              type="Fruits"
              title="Tomate frais de la ferme"
              quantity={330}
              price={6.5}
              promotion="33"
            />
            <Product
              image={file5}
              type="Fruits"
              title="Fruits frais de la ferme"
              quantity={480}
              price={10.63}
              promotion="5"
            />
          </div>
        </div>

        <div className="flex px-20 mb-48">
          <div className="flex-1 flex justify-center items-center">
            <img src={file6} alt="" />
          </div>
          <div className="flex-1">
            <h3 className="text-green-600 font-semibold uppercase text-xl">
              Apropos de nous
            </h3>
            <div className="w-4/5">
              <h1 className="text-3xl font-semibold mt-3">
                Nous croyons en la collaboration avec Supermarchés et
                Agriculteurs accrédités
              </h1>
              <p className="mt-4 text-gray-400 leading-7">
                Nous croyons fermement en la valeur de la collaboration avec des
                partenaires certifiés, qu&apos;ils soient issus du domaine
                commercial ou agricole. Cette approche favorise des relations
                durables et mutuellement bénéfiques, nous permettant de cultiver
                des partenariats solides et de garantir une qualité
                irréprochable à nos clients.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="p-20">
            <h1 className="text-3xl font-bold text-center">
              Produits le plus populaire
            </h1>
            <div className="flex justify-center gap-3 mt-7">
              <button className="btn rounded-badge px-5 bg-slate-800 border-none text-white">
                Tous
              </button>
              <button className="btn btn-ghost rounded-badge px-5 border-none">
                Fruits
              </button>
              <button className="btn btn-ghost rounded-badge px-5 border-none">
                Légumes
              </button>
            </div>
            <div className="flex justify-between mt-10">
              <Product
                image={file4}
                type="Fruits"
                title="Fruits frais de la ferme"
                quantity={250}
                price={7.99}
                promotion="10"
              />
              <Product
                image={file5}
                type="Fruits"
                title="Orange bien fraiche"
                quantity={500}
                price={10}
                promotion="25"
              />
              <Product
                image={file4}
                type="Fruits"
                title="Tomate frais de la ferme"
                quantity={330}
                price={6.5}
                promotion="33"
              />
              <Product
                image={file5}
                type="Fruits"
                title="Fruits frais de la ferme"
                quantity={480}
                price={10.63}
                promotion="5"
              />
            </div>
            <div className="flex justify-between mt-10">
              <Product
                image={file4}
                type="Fruits"
                title="Fruits frais de la ferme"
                quantity={250}
                price={7.99}
                promotion="10"
              />
              <Product
                image={file5}
                type="Fruits"
                title="Orange bien fraiche"
                quantity={500}
                price={10}
                promotion="25"
              />
              <Product
                image={file4}
                type="Fruits"
                title="Tomate frais de la ferme"
                quantity={330}
                price={6.5}
                promotion="33"
              />
              <Product
                image={file5}
                type="Fruits"
                title="Fruits frais de la ferme"
                quantity={480}
                price={10.63}
                promotion="5"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 mb-48 flex justify-center gap-28 py-20 relative overflow-hidden">
          <img
            src={file2}
            alt=""
            className="w-44 absolute -start-2 -bottom-2"
          />
          <img
            src={file2}
            alt=""
            className="w-44 absolute -end-2 -top-2 rotate-180"
          />
          <Statistic
            icon={<UsersThree size={45} />}
            number="1,800"
            title="Clients satisfaits"
          />
          <Statistic
            icon={<Pepper size={45} />}
            number="362"
            title="Produits existants"
          />
          <Statistic
            icon={<Leaf size={45} />}
            number="30"
            title="Clients satisfaits"
          />
          <Statistic
            icon={<Medal size={45} />}
            number="2,000"
            title="Trophés gagneés"
          />
        </div>

        <div className="px-20 mb-48">
          <h1 className="text-3xl font-bold text-center">
            Pourquoi les clients nous aiment ?
          </h1>
          <div className="flex justify-between mt-10">
            <Testimonie
              text="Collaborer avec cette entreprise a été une véritable bouffée d'air frais pour mon exploitation.
             Leur engagement envers la durabilité et la qualité des produits est admirable."
            />
            <Testimonie
              text="Ensemble, nous offrons à nos clients des produits de la plus haute qualité,
              tout en soutenant nos agriculteurs locaux et en promouvant une consommation responsable."
            />
            <Testimonie
              text="Leur partenariat nous permet d'écouler nos produits de manière responsable et de faire connaître notre travail au sein de la 
            communauté. C'est une collaboration dont nous sommes fiers et qui apporte de réels avantages à notre ferme."
            />
            <Testimonie
              text="Leur engagement envers la traçabilité et la durabilité des produits est un véritable atout pour notre enseigne.
             Ensemble, nous offrons à nos clients une expérience d'achat authentique et responsable, 
             tout en soutenant l'économie locale et en valorisant le travail de nos agriculteurs."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
