import React from "react";
import { authors } from "../data/projectData";
import AuthorCards from "../components/uiComponent/AuthorCards";
import JoinTeamSection from "../components/sections/homepage/JoinTeamSection";
import { Link } from "react-router-dom";

const About = () => {
  let doubleAuthorData = [...authors, ...authors];
  console.log(doubleAuthorData);
  return (
    <div className="max-w-8xl mx-auto">
      {/* ------------------------life of authore section----------------- */}
      <section className="my-10">
        {" "}
        <h2 className="capitalize text-3xl text-center mt-8 mb-5">
          Life of authors
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {doubleAuthorData.map((author, idx) => (
            <Link key={idx} to={author.link}>
              <AuthorCards author={author} idx={idx} />
            </Link>
          ))}
        </div>
      </section>
      {/* ------------------------------------join team section----------------- */}
      <hr className="mb-16 mt-8" />

      <JoinTeamSection />
    </div>
  );
};

export default About;
