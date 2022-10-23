import React from "react";

const GradientBorder = ({ children, classProps }) => {
  return (
    <div
      className={`bg-gradient-to-r p-[3px] from-green to-blue ${classProps} relative`}
    >
      {children}
    </div>
  );
};

export default GradientBorder;
