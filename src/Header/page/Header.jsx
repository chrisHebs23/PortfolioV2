import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import HireButton from "../../Shared/components/HireButton";
import logo from "../components/images/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState("hidden");
  const [animate, setAnimate] = useState("rotate-0");

  const links = [
    { name: "Home", link: "/" },
    { name: "Portfolio", link: "/portfolio" },
    // { name: "Blog", link: "/blog" },
  ];

  let location = useLocation();

  const setAnimation = () => {
    if (open) {
      setTimeout(() => {
        setAnimate("animate-rotateDown rotate-0");
        setDisplay("hidden");
      }, 200);
    }
    setAnimate("animate-rotateUp rotate-90");
    setDisplay("flex");
  };

  return (
    <div className="h-hire border-b-blue border-b-2 drop-shadow-headerBox relative z-10 w-full ">
      <div className="bg-white h-[99%] w-full">
        <div className="relative flex flex-row items-center mx-xsm md:mx-md  justify-between z-0">
          <NavLink to="/">
            <div>
              <img src={logo} alt="Chris Heberden's logo" className="h-hire" />
            </div>
          </NavLink>

          <button
            onClick={() => {
              setAnimation();
              setOpen(open ? false : true);
            }}
            className={`${animate} md:hidden`}
          >
            <svg
              width="34"
              height="18"
              viewBox="0 0 34 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H32"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M12 9H32"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M22 16H32"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            className={`${
              open
                ? "animate-slideIn md:animate-none"
                : "  md:animate-slideOut md:animate-none"
            } ${display} p-sm flex-col fixed right-0 top-[60px] z-30 w-[50%] h-[200px] bg-gray-400  justify-between  md:static md:flex md:flex-row md:bg-transparent md:w-auto md:h-hire  md:z-auto md:justify-end md:items-center `}
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                className={`md:mx-sm text-error font-body ${
                  location.pathname === link.link ? "underline" : ""
                }`}
                to={link.link}
                onClick={() => {
                  setAnimation();
                  setOpen(open ? false : true);
                }}
              >
                {link.name}
              </NavLink>
            ))}
            <HireButton classProps="h-[35] md:w-[120px] text-error " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
