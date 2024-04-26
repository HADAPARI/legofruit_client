import Product from "./Product";
import file4 from "../assets/img/file-4.png";
import file5 from "../assets/img/file-5.png";

const Middle = () => {
  return (
    <div className="px-12 w-full">
      <div className="bg-white rounded-md p-4 flex gap-3">
        <div className="avatar">
          <div className="size-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="w-full">
          <button className="btn rounded-badge w-full flex justify-start">
            Qu&apos;est ce que vous avez de frais?
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-7">
        <button className="btn rounded-badge px-5 bg-slate-800 border-none text-white">
          Tous
        </button>
        <button className="btn btn-ghost rounded-badge px-5 border-none">
          Offres
        </button>
        <button className="btn btn-ghost rounded-badge px-5 border-none">
          Demandes
        </button>
      </div>

      <div className="flex justify-between mt-10">
        <Product
          image={file4}
          category="Fruits"
          type="supply"
          title="Fruits frais de la ferme"
          quantity={250}
          price={7.99}
          promotion="10"
        />
        <Product
          image={file5}
          category="Fruits"
          type="supply"
          title="Orange bien fraiche"
          quantity={500}
          price={10}
          promotion="25"
        />
        <Product
          image={file4}
          category="Fruits"
          type="demand"
          title="Tomate frais de la ferme"
          quantity={330}
          price={6.5}
          promotion="33"
        />
      </div>
      <div className="flex justify-between mt-10">
        <Product
          image={file4}
          category="Fruits"
          type="supply"
          title="Fruits frais de la ferme"
          quantity={250}
          price={7.99}
          promotion="10"
        />
        <Product
          image={file5}
          category="Fruits"
          type="demand"
          title="Orange bien fraiche"
          quantity={500}
          price={10}
          promotion="25"
        />
        <Product
          image={file4}
          category="Fruits"
          type="demand"
          title="Tomate frais de la ferme"
          quantity={330}
          price={6.5}
          promotion="33"
        />
      </div>
      <div className="flex justify-between mt-10">
        <Product
          image={file4}
          category="Fruits"
          type="demand"
          title="Fruits frais de la ferme"
          quantity={250}
          price={7.99}
          promotion="10"
        />
        <Product
          image={file5}
          category="Fruits"
          type="supply"
          title="Orange bien fraiche"
          quantity={500}
          price={10}
          promotion="25"
        />
        <Product
          image={file4}
          category="Fruits"
          type="supply"
          title="Tomate frais de la ferme"
          quantity={330}
          price={6.5}
          promotion="33"
        />
      </div>
      <div className="flex justify-between mt-10">
        <Product
          image={file4}
          category="Fruits"
          type="supply"
          title="Fruits frais de la ferme"
          quantity={250}
          price={7.99}
          promotion="10"
        />
        <Product
          image={file5}
          category="Fruits"
          type="demand"
          title="Orange bien fraiche"
          quantity={500}
          price={10}
          promotion="25"
        />
        <Product
          image={file4}
          category="Fruits"
          type="supply"
          title="Tomate frais de la ferme"
          quantity={330}
          price={6.5}
          promotion="33"
        />
      </div>
    </div>
  );
};

export default Middle;
