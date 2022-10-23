import React, { useContext } from "react";
import HireMeContext from "../../context/HireMeContext";
import lights from "../components/images/lights.jpg";
import GradientBorder from "../../Shared/components/GradientBorder";
import HireMeForm from "../components/HireMeForm";

const HireMe = () => {
  const { open, setOpen } = useContext(HireMeContext);

  if (open) {
    return (
      <div className="fixed z-30 w-full h-full flex items-center justify-center  ">
        <div
          onClick={() => setOpen()}
          className="fixed z-30 w-full h-full bg-black/30 cursor-pointer"
        ></div>
        <GradientBorder classProps="relative z-50  w-[95%] h-[90%]  md:w-[65%] md:h-[75%] rounded-bl-big rounded-tr-big ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-icon h-icon absolute -right-1 -top-1 text-white hover:text-rose-500 focus:text-rose-600"
            onClick={() => setOpen()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div
            className=" w-full h-full bg-cover bg-center rounded-bl-big rounded-tr-big"
            style={{ backgroundImage: `url(${lights})` }}
          >
            <div className="bg-black/60 md:bg-transparent md:bg-gradient-to-r md:from-black h-full  rounded-tr-big rounded-bl-big flex items-center ">
              <div className="p-sm w-full lg:w-[55%] h-full md:h-auto overflow-y-scroll md:overflow-y-auto rounded-bl-big rounded-tr-big my-auto">
                <h2 className="font-title font-bold text-subHeaderM md:text-subHeader mb-sm text-white">
                  Need a website? I would love to help bring that website to
                  life!
                </h2>
                <HireMeForm />
              </div>
            </div>
          </div>
        </GradientBorder>
      </div>
    );
  }
};

export default HireMe;
