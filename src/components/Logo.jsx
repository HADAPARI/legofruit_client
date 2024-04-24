import { Link } from "react-router-dom";
import logo from "../assets/img/logo-png.png";


const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={logo} alt="logo" className="w-20" />
      <div>
        <h1 className="text-xl font-semibold">Legofruit</h1>
        <h4 className="text-orange-500">Tout près, tout frais</h4>
      </div>
    </Link>
  );
};

export default Logo;
