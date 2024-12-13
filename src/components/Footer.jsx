import React from "react";
import { baseUrl } from "../lib/helper";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#232536] p-6 md:p-10">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div>
          <img
            src={`${baseUrl()}/assets/client-first-images/Logo.svg`}
            alt="Logo"
            className="h-10"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-10">
            <li>
              <Link to="/" className="text-white font-bold text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white font-bold text-lg">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white font-bold text-lg">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white font-bold text-lg">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/privacy_policy" className="text-white font-bold text-lg">
                Privacy Policy
              </Link>
            </li>
          </ul>
          {/* <button className="bg-white text-[#232536] font-bold text-lg px-5 py-2 rounded-md">
            Subscribe
          </button> */}
        </div>
      </div>

      <div className="bg-[#4C4C4C] rounded-md flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 mt-6 space-y-6 lg:space-y-0">
        <div>
          <h1 className="text-white font-bold text-[24px] md:text-[36px] text-center lg:text-left">
            Subscribe to our newsletter to get <br className="hidden md:block" /> latest updates and news
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-7">
          <input
            type="text"
            className="px-5 py-2 rounded-md bg-[#4C4C4C] border border-[#6D6E76] w-full sm:w-auto"
            placeholder="Enter your email"
          />
          <button className="bg-[#FFD050] text-[#232536] font-bold text-lg px-5 py-2 rounded-md w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-6 space-y-6 md:space-y-0">
        <div className="text-white text-center md:text-left">
          <p>Finstreet 118 2561 Fintown</p>
          <p>Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-10">
          <ul className="flex gap-4 md:gap-10">
            <li>
              <Link to="#" className="text-white font-bold text-lg">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white font-bold text-lg">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white font-bold text-lg">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white font-bold text-lg">
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
