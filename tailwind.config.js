/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#A9D570",
        blue: "#69CCC4",
        grayM: "#3D3D3D",
      },
      dropShadow: {
        poster: "0px 9px 4px rgba(0, 0, 0, 0.25)",
        hireButton: "0px 4px 4px rgba(169, 213, 112, 0.5)",
        button: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        inputBox: " 0px 4px 4px rgba(111, 205, 189, 1)",
        headerBox: " 0px 1px 2px rgba(111, 205, 189, 1)",
      },
      backgroundColor: {
        "black-gradient":
          "linear-gradient(360deg, #000000 52.97%, rgba(0, 0, 0, 0) 81.89%)",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0%)",
          },
        },
        slideOut: {
          "0%": {
            opacity: "1",
            transform: "translateX(50%)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(120%)",
          },
        },
        rotateUp: {
          "0%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(90.0deg)" },
        },
        rotateDown: {
          "0%": { transform: "rotate(90.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-in",
        slideOut: "slideOut 0.3s ease-out",
        rotateUp: "rotateUp 0.3s linear",
        rotateDown: "rotateDown 0.3s linear",
      },
    },
    fontFamily: {
      header: ["Lato", "sans-serif"],
      body: ["Roboto", "sans-serif"],
    },
    fontSize: {
      title: ["48px", "57px"],
      titleM: ["40px", "48px"],
      subHeader: ["36px", "42px"],
      subHeaderM: ["32px", "39px"],
      projectTitle: ["26px", "31px"],
      // paragraph font size
      para: ["24px", "40px"],
      // par
      paraM: ["20px", "35px"],
      error: ["18px", "30px"],
    },
    margin: {
      xsm: "5px",
      sm: "15px",
      md: "30px",
      lg: "60px",
      xlg: "90px",
      xxlg: "120px",
      auto: "auto",
    },
    padding: {
      xsm: "5px",
      sm: "15px",
      md: "30px",
      lg: "60px",
      xlg: "90px",
      xxlg: "120px",
      auto: "auto",
    },
    width: {
      icon: "45px",
      // Hire button width
      hire: "170px",
      // regular button width
      btn: "165px",
      full: "100%",
      half: "50%",
    },
    height: {
      // Hire button height
      hire: "60px",
      // regular button height
      btn: "50px",
      smallBtn: "40px",
      input: "45px",

      full: "100%",
      half: "50%",
    },
    borderRadius: {
      big: "60px",
      medium: "30px",
      small: "15px",
    },
  },
  plugins: [],
};
