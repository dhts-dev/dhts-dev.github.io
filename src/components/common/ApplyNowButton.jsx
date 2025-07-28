import React from "react";
import { useNavigate } from "react-router-dom";

const ApplyNowButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/candidate-application"); // change to your route
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-lg rounded-full shadow-xl px-6 py-3 hover:scale-105 transition-transform duration-300 z-50"
    >
      Book Now
    </button>
  );
};

export default ApplyNowButton;
