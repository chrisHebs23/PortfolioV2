import React from "react";

const WaveImage = () => {
  return (
    <svg
      className="w-full h-full  "
      viewBox="0 0 1440 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_489_328)">
        <path
          d="M0 64L60 53.3C120 43 240 21 360 10.7C480 -2.86102e-06 600 -2.86102e-06 720 10.7C840 21 960 43 1080 42.7C1200 43 1320 21 1380 10.7L1440 0V256H1380C1320 256 1200 256 1080 256C960 256 840 256 720 256C600 256 480 256 360 256C240 256 120 256 60 256H0V64Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_489_328"
          x="0"
          y="0"
          width="1440"
          height="266"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_489_328"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default WaveImage;
