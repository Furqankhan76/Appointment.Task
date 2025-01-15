import React from "react";
import { Link } from "react-router-dom";

function Departments() {
  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-800">
        {/* Header Text */}
        <div className="text-3xl text-center py-8 sm:py-0 sm:pt-11  text-gray-900 dark:bg-gray-800 dark:text-gray-100">
          Book an appointment from which branch you wanted!
        </div>
      </div>

      {/* Department Cards */}
      <div className="flex items-center justify-around py-9 pb-16 bg-gray-100 dark:bg-gray-800">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full px-12">
          {/* App Development Card */}
          <Link
            to="/appdevs"
            className="h-52 bg-gray-200 dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center text-gray-900 shadow-2xl transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#e4212a]/50 dark:text-gray-100"
          >
            <img
              className="h-12 w-12 mb-2"
              src="https://cdn-icons-png.flaticon.com/512/5738/5738031.png"
              alt="App Development"
            />
            <h1 className="font-extrabold text-center mb-4">App Development</h1>
            <button
              type="button"
              className="bg-[#e4212a] dark:bg-[#e4212a] mt-2 rounded-md py-2 px-3 flex items-center transition-all duration-300 transform hover:scale-105 hover:bg-[#d01c1f] dark:hover:bg-[#d01c1f] active:scale-95 active:bg-[#c01b1e] dark:active:bg-[#c01b1e] focus:outline-none focus:ring-2 focus:ring-[#e4212a] focus:ring-opacity-50"
            >
              <span className="mr-2">Continue</span>
              <svg
                className="w-5"
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
          </Link>

          {/* ERP Card */}
          <div className="h-52 bg-gray-200 dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center text-gray-900 shadow-2xl transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#e4212a]/50 dark:text-gray-100">
            <img
              className="h-12 w-12 mb-2"
              src="https://cdn-icons-png.flaticon.com/512/993/993854.png"
              alt="ERP"
            />
            <h1 className="font-extrabold text-center mb-4">
              Enterprise Resource Planning
            </h1>
            <button
              type="button"
              className="bg-[#e4212a] dark:bg-[#e4212a] mt-2 rounded-md py-2 px-3 flex items-center transition-all duration-300 transform hover:scale-105 hover:bg-[#d01c1f] dark:hover:bg-[#d01c1f] active:scale-95 active:bg-[#c01b1e] dark:active:bg-[#c01b1e] focus:outline-none focus:ring-2 focus:ring-[#e4212a] focus:ring-opacity-50"
            >
              <span className="mr-2">Continue</span>
              <svg
                className="w-5"
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

          {/* Web Development Card */}
          <div className="h-52 bg-gray-200 dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center text-gray-900 shadow-2xl transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#e4212a]/50 dark:text-gray-100">
            <img
              className="h-12 w-12 mb-2"
              src="https://cdn-icons-png.flaticon.com/512/11096/11096817.png"
              alt="Web Development"
            />
            <h1 className="font-extrabold text-center mb-4">Web Development</h1>
            <button
              type="button"
              className="bg-[#e4212a] dark:bg-[#e4212a] mt-2 rounded-md py-2 px-3 flex items-center transition-all duration-300 transform hover:scale-105 hover:bg-[#d01c1f] dark:hover:bg-[#d01c1f] active:scale-95 active:bg-[#c01b1e] dark:active:bg-[#c01b1e] focus:outline-none focus:ring-2 focus:ring-[#e4212a] focus:ring-opacity-50"
            >
              <span className="mr-2">Continue</span>
              <svg
                className="w-5"
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

          {/* Digital Marketing Card */}
          <div className="h-52 bg-gray-200 dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center text-gray-900 shadow-2xl transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#e4212a]/50 dark:text-gray-100">
            <img
              className="h-12 w-12 mb-2"
              src="https://cdn-icons-png.flaticon.com/512/3701/3701680.png"
              alt="Digital Marketing"
            />
            <h1 className="font-extrabold text-center mb-4">
              Digital Marketing
            </h1>
            <button
              type="button"
              className="bg-[#e4212a] dark:bg-[#e4212a] mt-2 rounded-md py-2 px-3 flex items-center transition-all duration-300 transform hover:scale-105 hover:bg-[#d01c1f] dark:hover:bg-[#d01c1f] active:scale-95 active:bg-[#c01b1e] dark:active:bg-[#c01b1e] focus:outline-none focus:ring-2 focus:ring-[#e4212a] focus:ring-opacity-50"
            >
              <span className="mr-2">Continue</span>
              <svg
                className="w-5"
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
        </div>
      </div>
    </div>
  );
}

export default Departments;
