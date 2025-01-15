//default

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

function Appdevs() {
  const calendarLink =
    "https://calendar.google.com/calendar/embed?src=furqan%40standardtouch.com&ctz=Asia%2FKolkata";

  const [showCalendar, setShowCalendar] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const navigate = useNavigate();

  // Google Login Hook
 const googleLogin = useGoogleLogin({
   onSuccess: (response) => {
     const { access_token } = response;

     // Save token and expiry (8 days)
     localStorage.setItem("google_access_token", access_token);
     localStorage.setItem(
       "google_access_token_expiry",
       Date.now() + 8 * 24 * 60 * 60 * 1000 // 8 days in milliseconds
     );

     setUserToken(access_token);
     navigate("/book-appointment");
   },
   onError: (error) => {
     console.error("Google Login Failed:", error);
   },
   scope:
     "openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.events",
   clientId: import.meta.env.VITE_CLIENTID , // Add your client ID
 });


  // Check for stored token on load
  useEffect(() => {
    const storedToken = localStorage.getItem("google_access_token");
    const storedExpiry = localStorage.getItem("google_access_token_expiry");

    if (
      storedToken &&
      storedExpiry &&
      Date.now() < parseInt(storedExpiry, 10)
    ) {
      setUserToken(storedToken); // Reuse valid token
    } else {
      localStorage.removeItem("google_access_token");
      localStorage.removeItem("google_access_token_expiry");
    }
  }, []);

  const handleBookAppointment = () => {
    if (userToken) {
      navigate("/book-appointment"); // Token is valid, proceed directly
    } else {
      googleLogin(); // Start login flow
    }
  };

  return (
    <div className="lg:py-10 min-h-screen px-6 bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
      <div className="max-w-5xl mt-6 w-full mx-auto p-6 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl">
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          {/* Developer Information Section */}
          <div className="flex-1 basis-1/2">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                John Doe
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                App Developer | 5+ years experience
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
                I specialize in building modern web and mobile applications
                using cutting-edge technologies.
              </p>

              {/* Contact Information */}
              <div className="text-base text-gray-700 dark:text-gray-300 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Contact Information
                </h3>
                <p>
                  <strong>Email:</strong> developer_email@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (123) 456-7890
                </p>
              </div>

              {/* Skills */}
              <div className="text-base text-gray-700 dark:text-gray-300 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Skills
                </h3>
                <p>
                  HTML, CSS, JavaScript, React, Node.js, Express, MongoDB,
                  Firebase, Tailwind CSS, Responsive Web Design
                </p>
              </div>

              {/* Buttons */}
              <div className="w-full flex justify-center space-x-4 mt-6">
                <button
                  onClick={() => setShowCalendar((prev) => !prev)}
                  className="bg-[#e4212a] dark:bg-[#d01c1f] text-white py-1 px-3 md:py-3 md:px-6 rounded-lg shadow-lg hover:bg-[#d01c1f] dark:hover:bg-[#c01b1e] transition-colors duration-300 transform hover:scale-105"
                >
                  {showCalendar ? "Hide Calendar" : "Check My Calendar"}
                </button>

                <button
                  onClick={handleBookAppointment}
                  className="bg-green-500 dark:bg-green-700 text-white py-2 px-3 md:py-3 md:px-6 rounded-lg shadow-lg hover:bg-green-600 dark:hover:bg-green-800 transition-colors duration-300 transform hover:scale-105"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          {showCalendar && (
            <div className="flex-1 basis-1/2 mt-6 sm:mt-0 bg-white dark:bg-gray-800 rounded-lg border shadow-lg overflow-hidden">
              <iframe
                src={calendarLink}
                title="Developer's Calendar"
                className="w-full h-[300px] sm:h-full md:h-full"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appdevs;
