import React, { useContext } from "react";
import HireMeContext from "../../context/HireMeContext";

const HireButton = ({
  classProps = "h-hire mt-md w-hire text-para",
  children,
}) => {
  const { open, setOpen } = useContext(HireMeContext);
  return (
    <button
      type="button"
      className={`text-white bg-gradient-to-r from-green to-blue  font-body  rounded-bl-small rounded-tr-small drop-shadow-hireButton ${classProps}`}
      onClick={() => setOpen(open ? false : true)}
    >
      Hire Me
    </button>
  );
};

export default HireButton;
