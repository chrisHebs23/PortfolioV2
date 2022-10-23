import React, { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import HireMeContext from "../../context/HireMeContext";

const HireMeForm = () => {
  const form = useRef();
  const [errorMessage, setMessage] = useState({});
  const [disabled, setDisabled] = useState(false);
  const { setOpen } = useContext(HireMeContext);

  //   label and input styles
  const labelStyle = "  font-header text-para text-white font-normal ";
  const universalStyle =
    " bg-white/60 w-full rounded-small drop-shadow-inputBox  p-xsm placeholder:italic placeholder:text-gray-600/55 ";
  const noErrorStyle = " border-blue border-2 h-input";
  const errorInputStyles = " border-rose-500 border-2 ";
  const textareaStyle = "h-[70%] p-sm resize-none";

  const handleValidation = (form) => {
    let errors = {};
    // validate Name
    if (!form.Name.value) {
      errors.name = "Name is required.";
    }
    // validate Message
    if (!form.Message.value) {
      errors.message = "Message is required.";
    }
    // // validate email is the right format
    if (!/\S+@\S+\.\S+/.test(form.Email.value) || !form.Email.value) {
      errors.email = "Please enter a valid email address";
    }

    return errors;
  };

  // handle send and validation of input
  const handleSend = (e) => {
    setDisabled(true);
    e.preventDefault();
    // setMessage(errorMessage);

    setMessage(handleValidation(form.current));

    if (Object.keys(errorMessage).length === 0) {
      console.log("hit");
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            if (result.text === "OK") {
              setOpen();
              setDisabled(false);
              toast.success("Message sent successfully!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          },
          (err) => {
            setDisabled(false);
            setOpen();
            toast.error("Something went wrong please try again later.", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            console.log(err);
          }
        );
    }
    setDisabled(false);
    return;
  };

  return (
    <form ref={form} className="pb-md " onSubmit={handleSend}>
      <div className="flex flex-col md:flex-row flex-wrap justify-between">
        <div className="block  md:w-full my-xsm">
          <label className={labelStyle}>Email: </label>
          <input
            id="Email"
            name="email"
            type="email"
            className={`${noErrorStyle} ${universalStyle} ${
              errorMessage.email && errorInputStyles
            }`}
            placeholder="rlothbrok@viking.axe"
          />
          {errorMessage.email && (
            <p className="text-rose-500 font-body text-error">
              {errorMessage.email}
            </p>
          )}
        </div>
        <div className="block w-full md:w-[45%] my-xsm  ">
          <label className={labelStyle}>Name: </label>
          <input
            id="Name"
            name="name"
            type="text"
            className={`${noErrorStyle} ${universalStyle} ${
              errorMessage.name && errorInputStyles
            }`}
            placeholder="Ragnar Lothbrok"
          />
          {errorMessage.name && (
            <p className="text-rose-500 font-body text-error">
              {errorMessage.name}
            </p>
          )}
        </div>

        <div className="block w-full md:w-[45%] my-xsm">
          <label className={labelStyle}> Subject: </label>
          <input
            id="Subject"
            name="subject"
            type="text"
            className={`${noErrorStyle} ${universalStyle} `}
            placeholder="Build a website"
          />
        </div>
        <div className="block md:w-full h-full my-xsm">
          <label className={labelStyle}> Subject: </label>
          <textarea
            id="Message"
            name="message"
            type="text"
            className={`${noErrorStyle} ${universalStyle} ${
              errorMessage.message ? errorInputStyles : textareaStyle
            }`}
            rows="5"
            placeholder="I want a web site that Odin would be proud of..."
          />
          {errorMessage.message && (
            <p className="text-rose-500 font-body text-error">
              {errorMessage.message}
            </p>
          )}
        </div>
      </div>
      <button
        disabled={disabled}
        className="text-white bg-gradient-to-r from-green to-blue w-btn  h-smallBtn font-body text-para mt-md rounded-bl-small rounded-tr-small drop-shadow-hireButton"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default HireMeForm;
