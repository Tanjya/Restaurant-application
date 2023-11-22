import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="sm:gap-5 sm:flex sm:justify-center md:flex md:justify-center md:gap-10 flex justify-center gap-20 items-center background-nav text-white font-bold">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/locations">Locations</Link>
        <img
          className="w-1/12 sm:w-1/12"
          src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
          alt=""
        />
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
