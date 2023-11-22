import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-orange-50 p-5 ">
      <img
        className="w-20"
        src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
        alt=""
      />
      <div className="text-center pb-96">
        <center>
          {" "}
          <img
            src="https://img.icons8.com/?size=160&id=1RWURK6uUGd9&format=png"
            alt=""
          />
        </center>

        <h1 className="text-4xl font-bold p-5">SOMETHING'S WRONG HERE...</h1>
        <p className="text-gray-500 ">
          The requested URL was not found. Maybe what you are looking for can be
          found here:{" "}
          <Link className="text-red-600 underline hover:text-red-400" to="/">
            home page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
