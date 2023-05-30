import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed z-10 w-full">
      <div className="h-19 mx-auto flex w-[100vw] max-w-[1400px] items-center justify-between bg-black px-4 py-5 text-white md:p-10">
        <h1 className="w-full text-2xl font-bold text-brand  md:text-3xl">
          MCU
        </h1>
        <ul className="flex justify-between gap-3">
          <li className="w-max">
            <Link
              to="/"
              className="w-fit cursor-pointer rounded border border-brand p-1 text-[14px] transition-all hover:border-brand hover:text-brand md:p-2 md:font-bold"
            >
              Movies
            </Link>
          </li>
          <li className="w-max">
            <Link
              to="/About"
              className="w-fit cursor-pointer rounded border border-gray-600 p-1 text-[14px] transition-all hover:border-brand hover:text-brand md:p-2 md:font-bold"
            >
              Tv Shows
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
