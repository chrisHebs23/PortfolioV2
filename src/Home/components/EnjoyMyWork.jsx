import React from "react";

import HireButton from "../../Shared/components/HireButton";
import paddle from "./images/paddle.jpg";

const EnjoyMyWork = () => {
  return (
    <div
      className="bg-no-repeat w-full h-[704px] bg-cover bg-top md:bg-right-top rounded-tr-big border-t-4 border-green "
      style={{ backgroundImage: `url(${paddle})` }}
    >
      <div className="flex flex-col d justify-end md:justify-center bg-gradient-to-t md:bg-gradient-to-r from-black   h-[700px] ">
        <div className="md:w-[40%] mx-sm md:ml-md mb-md">
          <h2 className="font-title font-bold text-subHeaderM md:text-subHeader mb-sm text-white">
            Enjoy my work?
          </h2>
          <p className="font-body text-paraM md:text-para text-white">
            In need of a web developer? I am more than happy to be that web
            developer. I can Design, Develop and Deploy your website.
            <br />
            <br />
            If I don't reply immediately, I am out on the water enjoying a swim
            or I am just busy. I will get back to you as soon as possible.
          </p>
          <HireButton />
        </div>
      </div>
    </div>
  );
};

export default EnjoyMyWork;
