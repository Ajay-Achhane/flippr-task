import React from "react";
import { baseUrl } from "../../../lib/helper";
import AuthorCards from "../../uiComponent/AuthorCards";
import { authors, featuredLogos } from "../../../data/projectData";
import { Link } from "react-router-dom";

const AuthorsSection = () => (
  <section className="container mx-auto px-4 py-16">
    <h2 className="text-2xl font-bold text-center mb-12">
      Our Featured Authors
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {authors.map((author,idx) => (
        <Link key={idx} to={author.link}>
        <AuthorCards author={author} />
        </Link>
      ))}
    </div>
    <div className="text-center flex gap-5 justify-between items-start">
      <p className="text-gray-600 text-left ">
        we are <br />
        <h5 className="font-extrabold text-xl">Featured in</h5>
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {featuredLogos.map((logo) => (
          <div
            key={logo.name}
            className="grayscale opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src={logo.image}
              alt={`${logo.name} logo`}
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AuthorsSection;
