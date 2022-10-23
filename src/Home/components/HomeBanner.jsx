/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import HireButton from "../../Shared/components/HireButton";
import vaulknut from "./images/vaulknut.svg";
import heroImage from "./images/Hero-Image.png";

import WaveImage from "./WaveImage";

const HomeBanner = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-700 max-h-full ">
      <div
        className=" h-full mb-lg bg-opacity-10  "
        style={{ backgroundImage: `url(${vaulknut})` }}
      >
        <div className="flex flex-col-reverse justify-start md:justify-between md:flex-row  w-full  md:bg-center bg-cover bg-no-repeat md:items-center ">
          {/* Home page text */}
          <div className="md:w-[40%] mx-xsm md:mx-md mb-sm -mt-lg md:mt-md">
            <h1 className="font-header font-black text-titleM md:text-title mb-md text-white ">
              Hi, my name is Chris Heberden, a Freelance Web Developer.
            </h1>
            <p className="font-body font-normal text-para md:text-para text-white lg:w-[65%]">
              I design and build websites. If you need a new website or want to
              improve the old one, click the button below and let us solve that
              problem.
            </p>
            <HireButton />
          </div>
          <div className="w-full mt-sm  md:basis-2/4  flex justify-center  md:justify-end">
            <img
              src={heroImage}
              alt="Hero image of Chris Heberden"
              className="max-w-[330px] md:w-full md:max-w-none lg:w-[70%] h-auto  "
            />
          </div>
        </div>
        <WaveImage />
      </div>
    </div>
  );
};

export default HomeBanner;
