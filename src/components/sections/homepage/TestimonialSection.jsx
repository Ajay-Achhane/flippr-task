import React, { useState } from "react";
import { baseUrl } from "../../../lib/helper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TestimonialData } from "../../../data/projectData";

const TestimonialCard = ({ data, key }) => {
  return (
    <>
      <div key={key} className="flex items-center gap-3">
        <img
          src={data?.image}
          alt={data?.memberName}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <h3 className="font-semibold">{data?.memberName}</h3>
          <p className="text-sm text-gray-600">{data?.address}</p>
        </div>
      </div>
    </>
  );
};

const TestimonialSection = () => {
  const [start, setStart] = useState(0);
  return (
    <div className="bg-[#FEF6F0] p-8 md:p-16 rounded-lg mb-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <span className="text-gray-600 uppercase tracking-wider text-sm font-semibold">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            What people say about our blog
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div className="space-y-6">
          {/* ---------------------------peoples Testimonials messages------------------ */}

          {TestimonialData.slice(start, start + 1).map((feedback, idx) => (
            <>
              {" "}
              <p className="text-gray-800 text-lg">
               {feedback.message}
              </p>
              <TestimonialCard data={feedback} key={idx} />
            </>
          ))}

          <div className="flex items-center justify-end">
            <div className="flex gap-2">
              <button
                onClick={() => setStart(start - 1)}
                disabled={start === 0}
                className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors"
              >
                <FaArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setStart(start + 1)}
                disabled={start === TestimonialData.length - 1}
                className="p-2 rounded-full bg-[#232536] text-white hover:bg-gray-800 transition-colors"
              >
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
