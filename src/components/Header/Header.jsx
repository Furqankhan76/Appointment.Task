import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Header() {
  const [isDarkMode, setDarkMode] = useState(false);

  // Load theme from localStorage and apply it
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    const newTheme = checked ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="flex sticky z-50 top-0 p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 justify-between items-center">
      {/* Centered Company Name */}
      <Link
        to="/"
        className="text-lg sm:text-2xl font-extrabold text-gray-900 dark:text-white"
      >
        <span className="text-[#e4212a]">Standard</span>Touch
      </Link>

      {/* DarkModeSwitch Component */}
      <DarkModeSwitch
        style={{ marginRight: "1rem" }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </header>
  );
}

export default Header;
