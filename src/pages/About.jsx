import React from "react";
import { authors } from "../data/projectData";
import AuthorCards from "../components/uiComponent/AuthorCards";
import JoinTeamSection from "../components/sections/homepage/JoinTeamSection";
import AboutLanding from "../components/sections/about/AboutLanding";
import { baseUrl } from "../lib/helper";
import { Link } from "react-router-dom";

const About = () => {
  let doubleAuthorData = [...authors, ...authors];
  console.log(doubleAuthorData);
  return (
    <div className="max-w-8xl overflow-hidden mx-auto">
      <AboutLanding />
      {/* --------------------story section-------------- */}
      <div className="bg-[#F4F4F4] lg:p-16 p-6 rounded-md before:content-[''] before:h-5 before:w-full before:relative before:flex ">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              About us
            </h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We are a community of content writers who share their learnings
            </h2>
            <p className="text-gray-600 mb-4">
              Every week, writers from our community share their expertise and
              experiences, helping others grow through detailed insights and
              practical advice.
            </p>
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-gray-700 inline-flex items-center"
            >
              Read More &gt;
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Our mission
            </h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Creating valuable content for creatives all around the world
            </h2>
            <p className="text-gray-600 mb-4">
              We believe in the power of shared knowledge and experiences. Our
              platform enables creatives to connect, learn, and grow together
              through meaningful content.
            </p>
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-gray-700 inline-flex items-center"
            >
              Read More &gt;
            </a>
          </div>
        </div>
      </div>
      {/* ----------------------------story 1----------------------- */}
      <div className="max-w-8xl mx-auto lg:flex-row flex-col-reverse justify-center gap-x-12  flex items-center mt-24">
        <div className="lg:w-1/2 w-11/12 p-3 flex flex-col gap-y-4">
          <h1 className="text-4xl">Our team of creatives</h1>
          <h3 className="font-semibold text-2xl">
            Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet,
            consecteturLorem ipsum dolor sit amet, consectetur
          </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur
            Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum
            dolor sit amet, consecteturLorem ipsum dolor sit amet,
            consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor
            sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem
            ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className="h-[350px]">
          <img
            className="h-full"
            src={`${baseUrl()}/assets/client-first-images/ground-group-growth-hands-461049.svg`}
            alt="image-hand-shake"
          />
        </div>
      </div>
      {/* ----------------------------story 2----------------------- */}
      <div className="max-w-8xl mx-auto lg:flex-row-reverse flex-col-reverse justify-center gap-x-12  flex items-center mt-24">
        <div className="lg:w-1/2 w-11/12 p-3 flex flex-col gap-y-4">
          <h1 className="text-4xl">Why we started this blog</h1>
          <h3 className="font-semibold text-2xl">
            Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet,
            consecteturLorem ipsum dolor sit amet, consectetur
          </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur
            Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum
            dolor sit amet, consecteturLorem ipsum dolor sit amet,
            consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor
            sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem
            ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className="h-[350px]">
          <img
            className="h-full"
            src={`${baseUrl()}/assets/client-first-images/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.svg`}
            alt="image-hand-shake"
          />
        </div>
      </div>

      {/* ------------------------life of authore section----------------- */}
      <section className="mb-10 mt-16">
        {" "}
        <h2 className="capitalize text-3xl text-center mt-8 mb-5">
          Life of authors
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {doubleAuthorData.map((author, idx) => (
            <Link key={idx} to={author.link}>
              <AuthorCards author={author} />
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
