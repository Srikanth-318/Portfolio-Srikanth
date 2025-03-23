import React, { useState } from "react";
import { RiMegaphoneFill } from "react-icons/ri";

const HireMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSubmitted(true);

    
    e.target.reset();

    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="container mx-auto px-5 sm:px-8 md:px-16 pt-20 md:pt-28">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold  flex  items-end gap-3">
        <RiMegaphoneFill className="text-gray-500 mb-1" />
        Hire Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <form
          onSubmit={handleSubmit}
          className="text-lg text-gray-200 flex flex-col gap-5 w-full bg-[#1A202C] p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="Name"
            required
            placeholder="Full Name"
            className="bg-[#1D2430] rounded-md px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            name="Email"
            required
            placeholder="Email Address"
            className="bg-[#1D2430] rounded-md px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="tel"
            name="Phone"
            required
            placeholder="Phone Number"
            className="bg-[#1D2430] rounded-md px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            name="Message"
            required
            placeholder="Your Message"
            rows="5"
            className="bg-[#1D2430] rounded-md px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="flex flex-row items-center gap-4 mt-4">
            <button
              type="submit"
              className="px-10 py-2 rounded-lg bg-green-600 active:bg-green-700 hover:bg-green-500 transition w-[50%] md:w-auto"
            >
              Submit
            </button>

            <button
              type="reset"
              className="px-10 py-2 rounded-lg bg-gray-600 active:bg-gray-700 hover:bg-gray-500 w-[50%] md:w-auto"
            >
              Reset
            </button>
          </div>

          
          {isSubmitted && (
            <p className="text-green-500 text-center mt-4">Form Submitted Successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default HireMe;