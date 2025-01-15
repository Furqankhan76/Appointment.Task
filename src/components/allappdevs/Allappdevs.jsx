import React from "react";
import { Link } from "react-router-dom";

function Allappdevs() {
  const developers = [
    {
      id: 1,
      name: "Furqan khan",
      avatar:
        "https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Loki-icon.png",
      bio: "Trainee",
    },
    {
      id: 2,
      name: "Syed Yaseen",
      avatar: "https://via.placeholder.com/100",
      bio: "Lead App Developer",
    },
    {
      id: 3,
      name: "Alice Johnson",
      avatar: "https://via.placeholder.com/100",
      bio: "Backend Developer with 7+ years of experience",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-6">
        Meet Our Developers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((dev) => (
          <div
            key={dev.id}
            className="p-6 flex flex-col items-center bg-gray-200 dark:bg-gray-700 rounded-xl shadow-lg dark:shadow-[#2a2a2a]/50 transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-[#e4212a]/50 dark:hover:shadow-[#e4212a]/50"
          >
            <img
              src={dev.avatar}
              alt={dev.name}
              className="w-24 h-24 rounded-full mb-4 shadow-md dark:shadow-[#1a1a1a]"
            />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
              {dev.name}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center mt-2">
              {dev.bio}
            </p>
            <Link
              to="/furqan"
              className="mt-4 bg-[#e4212a] dark:bg-[#e4212a] text-white py-2 px-4 rounded-md shadow-md dark:shadow-[#1a1a1a] transition-all duration-300 transform hover:scale-105 hover:bg-[#d01c1f] dark:hover:bg-[#d01c1f] focus:outline-none focus:ring-2 focus:ring-[#e4212a] focus:ring-opacity-50"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allappdevs;
