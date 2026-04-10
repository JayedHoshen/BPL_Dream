import React from "react";
import dollarImg from "../../assets/dollar_1.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn flex gap-2 justify-center items-center">
          0 Coins
          <img src={dollarImg} alt="dollar" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
