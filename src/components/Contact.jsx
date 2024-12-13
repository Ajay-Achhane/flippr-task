import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg max-w-2xl">
      <h2 className="text-lg font-semibold text-gray-700 text-center uppercase mb-2">Contacts Us</h2>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-4">Let's Start a Conversation</h2>
      <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="info-box flex flex-col sm:flex-row justify-between bg-[#592EA9] text-white p-4 rounded-md mb-6">
        <div className="text-center mb-4 sm:mb-0 sm:mr-4">
          <p className="font-semibold">Working Hours</p>
          <hr className="my-2 border-gray-300" />
          <p>Monday to Friday</p>
          <p>9:00 AM to 8:00 PM</p>
          <p>Our Support Team is available 24/7</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">Contact Us</p>
          <hr className="my-2 border-gray-300" />
          <p>020 7993 2905</p>
          <p>hello@finsweet.com</p>
        </div>
      </div>

      <form action="#" method="post" className="space-y-4">
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          required
          className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          name="query_related"
          required
          className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Query Related</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 text-gray-800 font-semibold rounded-md hover:bg-yellow-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
