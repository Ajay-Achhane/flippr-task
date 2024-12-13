import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const AuthorCards = ({ author,idx }) => {
  return (
    <div data-aos="zoom-in" key={idx} className="bg-gray-50 hover:bg-[#ffd05069] hover:-translate-y-3 duration-300 cursor-pointer p-6 rounded-lg text-center">
      <div className="mb-4">
        <img
          src={author?.image}
          alt={author?.name}
          width={96}
          height={96}
          className="rounded-full mx-auto"
        />
      </div>
      <h3 className="font-semibold mb-3">{author.name}</h3>
      <div className="flex justify-center gap-3">
        {author &&
          author?.socials.map((social) => (
            <a
              key={social}
              href={`https://www.${social}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              aria-label={`Visit ${social} profile`}
            >
              {React.createElement(socialIcons[social], {
                className: "w-4 h-4 text-gray-600 hover:text-gray-900",
              })}
            </a>
          ))}
      </div>
    </div>
  );
};
const socialIcons = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    instagram: FaInstagram,
    linkedin: FaLinkedin,
  };
export default AuthorCards;
