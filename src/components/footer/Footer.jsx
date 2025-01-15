import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="border-t py-6 pb-11 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700">
        <div className="pt-6">
          <h1 className="text-xl text-center font-bold text-gray-900 dark:text-white">
            Follow our Social Media Accounts
          </h1>
          <div className="mt-4  sm:flex-row flex justify-center flex-wrap gap-5 sm:gap-9 items-center">
            <div>
              <a
                target=""
                rel="noopener noreferrer"
                href=""
                className="text-blue-600 dark:text-gray-300 dark:hover:text-blue-600 transition-colors"
              >
                <FaFacebook className="h-11 w-11" />
              </a>
            </div>

            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/standardtouch/"
                className="text-pink-600  dark:text-gray-300 dark:hover:text-pink-500 transition-colors"
              >
                <FaInstagram className="h-11 w-11" />
              </a>
            </div>

            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/standard-touch/posts/?feedView=all"
                className=" text-blue-700 dark:text-gray-300 dark:hover:text-blue-700 transition-colors"
              >
                <FaLinkedin className="h-11 w-11" />
              </a>
            </div>

            <div>
              <a
                href=""
                target=""
                rel="noopener noreferrer"
                className="text-black dark:text-gray-300 dark:hover:text-gray-900 transition-colors"
              >
                <FaXTwitter className="h-11 w-11" />
              </a>
            </div>

            <div>
              <a
                href="https://www.youtube.com/@StandardTouchWeb"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-red-600 dark:text-gray-300 dark:hover:text-red-600"
              >
                <FaYoutube className="h-11 w-11" />
              </a>
            </div>
          </div>

          <div className="text-center mt-6 text-gray-700 dark:text-gray-400">
            Copyright Standard Touch | e – Solutions | All rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
