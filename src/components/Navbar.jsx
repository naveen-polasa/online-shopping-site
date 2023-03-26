import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="py-3 h-[70px] border-b">
      <div className="flex justify-between px-5 max-w-7xl mx-auto">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32" />
        </Link>
        <div className="flex items-center gap-x-12 capitalize px-6 text-xl">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="flex gap-x-6 items-center">
          <Link to="/cart" className="flex gap-2 items-center  font-semibold ">
            <span className="text-xl"> Cart </span>
            <span className="relative">
              <FaShoppingCart size="24px" />
              <span className="absolute -top-3 -right-3 bg-yellow-400 rounded-full px-1">
                2
              </span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
