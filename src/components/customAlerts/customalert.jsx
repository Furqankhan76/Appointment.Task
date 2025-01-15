import React from "react";

const CustomAlert = ({ message, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center px-4 justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <p className="text-gray-800 dark:text-gray-200 text-center mb-4">
          {message}
        </p>
        <div className="flex justify-center">
          <button
            onClick={onConfirm}
            className="bg-[#e4212a] hover:bg-[#d01c1f] text-white font-bold py-3 px-7 rounded-md"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
