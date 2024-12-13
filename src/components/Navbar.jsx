import React, { useState } from "react";
import { baseUrl } from "../lib/helper";
import { Link } from "react-router-dom";
import CustomButton from "./uiComponent/CustomButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="bg-[#232536] fixed top-0 right-0 z-50 w-screen lg:h-auto py-5 flex items-center justify-between px-10">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <img
            src={`${baseUrl()}/assets/client-first-images/Logo.svg`}
            alt="Logo"
            className="h-10"
          />
          <button
            className="text-white lg:hidden"
            onClick={handleMenuToggle}
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            open ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center lg:static absolute top-20 left-0 w-full lg:w-auto lg:gap-10 gap-5 bg-[#232536] lg:bg-transparent px-10 lg:px-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 pb-5 lg:pb-0">
            <li>
              <Link to="/" className="text-white hover:bg-[#FFD050] px-3 hover:px-3 hover:py-2 py-2 hover:text-[#232536] hover:rounded-lg transition-all font-bold text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white hover:bg-[#FFD050] px-3 hover:px-3 hover:py-2 py-2 hover:text-[#232536] hover:rounded-lg transition-all font-bold text-lg">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:bg-[#FFD050] px-3 hover:px-3 hover:py-2 py-2 hover:text-[#232536] hover:rounded-lg transition-all font-bold text-lg">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:bg-[#FFD050] px-3 hover:px-3 hover:py-2 py-2 hover:text-[#232536] hover:rounded-lg transition-all font-bold text-lg">
                Contact us
              </Link>
            </li>
          </ul>
          <CustomButton
            className={"bg-white lg:flex hidden"}
            btnName={"Subscribe"}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
