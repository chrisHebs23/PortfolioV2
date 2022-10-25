import React from "react";
import axe from "./images/axe.png";

const LoadingIcon = ({ height }) => {
  return (
    <div
      className={`flex justify-center items-center w-full ${height} bg-black/30 p-lg`}
    >
      <img
        src={axe}
        alt="Spinning axe icon"
        className="w-[15%]  animate-spin-slow"
      />
    </div>
  );
};

export default LoadingIcon;
