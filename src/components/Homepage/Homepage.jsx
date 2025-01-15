import React from "react";
import { Link } from "react-router-dom";
import BlurText from "../../blocks/TailwindTextAnimations/BlurText/BlurText";

function Homepage() {
  
  // const fk = console.log(import.meta.env.VITE_CLIENTID);

  return (
  
    <div className="bg-gray-100 dark:bg-gray-800 text-center py-12 px-6">
      {/* Centered BlurText */}
      <div className="flex justify-center items-center mb-6">
        <BlurText
          text={
            <>
              Welcome to <span className="text-[#e4212a]">Standard</span>Touch
            </>
          }
          delay={1000}
          animateBy="words"
          direction="top"
          className="text-3xl font-bold text-gray-900 dark:text-gray-100"
        />
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Your trusted partner for innovative IT solutions. We specialize in:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Service Boxes */}
        {[
          "Custom Software Development",
          "Web & App Design",
          "Digital Marketing",
          "Cloud Solutions",
        ].map((service) => (
          <div
            key={service}
            className="bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center h-24 shadow-lg dark:shadow-gray-800 "
          >
            <p className="text-gray-800 dark:text-gray-300 font-medium text-center">
              {service}
            </p>
          </div>
        ))}
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300">
        Empowering businesses with cutting-edge technology and client-focused
        services. Let's create something extraordinary together!
      </p>

      <div className="flex flex-wrap justify-around gap-6 mt-8 p-4">
        {/* Book Appointment Card */}
        <Link
          to="/departments"
          className="p-5 flex flex-col items-center justify-end rounded-xl bg-gray-200 shadow-2xl dark:bg-gray-700 w-full sm:w-80 md:w-96 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#e4212a]/50"
        >
          <div>
            <h1 className="mt-3 text-2xl text-center text-gray-900 dark:text-white">
              Book an appointment with our Experts
            </h1>
          </div>
          <div className="mt-6">
            <button
            
              type="button"
              className="bg-[#e4212a] dark:bg-[#e4212a] mt-2 rounded-md py-2 px-3 flex flex-row align-middle items-center transition-all duration-300 transform hover:scale-105 hover:bg-[#d01c1f] dark:hover:bg-[#d01c1f] active:scale-95 active:bg-[#c01b1e] dark:active:bg-[#c01b1e] focus:outline-none focus:ring-2 focus:ring-[#e4212a] focus:ring-opacity-50"
            >
              <span className="mr-2 text-white">Continue</span>
              <svg
                className="w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </Link>

        {/* Support Card */}
        <a
          href="mailto:contact@standardtouch.com"
          className="p-5 flex flex-col items-center justify-end rounded-xl bg-gray-200 shadow-2xl dark:bg-gray-700 w-full sm:w-80 md:w-96 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#e4212a]/50"
        >
          <div>
            <h1 className="mt-3 text-2xl text-center text-gray-900 dark:text-white">
              Get Support from our team
            </h1>
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="bg-[#e4212a] dark:bg-[#e4212a] mt-2 rounded-md py-2 px-3 flex flex-row align-middle items-center transition-all duration-300 transform hover:scale-105 hover:bg-[#d01c1f] dark:hover:bg-[#d01c1f] active:scale-95 active:bg-[#c01b1e] dark:active:bg-[#c01b1e] focus:outline-none focus:ring-2 focus:ring-[#e4212a] focus:ring-opacity-50"
            >
              <span className="mr-2 text-white">Continue</span>
              <svg
                className="w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Homepage;
