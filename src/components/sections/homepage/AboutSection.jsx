import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-[#F4F4F4] lg:p-16 p-6 rounded-md before:content-[''] before:h-5 before:w-full before:relative before:flex assetLine">
      <div className="grid md:grid-cols-2 gap-12">
        <div data-aos="fade-right" data-aos-offset="200">
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
        <div data-aos="fade-left" data-aos-offset="200">
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
  );
};

export default AboutSection;
